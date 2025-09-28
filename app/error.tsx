'use client';

import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Particles from "./components/particles";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-void via-space-haze/20 to-void">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={50}
      />

      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-lg mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-900/20 border border-red-800/30">
              <AlertTriangle className="w-12 h-12 text-red-400" />
            </div>
          </div>

          {/* Message */}
          <h1 className="text-2xl sm:text-3xl font-bold text-space-white mb-4">
            Well, this is awkward...
          </h1>

          <p className="text-space-dust mb-8">
            Something went wrong. Have you tried turning it off and on again?
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-violet/50 text-space-dust rounded-md font-medium hover:bg-east-bay/50 transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </div>

          {/* Error Details */}
          {error.digest && (
            <p className="mt-8 text-xs text-space-haze">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}