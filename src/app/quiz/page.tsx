'use client';
import CodeBlock from '../components/CodeBlock';
import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, Trophy, Clock, Target, Menu, X, Home, Sparkles, RotateCcw, ChevronRight } from 'lucide-react';
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

  const getQuestionStatus = (index: number) => {
    if (index === currentIndex) return 'current';
    if (userProgress.completedQuestions.includes(index)) {
      return 'correct';
    }
    return 'unattempted';
  };

  const completionPercentage = (userProgress.completedQuestions.length / userProgress.totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 flex flex-col lg:flex-row overflow-x-hidden">
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] glass border-l border-slate-700/50 overflow-y-auto animate-slide-left">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Quiz Navigation
              </h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-700/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Mobile Stats */}
            <div className="p-4 space-y-3 border-b border-slate-700/50">
              <div className="flex items-center justify-between glass-light rounded-xl p-3">
                <span className="text-slate-400 text-sm">Time</span>
                <div className="flex items-center text-amber-400 font-mono">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{formatTime(timeElapsed)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between glass-light rounded-xl p-3">
                <span className="text-slate-400 text-sm">Score</span>
                <div className="flex items-center text-emerald-400 font-semibold">
                  <Trophy className="w-4 h-4 mr-2" />
                  <span>{userProgress.correctAnswers}/{userProgress.totalQuestions}</span>
                </div>
              </div>
              <div className="flex items-center justify-between glass-light rounded-xl p-3">
                <span className="text-slate-400 text-sm">Progress</span>
                <div className="flex items-center text-purple-400 font-semibold">
                  <Target className="w-4 h-4 mr-2" />
                  <span>{Math.round(completionPercentage)}%</span>
                </div>
              </div>
            </div>

            {/* Mobile Questions Grid */}
            <div className="p-4">
              <h3 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">Questions</h3>
              <div className="grid grid-cols-5 gap-2">
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
                      className={`aspect-square rounded-xl text-sm font-semibold transition-all duration-200 ${
                        status === 'current'
                          ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/25'
                          : status === 'correct'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 border border-slate-600/30'
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

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-80 xl:w-96 glass border-r border-slate-700/50 flex-col fixed left-0 top-0 h-screen z-40">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <Link href="/" className="flex items-center text-slate-400 hover:text-amber-400 transition-colors mb-4 group">
            <Home className="w-4 h-4 mr-2" />
            <span className="text-sm">Back to Home</span>
            <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Quiz Mode</h1>
              <p className="text-sm text-slate-400">Test your knowledge</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-6 space-y-4">
          <div className="glass-light rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-sm">Time Elapsed</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-2xl font-bold font-mono text-amber-400">{formatTime(timeElapsed)}</span>
          </div>
          
          <div className="glass-light rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-sm">Score</span>
              <Trophy className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-2xl font-bold text-emerald-400">{userProgress.correctAnswers}/{userProgress.totalQuestions}</span>
          </div>
          
          <div className="glass-light rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-sm">Completion</span>
              <Target className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-purple-400">{Math.round(completionPercentage)}%</span>
              <div className="flex-1 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Questions Navigation */}
        <div className="p-6 flex-1 overflow-y-auto">
          <h3 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">Question Navigator</h3>
          <div className="grid grid-cols-5 gap-2">
            {sampleQuizQuestions.map((_, index) => {
              const status = getQuestionStatus(index);
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetQuestion();
                  }}
                  className={`aspect-square rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                    status === 'current'
                      ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/25'
                      : status === 'correct'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 border border-slate-600/30'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="p-6 border-t border-slate-700/50">
          <h3 className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">Legend</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded" />
              <span className="text-slate-400">Current</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500/50 rounded border border-emerald-500/30" />
              <span className="text-slate-400">Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-700/50 rounded border border-slate-600/30" />
              <span className="text-slate-400">Not Attempted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-80 xl:ml-96 w-full overflow-x-hidden">
        {/* Mobile Top Header */}
        <div className="glass border-b border-slate-700/50 p-4 lg:hidden sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-slate-400 hover:text-amber-400 p-2 -ml-2 rounded-lg transition-colors">
              <Home className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-xs text-slate-400">Question</div>
                <div className="text-sm font-bold text-white">{currentIndex + 1}/{sampleQuizQuestions.length}</div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-700/50 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Mobile Progress Bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
              <span>Progress</span>
              <span>{Math.round(completionPercentage)}%</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Top Header */}
        <div className="hidden lg:block glass border-b border-slate-700/50 p-6 sticky top-0 z-30">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                {currentIndex + 1}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Question {currentIndex + 1} of {sampleQuizQuestions.length}</h2>
                <p className="text-sm text-slate-400">Select the best answer</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-amber-400">
                <Clock className="w-4 h-4" />
                <span className="font-mono text-sm">{formatTime(timeElapsed)}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Trophy className="w-4 h-4" />
                <span className="font-semibold text-sm">{userProgress.correctAnswers}/{userProgress.totalQuestions}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto w-full">
            {/* Mobile Quick Stats */}
            <div className="lg:hidden grid grid-cols-3 gap-3 mb-6">
              <div className="glass-light rounded-xl p-3 text-center">
                <Clock className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <div className="text-sm font-mono text-white">{formatTime(timeElapsed)}</div>
                <div className="text-xs text-slate-400">Time</div>
              </div>
              <div className="glass-light rounded-xl p-3 text-center">
                <Trophy className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="text-sm font-bold text-white">{userProgress.correctAnswers}/{userProgress.totalQuestions}</div>
                <div className="text-xs text-slate-400">Score</div>
              </div>
              <div className="glass-light rounded-xl p-3 text-center">
                <Target className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                <div className="text-sm font-bold text-white">{Math.round(completionPercentage)}%</div>
                <div className="text-xs text-slate-400">Progress</div>
              </div>
            </div>

            {/* Question Card */}
            <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 mb-6 animate-fade-in">
              {/* Question Alert */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Select one answer</span>
              </div>

              {/* Question Title */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 leading-relaxed">
                {currentQuiz.title}
              </h1>

              {/* Code Block */}
              {currentQuiz.code && (
                <div className="mb-8">
                  <CodeBlock code={currentQuiz.code} />
                </div>
              )}
            </div>

            {/* Answer Options */}
            <div className="space-y-3 sm:space-y-4 mb-8">
              {currentQuiz.options.map((option, index) => {
                const letter = String.fromCharCode(65 + index);
                const isSelected = selectedAnswer === index;
                const isCorrectOption = option.correct;
                
                let buttonClass = "group w-full text-left p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border-2 transition-all duration-300 ";
                
                if (showExplanation) {
                  if (isSelected && isCorrect) {
                    buttonClass += "border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-500/10 shadow-lg shadow-red-500/10";
                  } else if (isCorrectOption) {
                    buttonClass += "border-emerald-500 bg-emerald-500/10";
                  } else {
                    buttonClass += "border-slate-700/50 bg-slate-800/30 opacity-50";
                  }
                } else {
                  if (isSelected) {
                    buttonClass += "border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10";
                  } else {
                    buttonClass += "border-slate-700/50 bg-slate-800/30 hover:border-amber-500/50 hover:bg-slate-700/30 hover:shadow-lg";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    <div className="flex items-start gap-4">
                      {/* Letter Badge */}
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sm sm:text-base font-bold flex-shrink-0 transition-all duration-300 ${
                        showExplanation && isSelected && isCorrect ? 'bg-emerald-500 text-white' :
                        showExplanation && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                        showExplanation && isCorrectOption ? 'bg-emerald-500 text-white' :
                        isSelected ? 'bg-amber-500 text-slate-900' :
                        'bg-slate-700/50 text-slate-300 group-hover:bg-slate-600/50'
                      }`}>
                        {letter}
                      </div>
                      
                      {/* Option Text */}
                      <span className={`text-base sm:text-lg font-medium flex-1 pt-2 transition-colors ${
                        showExplanation && isSelected && isCorrect ? 'text-emerald-400' :
                        showExplanation && isSelected && !isCorrect ? 'text-red-400' :
                        showExplanation && isCorrectOption ? 'text-emerald-400' :
                        showExplanation ? 'text-slate-500' :
                        isSelected ? 'text-amber-400' :
                        'text-slate-300'
                      }`}>
                        {option.text}
                      </span>
                      
                      {/* Result Icon */}
                      {showExplanation && (isSelected || isCorrectOption) && (
                        <div className="flex-shrink-0 pt-2">
                          {(isSelected && isCorrect) || (!isSelected && isCorrectOption) ? (
                            <CheckCircle className="w-6 h-6 text-emerald-500" />
                          ) : isSelected && !isCorrect ? (
                            <XCircle className="w-6 h-6 text-red-500" />
                          ) : null}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className={`glass rounded-2xl p-6 md:p-8 mb-8 border-l-4 animate-fade-in ${
                isCorrect ? 'border-emerald-500' : 'border-red-500'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  {isCorrect ? (
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white">
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{currentQuiz.explanation}</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="glass border-t border-slate-700/50 p-4 sm:p-6 sticky bottom-0">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={prevQuestion}
                disabled={currentIndex === 0}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 glass-light text-slate-300 rounded-xl hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={resetQuestion}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-slate-700/50 text-slate-300 rounded-xl hover:bg-slate-600/50 transition-all duration-200 font-medium"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>

              <button
                onClick={nextQuestion}
                disabled={currentIndex === sampleQuizQuestions.length - 1}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
