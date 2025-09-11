// File: components/CodeBlock.tsx
import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-900 text-green-400 p-3 sm:p-4 md:p-6 rounded-lg md:rounded-xl overflow-x-auto text-xs sm:text-sm leading-relaxed shadow-lg">
        <code className="block whitespace-pre">{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 md:top-4 md:right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto"
        title="Copy code"
      >
        {copied ? (
          <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
        ) : (
          <Copy className="w-3 h-3 md:w-4 md:h-4 text-gray-300" />
        )}
      </button>
    </div>
  );
}