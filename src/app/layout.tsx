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
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          {/* Header */}
          <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
              <div className="flex items-center justify-center">
                <Code className="w-6 h-6 md:w-8 md:h-8 text-indigo-600 mr-2" />
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  JavaScript Mastery
                </h1>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 sm:px-6 py-6 md:py-8 max-w-6xl">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-6 md:py-8 mt-12 md:mt-16">
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <p className="text-gray-400 text-sm md:text-base">
                © 2025 JavaScript Learning Hub. Built with Next.js & TypeScript.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}