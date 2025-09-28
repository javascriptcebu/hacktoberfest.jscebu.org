import Link from "next/link";
import { NavWrapper } from "../components/nav-wrapper";
import { Footer } from "../components/footer";
import { Construction, Home, Coffee } from "lucide-react";
import Particles from "../components/particles";

export default function ServiceUnavailable() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-void via-space-haze/20 to-void">
      <NavWrapper />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={50}
      />

      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-lg mx-auto text-center">
          {/* 503 */}
          <div className="mb-8">
            <div className="text-8xl sm:text-9xl font-bold text-transparent bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text">
              503
            </div>
          </div>

          {/* Message */}
          <h1 className="text-2xl sm:text-3xl font-bold text-space-white mb-4">
            We're doing some maintenance
          </h1>

          <p className="text-space-dust mb-8">
            Back in a jiffy! Our code monkeys are applying duct tape as we speak.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-violet/50 text-space-dust rounded-md font-medium hover:bg-east-bay/50 transition-colors"
            >
              <Coffee className="w-4 h-4" />
              Check Again
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}