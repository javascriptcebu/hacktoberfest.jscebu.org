import Link from "next/link";
import { NavWrapper } from "../components/nav-wrapper";
import { Footer } from "../components/footer";
import { UserX, Home, LogIn } from "lucide-react";
import Particles from "../components/particles";

export default function Unauthorized() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-void via-space-haze/20 to-void">
      <NavWrapper />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={50}
      />

      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-lg mx-auto text-center">
          {/* 401 */}
          <div className="mb-8">
            <div className="text-8xl sm:text-9xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text">
              401
            </div>
          </div>

          {/* Message */}
          <h1 className="text-2xl sm:text-3xl font-bold text-space-white mb-4">
            Who goes there?
          </h1>

          <p className="text-space-dust mb-8">
            Looks like you forgot to introduce yourself. Sign in to continue.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signin"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-violet/50 text-space-dust rounded-md font-medium hover:bg-east-bay/50 transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}