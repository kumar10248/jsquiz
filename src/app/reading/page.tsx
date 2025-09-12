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
  CheckCircle2,
  Code,
  Table,
  Home,
  PlayCircle,
  Bookmark,
  Share2
} from 'lucide-react';
import { sampleReadingContent } from '../data/sampleData';
import { ReadingContent } from '../types';
import Link from 'next/link';
import Image from 'next/image';

export default function EnhancedReadingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  
  const currentContent = sampleReadingContent[currentIndex];

  // Calculate estimated reading time
  useEffect(() => {
    const wordCount = currentContent.description.split(' ').length + 
                     (currentContent.codeExamples?.join(' ').split(' ').length || 0);
    setReadingTime(Math.ceil(wordCount / 200));
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
    return text.split('\n').map((line: string, index: number) => (
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Floating Header - Only shows on scroll */}
      <div className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="mx-2 sm:mx-4 mt-2 bg-slate-800/95 backdrop-blur-lg border border-slate-700/50 rounded-xl md:rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
              <span className="font-semibold text-white truncate text-xs sm:text-sm">
                {currentContent.question}
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-xs text-slate-400 font-medium">
                {currentIndex + 1} / {sampleReadingContent.length}
              </div>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-1.5 md:p-2 rounded-lg transition-colors ${bookmarked ? 'bg-amber-500 text-white' : 'bg-slate-700 text-slate-400 hover:text-white'}`}
              >
                <Bookmark className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 animate-fade-in">
          <div className="flex items-center text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-2">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-slate-200 font-medium">Reading Materials</span>
          </div>

          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-slate-700/50 p-4 sm:p-6 md:p-8 mb-6 md:mb-8">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 md:gap-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                    Reading Materials
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-slate-400">
                    <div className="flex items-center gap-1 md:gap-2 bg-slate-700/50 px-2 md:px-3 py-1 rounded-full">
                      <Target className="w-3 h-3 md:w-4 md:h-4" />
                      Topic {currentIndex + 1} of {sampleReadingContent.length}
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 bg-slate-700/50 px-2 md:px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      ~{readingTime} min read
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 bg-slate-700/50 px-2 md:px-3 py-1 rounded-full">
                      <Eye className="w-3 h-3 md:w-4 md:h-4" />
                      Interactive Content
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center xl:justify-end">
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-lg md:rounded-xl transition-all text-sm ${
                    bookmarked 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <Bookmark className="w-3 h-3 md:w-4 md:h-4" />
                  {bookmarked ? 'Saved' : 'Save'}
                </button>
                <button className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-slate-700 text-slate-300 rounded-lg md:rounded-xl hover:bg-slate-600 transition-colors text-sm">
                  <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                  Share
                </button>
              </div>
            </div>
            
            {/* Topic Progress Indicators */}
            <div className="flex items-center gap-1 md:gap-2 mt-6 md:mt-8 justify-center xl:justify-start overflow-x-auto pb-2">
              {sampleReadingContent.map((_: ReadingContent, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 flex-shrink-0 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 ring-1 md:ring-2 ring-amber-200 scale-125' 
                      : completedSections.has(index)
                      ? 'bg-green-500 hover:scale-110'
                      : 'bg-slate-600 hover:bg-slate-500 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="xl:col-span-1 order-2 xl:order-1">
            <div className="xl:sticky xl:top-24 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                Contents
              </h3>
              <div className="grid grid-cols-2 xl:grid-cols-1 gap-2">
                <div className="text-xs md:text-sm text-slate-400 bg-slate-700/50 px-2 md:px-3 py-1 md:py-2 rounded-lg">
                  📖 Overview
                </div>
                {currentContent.codeExamples && (
                  <div className="text-xs md:text-sm text-slate-400 bg-slate-700/50 px-2 md:px-3 py-1 md:py-2 rounded-lg flex items-center gap-1 md:gap-2">
                    <Code className="w-3 h-3 md:w-4 md:h-4" />
                    Code Examples
                  </div>
                )}
                {currentContent.image && (
                  <div className="text-xs md:text-sm text-slate-400 bg-slate-700/50 px-2 md:px-3 py-1 md:py-2 rounded-lg flex items-center gap-1 md:gap-2">
                    <FileImage className="w-3 h-3 md:w-4 md:h-4" />
                    Visual Examples
                  </div>
                )}
                {currentContent.tables && (
                  <div className="text-xs md:text-sm text-slate-400 bg-slate-700/50 px-2 md:px-3 py-1 md:py-2 rounded-lg flex items-center gap-1 md:gap-2">
                    <Table className="w-3 h-3 md:w-4 md:h-4" />
                    Reference Table
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="xl:col-span-3 order-1 xl:order-2">
            <article className="bg-slate-800/30 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
              {/* Article Header */}
              <header className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl transform translate-x-16 md:translate-x-32 -translate-y-16 md:-translate-y-32" />
                <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-12 md:-translate-x-24 translate-y-12 md:translate-y-24" />
                
                <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center">
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white/80 text-xs md:text-sm font-medium">Learning Topic</div>
                        <div className="w-12 md:w-16 h-1 bg-white/30 rounded-full mt-1" />
                      </div>
                    </div>
                    
                    <div className="text-left sm:text-right">
                      <div className="text-white/80 text-xs md:text-sm">Module</div>
                      <div className="text-xl md:text-2xl font-bold">{currentIndex + 1} / {sampleReadingContent.length}</div>
                    </div>
                  </div>
                  
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 md:mb-4">
                    {currentContent.question}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                      <PlayCircle className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm">Interactive</span>
                    </div>
                    {completedSections.has(currentIndex) && (
                      <div className="flex items-center gap-1 md:gap-2 bg-green-500/30 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </header>

              {/* Scroll Hint */}
              {showScrollHint && (
                <div className="flex justify-center -mt-6 relative z-10">
                  <div className="bg-slate-700 shadow-lg rounded-full p-3 border-4 border-slate-600 animate-bounce">
                    <ChevronDown className="w-5 h-5 text-slate-300" />
                  </div>
                </div>
              )}
              
              {/* Article Content */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-8 md:space-y-12">
                {/* Description Section */}
                <section>
                  <div className="prose prose-sm md:prose-lg max-w-none">
                    <div className="text-slate-300 leading-relaxed text-base md:text-lg bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border-l-4 border-amber-500 shadow-sm backdrop-blur-sm">
                      {formatDescription(currentContent.description)}
                    </div>
                  </div>
                </section>

                {/* Code Examples Section */}
                {currentContent.codeExamples && currentContent.codeExamples.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg md:rounded-xl flex items-center justify-center">
                        <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">Code Examples</h2>
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent" />
                    </div>
                    
                    <div className="space-y-4 md:space-y-6">
                      {currentContent.codeExamples.map((code: string, index: number) => (
                        <div key={index} className="group">
                          <div className="flex items-center justify-between mb-2 md:mb-3">
                            <div className="text-xs md:text-sm font-semibold text-slate-300 bg-slate-700/50 px-3 md:px-4 py-1 md:py-2 rounded-full">
                              Example {index + 1}
                            </div>
                          </div>
                          <div className="transform transition-all duration-300 hover:scale-[1.01]">
                            <CodeBlock code={code} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Visual Examples Section */}
                {currentContent.image && currentContent.image.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg md:rounded-xl flex items-center justify-center">
                        <FileImage className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">Visual Examples</h2>
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent" />
                    </div>
                    
                    <div className="space-y-4 md:space-y-6">
                      {currentContent.image.map((img: string, index: number) => (
                        <div key={index} className="group">
                          <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                            <Image 
                              src={img} 
                              alt={`Visual example ${index + 1}`}
                              width={800}
                              height={400}
                              className={`w-full h-auto transition-transform duration-300 group-hover:scale-105 ${
                                currentContent.imageSize === 'small' ? 'max-w-sm' :
                                currentContent.imageSize === 'medium' ? 'max-w-md' :
                                'max-w-full'
                              } mx-auto`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Reference Table Section */}
                {currentContent.tables && currentContent.tables.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg md:rounded-xl flex items-center justify-center">
                        <Table className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">Reference Table</h2>
                      <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent" />
                    </div>
                    
                    <div className="overflow-hidden rounded-xl md:rounded-2xl border border-slate-600/50 shadow-lg">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-slate-800/50 backdrop-blur-sm text-sm md:text-base">
                          {currentContent.tables.map((row: string[], rowIndex: number) => (
                            <tr key={rowIndex} className={`
                              ${rowIndex === 0 
                                ? 'bg-slate-700/50' 
                                : 'hover:bg-slate-700/30 transition-colors duration-200'
                              }
                            `}>
                              {row.map((cell: string, cellIndex: number) => (
                                <td 
                                  key={cellIndex} 
                                  className={`border-b border-slate-700/50 px-3 sm:px-4 md:px-6 py-2 md:py-4 ${
                                    rowIndex === 0 
                                      ? 'font-bold text-white text-xs md:text-sm uppercase tracking-wider' 
                                      : 'text-slate-300 text-sm md:text-base'
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
                  </section>
                )}

                {/* Navigation Section */}
                <section className="pt-6 md:pt-8">
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-600/50">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
                      <button
                        onClick={prevContent}
                        disabled={currentIndex === 0}
                        className="group flex items-center gap-2 md:gap-4 px-4 md:px-6 py-3 md:py-4 bg-slate-700/50 text-slate-300 rounded-lg md:rounded-xl border border-slate-600/50 hover:border-amber-500 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 disabled:hover:scale-100 backdrop-blur-sm text-sm md:text-base"
                      >
                        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1" />
                        <div className="text-left">
                          <div className="font-semibold">Previous Topic</div>
                          <div className="text-xs md:text-sm text-slate-400">Continue learning</div>
                        </div>
                      </button>

                      <Link
                        href="/quiz"
                        className="group flex items-center gap-2 md:gap-4 px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-amber-700 hover:to-orange-700 text-sm md:text-base"
                      >
                        <div className="text-center">
                          <div className="font-bold">Practice Quiz</div>
                          <div className="text-xs md:text-sm text-amber-100">Test your knowledge</div>
                        </div>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <button
                        onClick={nextContent}
                        disabled={currentIndex === sampleReadingContent.length - 1}
                        className="group flex items-center gap-2 md:gap-4 px-4 md:px-6 py-3 md:py-4 bg-slate-700/50 text-slate-300 rounded-lg md:rounded-xl border border-slate-600/50 hover:border-amber-500 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 disabled:hover:scale-100 backdrop-blur-sm text-sm md:text-base"
                      >
                        <div className="text-right">
                          <div className="font-semibold">Next Topic</div>
                          <div className="text-xs md:text-sm text-slate-400">Keep exploring</div>
                        </div>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                    
                    {/* Reading Progress Summary */}
                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-600/50">
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-slate-400">Reading Progress</span>
                        <span className="font-medium text-slate-300">{Math.round(progressPercentage)}% Complete</span>
                      </div>
                      <div className="mt-2 md:mt-3 w-full bg-slate-700/50 rounded-full h-1.5 md:h-2">
                        <div 
                          className="bg-gradient-to-r from-amber-500 to-orange-500 h-1.5 md:h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                      <div className="mt-1 md:mt-2 text-xs text-slate-500">
                        Continue reading to complete this learning module
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}