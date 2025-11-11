"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Trophy, ExternalLink } from "lucide-react";

type Winner = {
  id: string;
  title: string;
  slug: string;
  award: string;
  photo: string;
  description: string;
  color: string;
  gradient: string;
  icon: string;
  isContribution?: boolean;
};

const winners: Winner[] = [
  {
    id: "1",
    title: "Totoo Ba Ito?",
    slug: "totoo-ba-ito",
    award: "Best Overall Project",
    photo: "/images/winners/2025/totoo-ba-ito-team.jpg",
    description: "An AI-powered Product and Industry Verification Checker using the official FDA Datasets",
    color: "#fbbf24",
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    icon: "🏆",
  },
  {
    id: "2",
    title: "Barangay Konek",
    slug: "barangay-konek",
    award: "Best Use of Blockchain",
    photo: "/images/winners/2025/barangay-konek-team.jpg",
    description: "Revolutionizes barangay services through AI and blockchain, bringing convenience, transparency, and accessibility",
    color: "#10b981",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "⛓️",
  },
  {
    id: "3",
    title: "Quiz Attack",
    slug: "quiz-attack-ai-powered-quiz-battles",
    award: "Best Use of AI",
    photo: "/images/winners/2025/quiz-attack-team.jpg",
    description: "A competitive 1v1 quiz battle web app where students challenge each other using AI-generated lectures and quizzes",
    color: "#8b5cf6",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    icon: "🤖",
  },
  {
    id: "4",
    title: "BayanihanCebu",
    slug: "bayanihancebu",
    award: "Best Easter Egg",
    photo: "/images/winners/2025/bayanihancebu-team.jpg",
    description: "A blockchain-powered disaster relief platform that enhances transparency, coordination, and accountability during calamities",
    color: "#ec4899",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    icon: "🎮",
  },
  {
    id: "5",
    title: "Yurii Yankin",
    slug: "contributions/best-open-source-contribution/2025",
    award: "Best Open Source Contribution",
    photo: "/images/winners/2025/yurii.png",
    description: "Added a new Criteria page with interactive tables and focus/tab system, enhancing user experience with organized evaluation criteria",
    color: "#3b82f6",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    icon: "🌟",
    isContribution: true,
  },
  {
    id: "6",
    title: "Neil Vallecer",
    slug: "contributions/best-open-source-contribution/2025",
    award: "Best Open Source Contribution",
    photo: "/images/winners/2025/neil.jpg",
    description: "Fixed textarea validation to allow custom toast messages, improving error handling and user feedback in form components",
    color: "#3b82f6",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    icon: "🌟",
    isContribution: true,
  },
];

export function WinnerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % winners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + winners.length) % winners.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentWinner = winners[currentIndex];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated background glow */}
      <div 
        className="absolute inset-0 opacity-20 blur-3xl transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${currentWinner.color} 0%, transparent 70%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Hacktoberfest 2025 Winners
            </h2>
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Celebrating the brilliant minds who built amazing projects in 20 days
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Winner Card */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Photo Section */}
              <div className="relative group">
                <div 
                  className="absolute inset-0 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${currentWinner.color}, transparent)`
                  }}
                />
                <div 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border-4 transition-all duration-500 group-hover:scale-[1.02]"
                  style={{ borderColor: currentWinner.color }}
                >
                  <img
                    src={currentWinner.photo}
                    alt={`${currentWinner.title} team`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder
                      e.currentTarget.src = `https://placehold.co/800x600/${currentWinner.color.replace('#', '')}/1a1a1a?text=${currentWinner.icon}+${currentWinner.title}`;
                    }}
                  />
                  
                  {/* Award Badge Overlay
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border-2"
                    style={{ borderColor: currentWinner.color }}
                  >
                    <span className="text-2xl">{currentWinner.icon}</span>
                    <span className="text-white font-semibold text-sm">
                      {currentWinner.award}
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl">{currentWinner.icon}</span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider"
                        style={{ color: currentWinner.color }}
                      >
                        {currentWinner.award}
                      </p>
                    </div>
                  </div>
                  
                  <h3 
                    className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${currentWinner.color}, white)`
                    }}
                  >
                    {currentWinner.title}
                  </h3>
                  
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    {currentWinner.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={currentWinner.isContribution ? `/${currentWinner.slug}` : `/projects/submitted/${currentWinner.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                  style={{
                    background: `linear-gradient(135deg, ${currentWinner.color}, ${currentWinner.color}dd)`,
                    color: '#FFFFFF',
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                >
                  <span>{currentWinner.isContribution ? 'View Contribution' : 'View Project'}</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Progress Indicator */}
                <div className="flex items-center gap-2 pt-4">
                  <span className="text-sm text-zinc-500">
                    {currentIndex + 1} / {winners.length}
                  </span>
                  <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full transition-all duration-300 rounded-full"
                      style={{ 
                        width: `${((currentIndex + 1) / winners.length) * 100}%`,
                        backgroundColor: currentWinner.color
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-zinc-700 hover:bg-black/80 hover:border-zinc-500 transition-all duration-300 hover:scale-110"
            aria-label="Previous winner"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-zinc-700 hover:bg-black/80 hover:border-zinc-500 transition-all duration-300 hover:scale-110"
            aria-label="Next winner"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {winners.map((winner, index) => (
            <button
              key={winner.id}
              onClick={() => goToSlide(index)}
              className={`group relative transition-all duration-300 ${
                index === currentIndex 
                  ? 'scale-110' 
                  : 'scale-90 opacity-50 hover:opacity-100 hover:scale-100'
              }`}
            >
              <div 
                className="w-20 h-20 rounded-lg overflow-hidden border-3 transition-all duration-300"
                style={{ 
                  borderColor: index === currentIndex ? winner.color : 'transparent',
                  borderWidth: index === currentIndex ? '3px' : '2px'
                }}
              >
                <img
                  src={winner.photo}
                  alt={winner.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/200x200/${winner.color.replace('#', '')}/1a1a1a?text=${winner.icon}`;
                  }}
                />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 backdrop-blur-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                <p className="text-xs text-white font-medium">{winner.title}</p>
                <p className="text-xs" style={{ color: winner.color }}>{winner.award}</p>
              </div>
            </button>
          ))}
        </div>

        {/* View All Winners Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lavender to-blue-violet text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Trophy className="w-5 h-5" />
            <span>View All Winners & Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
