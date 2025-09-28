'use client';

import Link from "next/link";
import { useEffect } from "react";
import { XCircle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black">
          <div className="max-w-lg mx-auto text-center px-6">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-900/20 border border-red-800/30">
                <XCircle className="w-12 h-12 text-red-400" />
              </div>
            </div>

            {/* Message */}
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4">
              The app has left the building
            </h1>

            <p className="text-zinc-400 mb-8">
              Critical error detected. Our hamsters stopped running. We're getting them back on the wheel.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-md font-medium hover:bg-zinc-200 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Reset App
              </button>

              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-400 rounded-md font-medium hover:bg-zinc-800/50 transition-colors"
              >
                Start Fresh
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}