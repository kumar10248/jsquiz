'use client';
import CodeBlock from '../components/CodeBlock';
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, Trophy, Clock, Target } from 'lucide-react';
import { sampleQuizQuestions } from '../data/sampleData';
import { UserProgress } from '../types';
import Link from 'next/link';

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    totalQuestions: sampleQuizQuestions.length,
    correctAnswers: 0,
    completedQuestions: []
  });
  const [startTime] = useState<Date>(new Date());
  const [timeElapsed, setTimeElapsed] = useState(0);

  const currentQuiz = sampleQuizQuestions[currentIndex];

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(Math.floor((new Date().getTime() - startTime.getTime()) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(optionIndex);
    const correct = currentQuiz.options[optionIndex].correct;
    setIsCorrect(correct);
    setShowExplanation(true);

    // Update progress
    if (!userProgress.completedQuestions.includes(currentIndex)) {
      setUserProgress(prev => ({
        ...prev,
        correctAnswers: correct ? prev.correctAnswers + 1 : prev.correctAnswers,
        completedQuestions: [...prev.completedQuestions, currentIndex]
      }));
    }
  };

  const resetQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
  };

  const nextQuestion = () => {
    if (currentIndex < sampleQuizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetQuestion();
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetQuestion();
    }
  };

  // const resetQuiz = () => {
  //   setCurrentIndex(0);
  //   setSelectedAnswer(null);
  //   setShowExplanation(false);
  //   setIsCorrect(null);
  //   setUserProgress({
  //     totalQuestions: sampleQuizQuestions.length,
  //     correctAnswers: 0,
  //     completedQuestions: []
  //   });
  //   setStartTime(new Date());
  // };

  const getQuestionStatus = (index: number) => {
    if (index === currentIndex) return 'current';
    if (userProgress.completedQuestions.includes(index)) {
      return 'correct'; // Simplified - you could track individual question results
    }
    return 'unattempted';
  };

  const completionPercentage = (userProgress.completedQuestions.length / userProgress.totalQuestions) * 100;
  // const scorePercentage = userProgress.completedQuestions.length > 0 
  //   ? (userProgress.correctAnswers / userProgress.completedQuestions.length) * 100 
  //   : 0;

  return (
    <div className="min-h-screen bg-slate-900 flex overflow-x-hidden">
      {/* Left Sidebar - Fixed and Non-scrollable */}
      <div className="hidden lg:flex lg:w-80 bg-slate-800 border-r border-slate-700 flex-col fixed left-0 top-0 h-screen z-40">
        {/* Header */}
        
        <div className="p-4 lg:p-6 border-b border-slate-700 flex-shrink-0">
          <h1>Quiz Mode</h1>
          <Link href="/" className="flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-3 lg:mb-4 w-full">
            <ArrowLeft className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm lg:text-base">Back to Selection</span>
          </Link>
        
        </div>

        {/* Stats */}
        <div className="p-4 lg:p-6 space-y-3 lg:space-y-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Time:</span>
            <div className="flex items-center text-amber-400">
              <Clock className="w-4 h-4 mr-1" />
              <span className="font-mono text-sm">{formatTime(timeElapsed)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Score:</span>
            <div className="flex items-center text-emerald-400">
              <Trophy className="w-4 h-4 mr-1" />
              <span className="text-sm">{userProgress.correctAnswers}/{userProgress.totalQuestions}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Completion:</span>
            <div className="flex items-center text-purple-400">
              <Target className="w-4 h-4 mr-1" />
              <span className="text-sm">{Math.round(completionPercentage)}%</span>
            </div>
          </div>
        </div>

        {/* Questions Navigation - Scrollable */}
        <div className="p-4 lg:p-6 flex-1 overflow-y-auto">
          <h3 className="text-xs lg:text-sm font-medium text-slate-400 mb-3 lg:mb-4 uppercase tracking-wider">Questions Navigation</h3>
          <div className="grid grid-cols-4 gap-2">
            {sampleQuizQuestions.map((_, index) => {
              const status = getQuestionStatus(index);
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetQuestion();
                  }}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    status === 'current'
                      ? 'bg-amber-500 text-slate-900'
                      : status === 'correct'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Session Progress - Fixed at bottom */}
        <div className="p-4 lg:p-6 bg-slate-800 border-t border-slate-700 flex-shrink-0">
          <h3 className="text-xs lg:text-sm font-medium text-slate-400 mb-3 lg:mb-4 uppercase tracking-wider">Session Progress</h3>
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
            <span className="text-xs text-slate-400">Q{currentIndex + 1}</span>
            <span className="ml-auto text-xs text-slate-400">Total: {sampleQuizQuestions.length}</span>
          </div>
          
          {/* Legend */}
          <div className="mt-4 lg:mt-6 space-y-2">
            <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Legend</div>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded mr-2 flex-shrink-0"></div>
                <span className="text-slate-400">Current Question</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-600 rounded mr-2 flex-shrink-0"></div>
                <span className="text-slate-400">Correct Answer</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded mr-2 flex-shrink-0"></div>
                <span className="text-slate-400">Incorrect Answer</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-slate-600 rounded mr-2 flex-shrink-0"></div>
                <span className="text-slate-400">Not Attempted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Offset by sidebar width */}
      <div className="flex-1 flex flex-col lg:ml-80 w-full overflow-x-hidden">
        {/* Top Header */}
        <div className="bg-slate-800 border-b border-slate-700 p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 min-w-0 flex-1">
              <div className="lg:hidden">
                <Link href="/" className="flex items-center text-amber-400 hover:text-amber-300">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </Link>
              </div>
              <h2 className="text-lg lg:text-xl font-semibold text-white truncate">
                Question {currentIndex + 1} of {sampleQuizQuestions.length}
              </h2>
            </div>
            <div className="flex items-center text-amber-400 lg:hidden flex-shrink-0">
              <Clock className="w-4 h-4 mr-1" />
              <span className="font-mono">{formatTime(timeElapsed)}</span>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          <div className="max-w-4xl mx-auto w-full">
            {/* Question Alert */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-bold text-slate-900">!</span>
                </div>
                <span className="text-amber-400 font-medium">Select one answer</span>
              </div>
            </div>

            {/* Question Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              {currentQuiz.title}
            </h1>

            {/* Code Block */}
            {currentQuiz.code && (
              <div className="mb-8">
                <CodeBlock code={currentQuiz.code} />
              </div>
            )}

            {/* Answer Options */}
            <div className="space-y-4 mb-8">
              {currentQuiz.options.map((option, index) => {
                const letter = String.fromCharCode(65 + index);
                const isSelected = selectedAnswer === index;
                const isCorrectOption = option.correct;
                
                let buttonClass = "w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ";
                
                if (showExplanation) {
                  if (isSelected && isCorrect) {
                    buttonClass += "border-emerald-500 bg-emerald-500/10 text-emerald-400";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-500/10 text-red-400";
                  } else if (isCorrectOption) {
                    buttonClass += "border-emerald-500 bg-emerald-500/10 text-emerald-400";
                  } else {
                    buttonClass += "border-slate-600 bg-slate-800/50 text-slate-400";
                  }
                } else {
                  if (isSelected) {
                    buttonClass += "border-amber-500 bg-amber-500/10 text-amber-400";
                  } else {
                    buttonClass += "border-slate-600 bg-slate-800/50 text-slate-300 hover:border-amber-500/50 hover:bg-amber-500/5";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    <div className="flex items-start w-full">
                      <div className="flex items-start mr-4 flex-shrink-0">
                        <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 ${
                          showExplanation && isSelected && isCorrect ? 'border-emerald-500 bg-emerald-500 text-slate-900' :
                          showExplanation && isSelected && !isCorrect ? 'border-red-500 bg-red-500 text-white' :
                          showExplanation && isCorrectOption ? 'border-emerald-500 bg-emerald-500 text-slate-900' :
                          isSelected ? 'border-amber-500 bg-amber-500 text-slate-900' :
                          'border-slate-500 text-slate-400'
                        }`}>
                          {letter}
                        </div>
                        <span className="text-lg font-medium break-words flex-1 min-w-0">
                          {option.text}
                        </span>
                      </div>
                      <div className="ml-auto flex-shrink-0">
                        {showExplanation && isSelected && (
                          <div>
                            {isCorrect ? (
                              <CheckCircle className="w-6 h-6 text-emerald-500" />
                            ) : (
                              <XCircle className="w-6 h-6 text-red-500" />
                            )}
                          </div>
                        )}
                        {showExplanation && isCorrectOption && !isSelected && (
                          <div>
                            <CheckCircle className="w-6 h-6 text-emerald-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Explanation</h3>
                <p className="text-slate-300 leading-relaxed">{currentQuiz.explanation}</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-slate-800 border-t border-slate-700 p-4 lg:p-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className="flex items-center px-4 lg:px-6 py-3 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>

            <div className="flex items-center space-x-2 lg:space-x-4">
              <button
                onClick={resetQuestion}
                className="px-4 lg:px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex-shrink-0"
              >
                Reset
              </button>
            </div>

            <button
              onClick={nextQuestion}
              disabled={currentIndex === sampleQuizQuestions.length - 1}
              className="flex items-center px-4 lg:px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Stats Overlay - Adjust z-index to be above fixed sidebar */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-xl p-4 z-50">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-emerald-400">
            <Trophy className="w-4 h-4 mr-1" />
            <span>{userProgress.correctAnswers}/{userProgress.totalQuestions}</span>
          </div>
          <div className="flex items-center text-purple-400">
            <Target className="w-4 h-4 mr-1" />
            <span>{Math.round(completionPercentage)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
