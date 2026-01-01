'use client';

import React, { useState, useEffect } from 'react';
import CodeBlock from '../../components/CodeBlock';
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
  Share2,
  ChevronRight,
  Layers,
  GraduationCap
} from 'lucide-react';
import { sampleReadingContent } from '../../data/sampleData';
import { ReadingContent, TableData } from '../../types';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

export default function ReadingTopicPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = parseInt(params.id as string) - 1; // Convert to 0-based index
  
  const [readingTime, setReadingTime] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [completedSections, setCompletedSections] = useState(new Set<number>());
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  
  // Validate topic ID
  const currentIndex = topicId >= 0 && topicId < sampleReadingContent.length ? topicId : 0;
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

  const navigateToTopic = (index: number) => {
    setCompletedSections(prev => new Set([...prev, currentIndex]));
    router.push(`/reading/${index + 1}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextContent = () => {
    if (currentIndex < sampleReadingContent.length - 1) {
      navigateToTopic(currentIndex + 1);
    }
  };

  const prevContent = () => {
    if (currentIndex > 0) {
      navigateToTopic(currentIndex - 1);
    }
  };

  const progressPercentage = ((currentIndex + 1) / sampleReadingContent.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 w-full max-w-full overflow-x-hidden">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Floating Header - Only shows on scroll */}
      <div className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-6 mt-2 glass rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="font-semibold text-white truncate text-xs sm:text-sm md:text-base">
                {currentContent.question}
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
              <span className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium bg-slate-700/50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
                {currentIndex + 1}/{sampleReadingContent.length}
              </span>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg transition-all duration-200 active:scale-95 ${bookmarked ? 'bg-amber-500 text-white' : 'bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-600/50'}`}
              >
                <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Breadcrumb & Header */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          {/* Breadcrumb */}
          <nav className="flex items-center text-xs sm:text-sm text-slate-400 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
              <Home className="w-4 h-4" />
              <span>Home</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/reading" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">
              <span>Reading</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            <span className="text-slate-200 font-medium">Topic {currentIndex + 1}</span>
          </nav>

          {/* Header Card */}
          <div className="glass rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
              {/* Left Side */}
              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg shadow-orange-500/20 flex-shrink-0">
                  <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                    Reading Materials
                  </h1>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-700/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm text-slate-300">
                      <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
                      <span>Topic {currentIndex + 1}/{sampleReadingContent.length}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-700/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm text-slate-300">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                      <span>~{readingTime} min</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-full text-xs md:text-sm text-slate-300">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Interactive</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-all duration-200 text-xs sm:text-sm font-medium active:scale-95 ${
                    bookmarked 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25' 
                      : 'glass-light text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{bookmarked ? 'Saved' : 'Save'}</span>
                </button>
                <button 
                  onClick={async () => {
                    const shareUrl = `${window.location.origin}/reading/${currentIndex + 1}`;
                    const shareData = {
                      title: `JS Mastery - ${currentContent.question}`,
                      text: `Check out this JavaScript topic: ${currentContent.question}`,
                      url: shareUrl
                    };
                    
                    try {
                      if (navigator.share) {
                        await navigator.share(shareData);
                      } else {
                        await navigator.clipboard.writeText(shareUrl);
                        alert('Link copied to clipboard!');
                      }
                    } catch (err) {
                      console.log('Share failed:', err);
                    }
                  }}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 glass-light text-slate-300 rounded-lg sm:rounded-xl hover:bg-slate-700/50 transition-all duration-200 text-xs sm:text-sm font-medium active:scale-95"
                >
                  <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Share</span>
                </button>
              </div>
            </div>
            
            {/* Topic Progress Dots - Desktop */}
            <div className="hidden sm:flex items-center gap-1.5 md:gap-2 mt-6 md:mt-8 justify-center lg:justify-start overflow-x-auto pb-2 scrollbar-hide">
              {sampleReadingContent.map((_: ReadingContent, index: number) => (
                <button
                  key={index}
                  onClick={() => navigateToTopic(index)}
                  className={`flex-shrink-0 rounded-full transition-all duration-300 active:scale-90 ${
                    index === currentIndex 
                      ? 'w-8 md:w-10 h-3 md:h-3.5 bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30' 
                      : completedSections.has(index)
                      ? 'w-3 md:w-3.5 h-3 md:h-3.5 bg-emerald-500 hover:scale-125'
                      : 'w-3 md:w-3.5 h-3 md:h-3.5 bg-slate-600 hover:bg-slate-500 hover:scale-125'
                  }`}
                  aria-label={`Go to topic ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Topic Navigation - Mobile */}
            <div className="sm:hidden mt-4">
              <div className="flex items-center justify-between gap-2">
                {/* Previous Button */}
                <button
                  onClick={prevContent}
                  disabled={currentIndex === 0}
                  className="flex items-center justify-center w-10 h-10 glass-light rounded-lg disabled:opacity-40 active:scale-95 transition-all"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-300" />
                </button>
                
                {/* Topic Number Input */}
                <div className="flex-1 flex items-center justify-center gap-2">
                  <span className="text-slate-400 text-xs">Go to:</span>
                  <input
                    type="number"
                    min={1}
                    max={sampleReadingContent.length}
                    defaultValue={currentIndex + 1}
                    key={currentIndex}
                    onBlur={(e) => {
                      const val = parseInt(e.target.value);
                      if (val >= 1 && val <= sampleReadingContent.length) {
                        navigateToTopic(val - 1);
                      } else {
                        e.target.value = String(currentIndex + 1);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const val = parseInt((e.target as HTMLInputElement).value);
                        if (val >= 1 && val <= sampleReadingContent.length) {
                          navigateToTopic(val - 1);
                          (e.target as HTMLInputElement).blur();
                        }
                      }
                    }}
                    className="w-16 px-2 py-1.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white text-center text-sm font-bold focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                  <span className="text-slate-500 text-xs">/ {sampleReadingContent.length}</span>
                </div>
                
                {/* Next Button */}
                <button
                  onClick={nextContent}
                  disabled={currentIndex === sampleReadingContent.length - 1}
                  className="flex items-center justify-center w-10 h-10 glass-light rounded-lg disabled:opacity-40 active:scale-95 transition-all"
                >
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-3">
                <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / sampleReadingContent.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="xl:col-span-1 order-2 xl:order-1">
            <div className="xl:sticky xl:top-24">
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  Contents
                </h3>
                <div className="grid grid-cols-2 xl:grid-cols-1 gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-300 bg-slate-700/30 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-slate-700/50 transition-colors cursor-pointer">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                    <span className="truncate">Overview</span>
                  </div>
                  {currentContent.codeExamples && currentContent.codeExamples.length > 0 && (
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-300 bg-slate-700/30 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-slate-700/50 transition-colors cursor-pointer">
                      <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">Code</span>
                    </div>
                  )}
                  {currentContent.image && currentContent.image.length > 0 && (
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-300 bg-slate-700/30 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-slate-700/50 transition-colors cursor-pointer">
                      <FileImage className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                      <span className="truncate">Images</span>
                    </div>
                  )}
                  {currentContent.tables && currentContent.tables.length > 0 && (
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-300 bg-slate-700/30 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-slate-700/50 transition-colors cursor-pointer">
                      <Table className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0" />
                      <span className="truncate">Tables</span>
                    </div>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-700/50">
                  <h4 className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3">Progress</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                        <span>Completed</span>
                        <span>{completedSections.size}/{sampleReadingContent.length}</span>
                      </div>
                      <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-500"
                          style={{ width: `${(completedSections.size / sampleReadingContent.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="xl:col-span-3 order-1 xl:order-2">
            <article className="glass rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden animate-fade-in">
              {/* Article Header */}
              <header className="relative bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white overflow-hidden">
                {/* Background decorations - hidden on small mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl transform translate-x-16 sm:translate-x-24 -translate-y-16 sm:-translate-y-24" />
                <div className="hidden sm:block absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-12 sm:-translate-x-16 translate-y-12 sm:translate-y-16" />
                
                <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white/80 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider">Learning Topic</div>
                        <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-white/30 rounded-full mt-0.5 sm:mt-1" />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl w-fit">
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      <span className="text-base sm:text-lg md:text-xl font-bold">{currentIndex + 1}</span>
                      <span className="text-white/60 text-sm sm:text-base">/ {sampleReadingContent.length}</span>
                    </div>
                  </div>
                  
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 sm:mb-4">
                    {currentContent.question}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                      <PlayCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>Interactive</span>
                    </div>
                    {completedSections.has(currentIndex) && (
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-emerald-500/30 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </header>

              {/* Scroll Hint - hidden on small mobile */}
              {showScrollHint && (
                <div className="hidden sm:flex justify-center -mt-6 relative z-10">
                  <div className="glass rounded-full p-2 sm:p-3 shadow-lg animate-bounce">
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" />
                  </div>
                </div>
              )}
              
              {/* Article Content */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                {/* Description Section */}
                <section>
                  <div className="prose prose-lg max-w-none">
                    <div className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg glass-light p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 border-amber-500">
                      {formatDescription(currentContent.description)}
                    </div>
                  </div>
                </section>

                {/* Code Examples Section */}
                {currentContent.codeExamples && currentContent.codeExamples.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Code Examples</h2>
                        <p className="text-xs sm:text-sm text-slate-400 truncate">Practice with real code</p>
                      </div>
                      <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent ml-4" />
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      {currentContent.codeExamples.map((code: string, index: number) => (
                        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-400 bg-slate-700/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                              Example {index + 1}
                            </span>
                          </div>
                          <CodeBlock code={code} />
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Visual Examples Section */}
                {currentContent.image && currentContent.image.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <FileImage className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Visual Examples</h2>
                        <p className="text-xs sm:text-sm text-slate-400 truncate">See it in action</p>
                      </div>
                      <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent ml-4" />
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      {currentContent.image.map((img: string, index: number) => (
                        <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-600/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <Image 
                              src={img} 
                              alt={`Visual example ${index + 1}`}
                              width={800}
                              height={400}
                              className={`w-full h-auto transition-transform duration-500 group-hover:scale-105 ${
                                currentContent.imageSize === 'small' ? 'max-w-sm' :
                                currentContent.imageSize === 'medium' ? 'max-w-md' :
                                'max-w-full'
                              } mx-auto`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Reference Table Section */}
                {currentContent.tables && currentContent.tables.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Table className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Reference Tables</h2>
                        <p className="text-xs sm:text-sm text-slate-400 truncate">Quick reference guide</p>
                      </div>
                      <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent ml-4" />
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      {currentContent.tables.map((tableData: TableData, tableIndex: number) => (
                        <div key={tableIndex} className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-600/50 shadow-xl animate-fade-in" style={{ animationDelay: `${tableIndex * 0.1}s` }}>
                          <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
                            <table className="w-full border-collapse glass text-xs sm:text-sm md:text-base min-w-[400px]">
                              <thead>
                                <tr className="bg-slate-700/50">
                                  {tableData.headers.map((header: string, headerIndex: number) => (
                                    <th
                                      key={headerIndex}
                                      className="border-b border-slate-700/50 px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-bold text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-left whitespace-nowrap"
                                    >
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {tableData.rows.map((row: string[], rowIndex: number) => (
                                  <tr key={rowIndex} className="hover:bg-slate-700/30 transition-colors duration-200">
                                    {row.map((cell: string, cellIndex: number) => (
                                      <td 
                                        key={cellIndex} 
                                        className="border-b border-slate-700/50 px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-slate-300"
                                      >
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Navigation Section */}
                <section className="pt-4 sm:pt-6 md:pt-8">
                  <div className="glass rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                      {/* Mobile-first: Stack buttons vertically, show quiz in middle */}
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                        <button
                          onClick={prevContent}
                          disabled={currentIndex === 0}
                          className="group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-4 glass-light text-slate-300 rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95"
                        >
                          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <div className="text-left hidden sm:block">
                            <div className="font-semibold text-white text-sm md:text-base">Previous</div>
                            <div className="text-[10px] sm:text-xs md:text-sm text-slate-400">Continue</div>
                          </div>
                          <span className="sm:hidden text-xs font-medium">Prev</span>
                        </button>

                        <button
                          onClick={nextContent}
                          disabled={currentIndex === sampleReadingContent.length - 1}
                          className="group flex items-center justify-center sm:justify-end gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-4 glass-light text-slate-300 rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95 lg:order-3"
                        >
                          <div className="text-right hidden sm:block">
                            <div className="font-semibold text-white text-sm md:text-base">Next</div>
                            <div className="text-[10px] sm:text-xs md:text-sm text-slate-400">Explore</div>
                          </div>
                          <span className="sm:hidden text-xs font-medium">Next</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        </button>

                        <Link
                          href="/quiz"
                          className="col-span-2 lg:col-span-1 lg:order-2 group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 active:scale-95"
                        >
                          <div className="text-center">
                            <div className="font-bold text-sm sm:text-base">Practice Quiz</div>
                            <div className="text-[10px] sm:text-xs md:text-sm text-amber-100">Test knowledge</div>
                          </div>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Reading Progress Summary */}
                    <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 border-t border-slate-700/50">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2 sm:mb-3">
                        <span className="text-slate-400">Progress</span>
                        <span className="font-semibold text-white">{Math.round(progressPercentage)}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                      <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-500">
                        Continue reading to complete this module
                      </p>
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
