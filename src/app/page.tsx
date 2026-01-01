import React from 'react';
import FeatureCard from './components/FeatureCard';
import { Book, Brain, Trophy, Zap, Code, Users, Sparkles, ArrowRight, CheckCircle, Star, Rocket, Target, BookOpen, GraduationCap } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: 'Interactive Reading',
      description: 'Comprehensive JavaScript concepts with code examples, images, and detailed explanations to build your foundation.',
      icon: Book,
      href: '/reading',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Practice Quizzes',
      description: 'Test your knowledge with interactive quizzes featuring real-world JavaScript problems and instant feedback.',
      icon: Brain,
      href: '/quiz',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const stats = [
    { icon: Code, label: 'Topics Covered', value: '50+', color: 'from-blue-500 to-cyan-500' },
    { icon: Brain, label: 'Quiz Questions', value: '200+', color: 'from-purple-500 to-pink-500' },
    { icon: Users, label: 'Active Learners', value: '10K+', color: 'from-green-500 to-emerald-500' },
    { icon: Trophy, label: 'Success Rate', value: '95%', color: 'from-amber-500 to-orange-500' }
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Learn at your own pace' },
    { icon: CheckCircle, text: 'Real-world code examples' },
    { icon: CheckCircle, text: 'Instant quiz feedback' },
    { icon: CheckCircle, text: 'Progress tracking' },
  ];

  const learningPath = [
    {
      step: '01',
      title: 'Read & Learn',
      description: 'Start with comprehensive reading materials covering JavaScript fundamentals and advanced topics.',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      step: '02', 
      title: 'Practice Code',
      description: 'Work with real code examples and understand how different JavaScript concepts work in practice.',
      icon: Code,
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: '03',
      title: 'Test Knowledge',
      description: 'Challenge yourself with quizzes and get instant feedback to reinforce your learning.',
      icon: Target,
      color: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Start your JavaScript journey today</span>
              <span className="xs:hidden">Learn JavaScript</span>
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">Master </span>
              <span className="text-gradient">JavaScript</span>
              <span className="text-white"> Like a Pro</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in px-2" style={{ animationDelay: '0.2s' }}>
              Learn JavaScript through interactive lessons and practice with quizzes.
            </p>

            {/* Benefits List - Stack on mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-10 animate-fade-in px-2" style={{ animationDelay: '0.3s' }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-1.5 sm:gap-2 text-slate-300 text-xs sm:text-sm md:text-base">
                  <benefit.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 animate-fade-in px-2" style={{ animationDelay: '0.4s' }}>
              <a 
                href="/reading" 
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 active:scale-95 sm:hover:scale-105 overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Book className="w-4 h-4 sm:w-5 sm:h-5" />
                  Start Learning
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="/quiz" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/80 text-white font-bold rounded-xl border-2 border-slate-600 hover:border-amber-500 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 sm:hover:scale-105 text-sm sm:text-base"
              >
                <span className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  Take a Quiz
                </span>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 card-hover"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-16 md:py-24 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Choose your path</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
              Choose Your Learning Path
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Whether you want to learn new concepts or test your knowledge, 
              we have the perfect experience for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-10 sm:py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent" />
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Learning process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Simple steps to accelerate your JavaScript learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {learningPath.map((item, index) => (
              <div 
                key={index} 
                className="group relative glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded-lg sm:rounded-xl flex items-center justify-center border-2 border-slate-700 group-hover:border-amber-500 transition-colors">
                  <span className="text-amber-500 font-bold text-xs sm:text-sm">{item.step}</span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center max-w-5xl mx-auto">
            {/* Background decoration - hidden on mobile */}
            <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Join thousands of developers who have mastered JavaScript with our interactive platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="/reading" 
                  className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 active:scale-95 sm:hover:scale-105 text-sm sm:text-base"
                >
                  <span className="flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="/quiz" 
                  className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 active:scale-95 sm:hover:scale-105 text-sm sm:text-base"
                >
                  <span className="flex items-center gap-2">
                    <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                    Try a Quiz
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}