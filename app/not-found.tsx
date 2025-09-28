import Link from "next/link";
import { NavWrapper } from "./components/nav-wrapper";
import { Footer } from "./components/footer";
import { Home, ArrowLeft } from "lucide-react";
import Particles from "./components/particles";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-void via-space-haze/20 to-void">
      <NavWrapper />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={50}
      />

      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-lg mx-auto text-center">
          {/* 404 */}
          <div className="mb-8">
            <div className="text-8xl sm:text-9xl font-bold text-transparent bg-gradient-to-r from-lavender via-melrose to-blue-violet bg-clip-text">
              404
            </div>
          </div>

          {/* Message */}
          <h1 className="text-2xl sm:text-3xl font-bold text-space-white mb-4">
            This page pulled a Houdini
          </h1>

          <p className="text-space-dust mb-8">
            It was here, now it's not. Magic? Bug? We'll never know.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-lavender text-void rounded-md font-medium hover:bg-melrose transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Home
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-violet/50 text-space-dust rounded-md font-medium hover:bg-east-bay/50 transition-colors"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}