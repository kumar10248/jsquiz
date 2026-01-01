import React from 'react';
import { Code, Github, Twitter, Heart } from 'lucide-react';
import './globals.css';

export const metadata = {
  title: 'JavaScript Learning Hub | Master JS with Interactive Lessons',
  description: 'Master JavaScript with interactive lessons, code examples, and challenging quizzes. Build real-world skills with hands-on practice.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-slate-900 text-slate-100 overflow-x-hidden w-full max-w-full">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 flex flex-col w-full max-w-full overflow-x-hidden">
          {/* Header */}
          <header className="glass sticky top-0 z-50 border-b border-slate-700/50 w-full">
            <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 md:gap-3 group">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300 group-hover:scale-105">
                      <Code className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg md:text-xl font-bold text-gradient">
                      JS Mastery
                    </span>
                    <span className="hidden sm:block text-xs text-slate-400 -mt-0.5">
                      Learn • Practice • Master
                    </span>
                  </div>
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                  <a 
                    href="/reading" 
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-all duration-200"
                  >
                    Learn
                  </a>
                  <a 
                    href="/quiz" 
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-all duration-200"
                  >
                    Quiz
                  </a>
                </nav>

                {/* CTA Button */}
                <div className="flex items-center gap-3">
                  <a 
                    href="/quiz" 
                    className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Start Quiz
                  </a>
                  
                  {/* Mobile menu button */}
                  <a 
                    href="/quiz"
                    className="sm:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
                  >
                    <Code className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="glass border-t border-slate-700/50 mt-auto w-full">
            <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                {/* Brand */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-gradient">JS Mastery</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Your journey to JavaScript mastery starts here. Learn, practice, and become a confident developer.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
                  <div className="flex flex-col gap-2">
                    <a href="/reading" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">Reading Materials</a>
                    <a href="/quiz" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">Practice Quiz</a>
                  </div>
                </div>

                {/* Social */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-110">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-110">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-8 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 flex items-center gap-1">
                  © 2026 JavaScript Learning Hub. Made with <Heart className="w-4 h-4 text-red-500 inline" /> using Next.js
                </p>
                <p className="text-xs text-slate-600">
                  Built for developers, by developers
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}