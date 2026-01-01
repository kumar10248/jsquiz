import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

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
    <Link href={href} className="block h-full">
      <div className="group relative h-full glass rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 transition-all duration-500 active:scale-[0.98] sm:hover:-translate-y-2 sm:hover:shadow-2xl sm:hover:shadow-black/20 cursor-pointer overflow-hidden border border-slate-700/50 hover:border-slate-600">
        {/* Background Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Animated Background Blob - hidden on mobile */}
        <div className={`hidden sm:block absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${gradient} rounded-full opacity-10 blur-3xl group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`} />
        
        {/* Content Container */}
        <div className="relative z-10">
          {/* Icon Container */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${gradient} rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-4 sm:mb-6 md:mb-8">
            {description}
          </p>
          
          {/* CTA Link */}
          <div className="flex items-center gap-2 text-amber-400 font-semibold group-hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </Link>
  );
}
