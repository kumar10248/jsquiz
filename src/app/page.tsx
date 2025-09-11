import React from 'react';
import FeatureCard from './components/FeatureCard';
import { Book, Brain, Trophy, Zap, Code, Users } from 'lucide-react';

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
    { icon: Code, label: 'Topics Covered', value: '50+' },
    { icon: Brain, label: 'Quiz Questions', value: '200+' },
    { icon: Users, label: 'Active Learners', value: '10K+' },
    { icon: Trophy, label: 'Success Rate', value: '95%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-16 animate-fade-in px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Master JavaScript
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-2">
            Learn JavaScript concepts through interactive lessons and practice with challenging quizzes. 
            Build real-world skills with hands-on examples.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
            <a 
              href="/reading" 
              className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center justify-center"
            >
              <span className="flex items-center justify-center gap-2">
                <Book className="w-4 md:w-5 h-4 md:h-5" />
                Start Learning
                <Zap className="w-3 md:w-4 h-3 md:h-4 group-hover:animate-bounce-subtle" />
              </span>
            </a>
            <a 
              href="/quiz" 
              className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center justify-center"
            >
              <span className="flex items-center justify-center gap-2">
                <Brain className="w-4 md:w-5 h-4 md:h-5" />
                Take Quiz
              </span>
            </a>
          </div>

          {/* Stats - Enhanced for mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto px-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up bg-white rounded-lg p-3 md:p-4 shadow-sm border border-gray-100" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-1 md:mb-2">
                  <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-lg md:text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12 md:mb-16 px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Whether you want to learn new concepts or test your existing knowledge, 
            we have the perfect learning experience for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-8 lg:p-12 mx-4 sm:mx-6 md:mx-0">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-2">
            Simple steps to accelerate your JavaScript learning journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              step: '01',
              title: 'Read & Learn',
              description: 'Start with comprehensive reading materials covering JavaScript fundamentals and advanced topics.'
            },
            {
              step: '02', 
              title: 'Practice Code',
              description: 'Work with real code examples and understand how different JavaScript concepts work in practice.'
            },
            {
              step: '03',
              title: 'Test Knowledge',
              description: 'Challenge yourself with quizzes and get instant feedback to reinforce your learning.'
            }
          ].map((item, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-xl p-4 md:p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-white font-bold text-base md:text-lg">{item.step}</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}