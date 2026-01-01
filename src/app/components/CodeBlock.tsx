// File: components/CodeBlock.tsx
import React from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = 'javascript', filename }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group w-full max-w-full overflow-hidden">
      <div className="w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-600/50 bg-slate-900 shadow-xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-slate-800/80 border-b border-slate-700/50">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {/* Traffic Lights - hidden on very small screens */}
            <div className="hidden xs:flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
            </div>
            {/* Filename or Language */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400 text-xs min-w-0">
              <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="font-mono truncate">{filename || language}</span>
            </div>
          </div>
          
          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-medium transition-all duration-300 flex-shrink-0 active:scale-95 ${
              copied 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50'
            }`}
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
        
        {/* Code Content */}
        <div className="relative overflow-x-auto -webkit-overflow-scrolling-touch">
          <pre className="w-full text-emerald-400 p-3 sm:p-4 md:p-5 lg:p-6 text-[11px] sm:text-xs md:text-sm leading-relaxed font-mono whitespace-pre overflow-x-auto">
            <code className="block">{code}</code>
          </pre>
        </div>
      </div>
      
      {/* Glow effect on hover - hidden on mobile */}
      <div className="hidden sm:block absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
}