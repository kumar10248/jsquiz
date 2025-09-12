import React from 'react';
import { Code } from 'lucide-react';
import './globals.css';

export const metadata = {
  title: 'JavaScript Learning Hub',
  description: 'Master JavaScript with interactive lessons and quizzes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-900 text-slate-100">
        <div className="min-h-screen bg-slate-900">
          {/* Header */}
          <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
              <div className="flex items-center justify-center">
                <Code className="w-6 h-6 md:w-8 md:h-8 text-amber-500 mr-2" />
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  JavaScript Mastery
                </h1>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 sm:px-6 py-6 md:py-8 max-w-7xl">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-slate-800 text-slate-300 py-6 md:py-8 mt-12 md:mt-16 border-t border-slate-700">
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <p className="text-slate-400 text-sm md:text-base">
                © 2025 JavaScript Learning Hub. Built with Next.js & TypeScript.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}