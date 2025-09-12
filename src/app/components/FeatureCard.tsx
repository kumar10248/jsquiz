import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  gradient 
}: FeatureCardProps) {
  return (
    <Link href={href}>
      <div className={`group relative bg-slate-800 rounded-xl md:rounded-2xl shadow-lg border border-slate-700 p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[44px]`}>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${gradient} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Arrow */}
        <div className="flex items-center text-amber-500 font-medium group-hover:text-orange-500 transition-colors duration-300 text-sm md:text-base">
          <span>Get Started</span>
          <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
