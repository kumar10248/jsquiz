'use client';
import CodeBlock from '../components/CodeBlock';


import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, RefreshCw, Brain, Trophy, Clock, Zap, Target, Star, ChevronRight, Home, Sparkles, Award, TrendingUp, BookOpen, Users } from 'lucide-react';

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
  const [startTime, setStartTime] = useState<Date>(new Date());

  const currentQuiz = sampleQuizQuestions[currentIndex];

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

  const resetQuiz = () => {
    setCurrentIndex(0);
    setUserProgress({
      totalQuestions: sampleQuizQuestions.length,
      correctAnswers: 0,
      completedQuestions: []
    });
    setStartTime(new Date());
    resetQuestion();
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const completionPercentage = (userProgress.completedQuestions.length / userProgress.totalQuestions) * 100;
  const scorePercentage = userProgress.completedQuestions.length > 0 
    ? (userProgress.correctAnswers / userProgress.completedQuestions.length) * 100 
    : 0;

  return (
    <>
      {/* Navigation */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Quiz Practice</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Quiz Practice
            </h1>
          </div>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {currentIndex + 1}/{userProgress.totalQuestions}
              </div>
              <div className="text-sm text-gray-600">Progress</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {userProgress.correctAnswers}
              </div>
              <div className="text-sm text-gray-600">Correct</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className={`text-2xl font-bold ${getScoreColor(scorePercentage)}`}>
                {Math.round(scorePercentage)}%
              </div>
              <div className="text-sm text-gray-600">Score</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {Math.round(completionPercentage)}%
              </div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm text-gray-500">{Math.round(completionPercentage)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Quiz Content */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">{currentQuiz.title}</h2>
            <div className="text-white/80 text-lg">
              Question {currentIndex + 1} of {sampleQuizQuestions.length}
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Code Block */}
          {currentQuiz.code && (
            <div className="mb-8">
              <div className="text-sm text-gray-600 mb-3 font-medium">
                What will be the output of this code?
              </div>
              <CodeBlock code={currentQuiz.code} />
            </div>
          )}

          {/* Options */}
          <div className="space-y-4 mb-8">
            <div className="text-lg font-semibold text-gray-800 mb-4">
              Choose the correct answer:
            </div>
            {currentQuiz.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedAnswer === index
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 shadow-lg'
                      : 'border-red-500 bg-red-50 shadow-lg'
                    : showExplanation && option.correct
                    ? 'border-green-500 bg-green-50 shadow-lg'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md'
                }`}
                disabled={showExplanation}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                      selectedAnswer === index
                        ? isCorrect
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-red-500 bg-red-500 text-white'
                        : showExplanation && option.correct
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300 text-gray-600'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span 
                      className="text-gray-800 font-medium" 
                      dangerouslySetInnerHTML={{ __html: option.text }} 
                    />
                  </div>
                  
                  {showExplanation && selectedAnswer === index && (
                    isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )
                  )}
                  {showExplanation && option.correct && selectedAnswer !== index && (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-8 animate-slide-up">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">?</span>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 text-lg mb-3">Explanation:</h3>
                  <p 
                    className="text-blue-700 leading-relaxed text-base" 
                    dangerouslySetInnerHTML={{ __html: currentQuiz.explanation }} 
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={resetQuestion}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-100 text-indigo-600 rounded-xl hover:bg-indigo-200 transition-all duration-300"
                title="Reset current question"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </button>

              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 px-6 py-3 bg-purple-100 text-purple-600 rounded-xl hover:bg-purple-200 transition-all duration-300"
                title="Restart entire quiz"
              >
                <Trophy className="w-4 h-4" />
                Restart Quiz
              </button>
            </div>

            <button
              onClick={nextQuestion}
              disabled={currentIndex === sampleQuizQuestions.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Completion Message */}
          {userProgress.completedQuestions.length === userProgress.totalQuestions && (
            <div className="mt-8 p-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl text-center animate-slide-up">
              <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Quiz Completed! 🎉</h3>
              <p className="text-green-700 text-lg mb-4">
                You scored {userProgress.correctAnswers} out of {userProgress.totalQuestions} questions correctly!
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="/reading"
                  className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                >
                  Continue Learning
                </Link>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-white text-green-600 border border-green-300 rounded-xl hover:bg-green-50 transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
