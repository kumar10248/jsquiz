'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ReadingPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the first topic
    router.replace('/reading/1');
  }, [router]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-400">Loading reading materials...</p>
      </div>
    </div>
  );
}
