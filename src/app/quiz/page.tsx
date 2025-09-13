'use client';
import CodeBlock from '../components/CodeBlock';
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, Trophy, Clock, Target, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-slate-900 flex flex-col lg:flex-row overflow-x-hidden">
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-slate-800 border-l border-slate-700 overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <h2 className="text-lg font-bold text-white">Quiz Navigation</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Mobile Stats */}
            <div className="p-4 space-y-4 border-b border-slate-700">
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
                <span className="text-slate-400 text-sm">Progress:</span>
                <div className="flex items-center text-purple-400">
                  <Target className="w-4 h-4 mr-1" />
                  <span className="text-sm">{Math.round(completionPercentage)}%</span>
                </div>
              </div>
            </div>

            {/* Mobile Questions Grid */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Questions</h3>
              <div className="grid grid-cols-4 gap-3">
                {sampleQuizQuestions.map((_, index) => {
                  const status = getQuestionStatus(index);
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        resetQuestion();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-12 h-12 rounded-lg text-sm font-medium transition-colors ${
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
          </div>
        </div>
      )}

      {/* Desktop Sidebar - Fixed and Non-scrollable */}
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-80 w-full overflow-x-hidden">
        {/* Mobile Top Header */}
        <div className="bg-slate-800 border-b border-slate-700 p-3 lg:p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-amber-400 hover:text-amber-300 p-2 -ml-2 rounded-lg">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="text-sm">Back</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-xs text-slate-400">Question</div>
                <div className="text-sm font-bold text-white">{currentIndex + 1}/{sampleQuizQuestions.length}</div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Mobile Progress Bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Progress</span>
              <span>{Math.round(completionPercentage)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Top Header */}
        <div className="hidden lg:block bg-slate-800 border-b border-slate-700 p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 min-w-0 flex-1">
              <h2 className="text-lg lg:text-xl font-semibold text-white truncate">
                Question {currentIndex + 1} of {sampleQuizQuestions.length}
              </h2>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 p-3 sm:p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          <div className="max-w-4xl mx-auto w-full">
            {/* Mobile Quick Stats */}
            <div className="lg:hidden grid grid-cols-3 gap-3 mb-6">
              <div className="bg-slate-800 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center text-amber-400 mb-1">
                  <Clock className="w-4 h-4 mr-1" />
                </div>
                <div className="text-xs font-mono text-white">{formatTime(timeElapsed)}</div>
                <div className="text-xs text-slate-400">Time</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center text-emerald-400 mb-1">
                  <Trophy className="w-4 h-4 mr-1" />
                </div>
                <div className="text-xs font-bold text-white">{userProgress.correctAnswers}/{userProgress.totalQuestions}</div>
                <div className="text-xs text-slate-400">Score</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center text-purple-400 mb-1">
                  <Target className="w-4 h-4 mr-1" />
                </div>
                <div className="text-xs font-bold text-white">{Math.round(completionPercentage)}%</div>
                <div className="text-xs text-slate-400">Progress</div>
              </div>
            </div>

            {/* Question Alert */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-amber-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-xs font-bold text-slate-900">!</span>
                </div>
                <span className="text-amber-400 font-medium text-sm sm:text-base">Select one answer</span>
              </div>
            </div>

            {/* Question Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              {currentQuiz.title}
            </h1>

            {/* Code Block */}
            {currentQuiz.code && (
              <div className="mb-8">
                <CodeBlock code={currentQuiz.code} />
              </div>
            )}

            {/* Answer Options */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {currentQuiz.options.map((option, index) => {
                const letter = String.fromCharCode(65 + index);
                const isSelected = selectedAnswer === index;
                const isCorrectOption = option.correct;
                
                let buttonClass = "w-full text-left p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 min-h-[60px] active:scale-[0.98] ";
                
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
                      <div className="flex items-start mr-3 sm:mr-4 flex-shrink-0">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 sm:mr-4 flex-shrink-0 ${
                          showExplanation && isSelected && isCorrect ? 'border-emerald-500 bg-emerald-500 text-slate-900' :
                          showExplanation && isSelected && !isCorrect ? 'border-red-500 bg-red-500 text-white' :
                          showExplanation && isCorrectOption ? 'border-emerald-500 bg-emerald-500 text-slate-900' :
                          isSelected ? 'border-amber-500 bg-amber-500 text-slate-900' :
                          'border-slate-500 text-slate-400'
                        }`}>
                          {letter}
                        </div>
                        <span className="text-sm sm:text-lg font-medium break-words flex-1 min-w-0 leading-relaxed">
                          {option.text}
                        </span>
                      </div>
                      <div className="ml-auto flex-shrink-0">
                        {showExplanation && isSelected && (
                          <div>
                            {isCorrect ? (
                              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                            ) : (
                              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                            )}
                          </div>
                        )}
                        {showExplanation && isCorrectOption && !isSelected && (
                          <div>
                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
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
              <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Explanation</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{currentQuiz.explanation}</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-slate-800 border-t border-slate-700 p-3 sm:p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <button
                onClick={prevQuestion}
                disabled={currentIndex === 0}
                className="w-full sm:w-auto flex items-center justify-center px-4 lg:px-6 py-3 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[48px]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Previous Question</span>
              </button>

              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={resetQuestion}
                  className="flex items-center justify-center px-4 lg:px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors min-h-[48px]"
                >
                  Reset
                </button>
                
                {/* Mobile Question Counter */}
                <div className="sm:hidden bg-slate-700 px-3 py-2 rounded-lg text-center">
                  <div className="text-xs text-slate-400">Question</div>
                  <div className="text-sm font-bold text-white">{currentIndex + 1}/{sampleQuizQuestions.length}</div>
                </div>
              </div>

              <button
                onClick={nextQuestion}
                disabled={currentIndex === sampleQuizQuestions.length - 1}
                className="w-full sm:w-auto flex items-center justify-center px-4 lg:px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[48px]"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stats Overlay - Shows on small screens when not using mobile menu */}
      <div className="lg:hidden fixed bottom-4 left-3 right-3 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-xl p-3 z-40 shadow-lg">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-emerald-400">
            <Trophy className="w-4 h-4 mr-1" />
            <span className="font-medium">{userProgress.correctAnswers}/{userProgress.totalQuestions}</span>
            <span className="text-slate-400 ml-1">Score</span>
          </div>
          <div className="flex items-center text-amber-400">
            <Clock className="w-4 h-4 mr-1" />
            <span className="font-mono">{formatTime(timeElapsed)}</span>
          </div>
          <div className="flex items-center text-purple-400">
            <Target className="w-4 h-4 mr-1" />
            <span className="font-medium">{Math.round(completionPercentage)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
