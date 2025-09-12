// File: components/CodeBlock.tsx
import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group w-full">
      <div className="w-full overflow-x-auto rounded-lg md:rounded-xl border border-slate-600 bg-slate-900">
        <pre className="w-full text-green-400 p-3 sm:p-4 md:p-6 text-xs sm:text-sm leading-relaxed shadow-lg overflow-x-auto">
          <code className="block whitespace-pre">{code}</code>
        </pre>
      </div>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 md:top-4 md:right-4 p-2 bg-slate-700 hover:bg-slate-600 rounded-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto"
        title="Copy code"
      >
        {copied ? (
          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
        ) : (
          <Copy className="w-3 h-3 md:w-4 md:h-4 text-slate-300" />
        )}
      </button>
    </div>
  );
}