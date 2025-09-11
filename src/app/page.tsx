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
    <>
      {/* Hero Section */}
      <section className="text-center mb-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Master JavaScript
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Learn JavaScript concepts through interactive lessons and practice with challenging quizzes. 
            Build real-world skills with hands-on examples.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/reading" 
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <Book className="w-5 h-5" />
                Start Learning
                <Zap className="w-4 h-4 group-hover:animate-bounce-subtle" />
              </span>
            </a>
            <a 
              href="/quiz" 
              className="group px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <Brain className="w-5 h-5" />
                Take Quiz
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you want to learn new concepts or test your existing knowledge, 
            we have the perfect learning experience for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Simple steps to accelerate your JavaScript learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}