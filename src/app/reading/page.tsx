'use client';

import React, { useState, useEffect } from 'react';
import CodeBlock from '../components/CodeBlock';
import { 
  FileImage, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  Clock,
  Target,
  Sparkles,
  ChevronDown,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { sampleReadingContent } from '../data/sampleData';
import Link from 'next/link';

export default function ReadingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [showScrollHint, setShowScrollHint] = useState(true);
  
  const currentContent = sampleReadingContent[currentIndex];

  // Calculate estimated reading time
  useEffect(() => {
    const wordCount = currentContent.description.split(' ').length + 
                     (currentContent.codeExamples?.join(' ').split(' ').length || 0);
    setReadingTime(Math.ceil(wordCount / 200)); // 200 words per minute
  }, [currentContent]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      if (window.scrollY > 200) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDescription = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const nextContent = () => {
    if (currentIndex < sampleReadingContent.length - 1) {
      setCompletedSections(prev => new Set([...prev, currentIndex]));
      setCurrentIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevContent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const progressPercentage = ((currentIndex + 1) / sampleReadingContent.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Fixed Progress Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left transition-transform duration-300" 
             style={{ transform: `scaleX(${progressPercentage / 100})` }} />
        <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200/50 px-6 py-3">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-gray-800 truncate max-w-xs">
                {currentContent.question}
              </span>
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {currentIndex + 1} / {sampleReadingContent.length}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 font-medium">Reading Materials</span>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-1">
                  Reading Materials
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    Topic {currentIndex + 1} of {sampleReadingContent.length}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    ~{readingTime} min read
                  </div>
                </div>
              </div>
            </div>
            
            {/* Topic Progress Indicators */}
            <div className="flex items-center gap-2">
              {sampleReadingContent.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 ring-2 ring-indigo-200 scale-125' 
                      : completedSections.has(index)
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden animate-slide-up">
          {/* Dynamic Header */}
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24" />
            
            <div className="relative p-8 md:p-12">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm font-medium mb-1">
                      Learning Topic
                    </div>
                    <div className="w-16 h-1 bg-white/30 rounded-full" />
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-white/80 text-sm mb-1">Progress</div>
                  <div className="text-2xl font-bold">{Math.round(progressPercentage)}%</div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                {currentContent.question}
              </h2>
              
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">Interactive Content</span>
                </div>
                {completedSections.has(currentIndex) && (
                  <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm">Completed</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          {showScrollHint && (
            <div className="flex justify-center -mt-6 relative z-10 animate-bounce">
              <div className="bg-white shadow-lg rounded-full p-3 border-4 border-white">
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          )}
          
          <div className="p-8 md:p-12">
            {/* Enhanced Description */}
            <div className="mb-12">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed text-lg bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl border-l-4 border-indigo-500 shadow-sm">
                  {formatDescription(currentContent.description)}
                </div>
              </div>
            </div>

            {/* Enhanced Code Examples */}
            {currentContent.codeExamples && currentContent.codeExamples.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{'</>'}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Code Examples</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
                </div>
                
                <div className="grid gap-6">
                  {currentContent.codeExamples.map((code, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                          Example {index + 1}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <span className="text-xs text-gray-500">Click to focus</span>
                        </div>
                      </div>
                      <div className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                        <CodeBlock code={code} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Images */}
            {currentContent.image && currentContent.image.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <FileImage className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Visual Examples</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
                </div>
                
                <div className="grid gap-8">
                  {currentContent.image.map((img, index) => (
                    <div key={index} className="group cursor-zoom-in">
                      <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img 
                          src={img} 
                          alt={`Visual example ${index + 1}`}
                          className={`w-full h-auto transition-transform duration-300 group-hover:scale-105 ${
                            currentContent.imageSize === 'small' ? 'max-w-sm' :
                            currentContent.imageSize === 'medium' ? 'max-w-md' :
                            'max-w-full'
                          } mx-auto`}
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU3ZWIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTAwIiByPSI0MCIgZmlsbD0iI2Q1ZDlkZiIgb3BhY2l0eT0iMC41Ii8+PHRleHQgeD0iNTAlIiB5PSI1NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNnB4IiBmaWxsPSIjNjc3NDhkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9IjUwMCI+VmlzdWFsIENvbnRlbnQgTm90IEF2YWlsYWJsZTwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjY1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEycHgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DbGljayB0byByZWZyZXNoPC90ZXh0Pjwvc3ZnPg==';
                          }}
                        />
                        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Image {index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Tables */}
            {currentContent.tables && currentContent.tables.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">#</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Reference Table</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
                </div>
                
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white">
                      {currentContent.tables.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`
                          ${rowIndex === 0 
                            ? 'bg-gradient-to-r from-indigo-50 to-purple-50' 
                            : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200'
                          }
                        `}>
                          {row.map((cell, cellIndex) => (
                            <td 
                              key={cellIndex} 
                              className={`border-b border-gray-100 px-6 py-4 ${
                                rowIndex === 0 
                                  ? 'font-bold text-gray-800 text-sm uppercase tracking-wider' 
                                  : 'text-gray-700'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Navigation */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <button
                  onClick={prevContent}
                  disabled={currentIndex === 0}
                  className="group flex items-center gap-3 px-6 py-4 bg-white text-gray-600 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                >
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  <div className="text-left">
                    <div className="font-medium">Previous Topic</div>
                    <div className="text-sm text-gray-500">Continue learning</div>
                  </div>
                </button>

                <Link
                  href="/quiz"
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-indigo-700 hover:to-purple-700"
                >
                  <div className="text-center">
                    <div className="font-bold">Practice Quiz</div>
                    <div className="text-sm text-indigo-100">Test your knowledge</div>
                  </div>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={nextContent}
                  disabled={currentIndex === sampleReadingContent.length - 1}
                  className="group flex items-center gap-3 px-6 py-4 bg-white text-gray-600 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                >
                  <div className="text-right">
                    <div className="font-medium">Next Topic</div>
                    <div className="text-sm text-gray-500">Keep exploring</div>
                  </div>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              
              {/* Progress Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Overall Progress</span>
                  <span className="font-medium">{Math.round(progressPercentage)}% Complete</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}