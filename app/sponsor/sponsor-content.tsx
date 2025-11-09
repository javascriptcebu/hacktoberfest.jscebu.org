"use client";

import { Card } from "../components/card";
import Link from "next/link";
import { Sparkles, Heart, ExternalLink } from "lucide-react";
import Image from "next/image";

type Sponsor = {
  id: number;
  name: string;
  logo: string;
  facebook?: string;
  tier: "gold" | "silver" | "community";
};

export function SponsorContent() {
  const sponsors: Sponsor[] = [
    // Gold Sponsors
    {
      id: 1,
      name: "Yello Hotel",
      logo: "/images/sponsor-logo/Yello-Hotel-Logo.png",
      facebook: "https://www.yellohotel.ph/",
      tier: "gold",
    },
    {
      id: 2,
      name: "Lisk",
      logo: "/images/sponsor-logo/lisk-wordmark-b.svg",
      facebook: "https://lisk.com/",
      tier: "gold",
    },
    {
      id: 3,
      name: "CoDev Philippines",
      logo: "/images/sponsor-logo/CoDevLogoFull.png",
      facebook: "https://www.facebook.com/CoDevPH",
      tier: "gold",
    },

    {
      id: 4,
      name: "LegalMatch Philippines",
      logo: "/images/sponsor-logo/LegalMatch.svg",
      facebook: "https://www.facebook.com/LegalMatchPH",
      tier: "gold",
    },
    {
      id: 5,
      name: "The Company Philippines",
      logo: "/images/sponsor-logo/thecompany.png",
      facebook: "https://thecompany.ph/",
      tier: "gold",
    },
    {
      id: 6,
      name: "lyf Cebu City",
      logo: "/images/sponsor-logo/lyfCebuCitylogo.jpg",
      facebook: "https://www.discoverasr.com/en/lyf/philippines/lyf-cebu-city",
      tier: "gold",
    },
    {
      id: 7,
      name: "Innodata Knowledge Services, Inc.",
      logo: "/images/sponsor-logo/Innodatalogo.webp",
      facebook: "https://www.facebook.com/innodataksi",
      tier: "gold",
    },

    
    // Silver Sponsors
    {
      id: 8,
      name: "VBP",
      logo: "/images/sponsor-logo/VBP-DarkGreen.svg",
      facebook: "https://www.facebook.com/vbpcareers",
      tier: "silver",
    },
    {
      id: 9,
      name: "NEC Philippines",
      logo: "/images/sponsor-logo/NEC Philippines.png",
      facebook: "https://www.facebook.com/NECPHL",
      tier: "silver",
    },
    

    // Community Partners
    {
      id: 10,
      name: "JavaScript Cebu",
      logo: "/images/sponsor-logo/jscebu.png",
      facebook: "https://www.facebook.com/JavaScriptCebu",
      tier: "community",
    },
    {
      id: 11,
      name: "PHPXCEBU",
      logo: "/images/sponsor-logo/PHPXCEBUlogo.jpg",
      facebook: "https://phpxcebu.com/",
      tier: "community",
    },
    {
      id: 12,
      name: "ETHPH",
      logo: "/images/sponsor-logo/ETHPHLogo.png",
      facebook: "https://www.facebook.com/ethphilippines",
      tier: "community",
    },
    {
      id: 13,
      name: "PizzaPy",
      logo: "/images/sponsor-logo/pizzapyhorizontal-primary-white.png",
      facebook: "https://www.facebook.com/PizzaPy.PH",
      tier: "community",
    },
     {
      id: 14,
      name: "Laravel Cebu",
      logo: "/images/sponsor-logo/Laravel Cebu.png",
      facebook: "https://www.facebook.com/laravelcebu",
      tier: "community",
    },
    {
      id: 15,
      name: "Cebu Tech Communities",
      logo: "/images/sponsor-logo/ctc.png",
      facebook: "https://www.facebook.com/cebutechcommunities",
      tier: "community",
    },
    {
      id: 16,
      name: "AWS User Group Cebu",
      logo: "/images/sponsor-logo/AWSUGLogo.png",
      facebook: "https://www.facebook.com/awsugcebu",
      tier: "community",
    },
    {
      id: 17,
      name: "CEBUXD",
      logo: "/images/sponsor-logo/CebUXD Logo New.png",
      facebook: "https://www.facebook.com/CebUXD",
      tier: "community",
    },
    {
      id: 18,
      name: "CeGNULUG",
      logo: "/images/sponsor-logo/CeGNULUG.png",
      facebook: "https://www.facebook.com/profile.php?id=61574523064047",
      tier: "community",
    },
    {
      id: 19,
      name: "DEVCON Cebu",
      logo: "/images/sponsor-logo/DEVCON Cebu - Black Horizontal.png",
      facebook: "https://www.facebook.com/devconcebu",
      tier: "community",
    },
    {
      id: 20,
      name: "UPCSG",
      logo: "/images/sponsor-logo/UPCSG_Logo.png",
      facebook: "https://www.facebook.com/UPCSG",
      tier: "community",
    },
    {
      id: 21,
      name: "Juantronics",
      logo: "/images/sponsor-logo/juantronicsLogo.jpg",
      facebook: "https://www.facebook.com/juantronics",
      tier: "community",
    },
    {
      id: 22,
      name: "START DOST",
      logo: "/images/sponsor-logo/startDOSTLogo.png",
      facebook: "https://www.facebook.com/STARTDOST",
      tier: "community",
    },
    {
      id: 23,
       name: "DOST Region VII",
      logo: "/images/sponsor-logo/DOST_seal.svg.png",
      facebook: "https://www.facebook.com/DOST.Region7",
      tier: "community",
    },
  ];

  const goldSponsors = sponsors.filter(s => s.tier === "gold");
  const silverSponsors = sponsors.filter(s => s.tier === "silver");
  const communityPartners = sponsors.filter(s => s.tier === "community");

  return (
    <div className="px-6 pt-20 pb-16 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-lavender/10 border border-lavender/30 rounded-full text-sm font-semibold tracking-wider text-lavender uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            Cebu Hacktoberfest 2025
            <Sparkles className="w-4 h-4" />
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-space-white sm:text-5xl lg:text-6xl">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-melrose">
              AMAZING SPONSORS
            </span>
          </h1>
          <p className="mt-6 text-lg text-space-dust max-w-3xl mx-auto leading-relaxed">
            A huge thank you to our generous sponsors and partners who make Cebu Hacktoberfest 2025 possible. 
            Your support empowers our community to innovate, learn, and grow together.
          </p>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border-2 border-amber-500/50 rounded-full mb-4">
              <h2 className="text-2xl font-bold text-amber-400">Gold Sponsors</h2>
            </div>
            <p className="text-sm text-space-dust">Premier partners supporting innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goldSponsors.map((sponsor) => (
              <Card key={sponsor.id} className="group overflow-hidden ">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="relative p-8 flex flex-col items-center justify-center min-h-[280px]">
                    {/* Logo Container */}
                    <div className="w-full h-32 mb-6 relative bg-white rounded-lg flex items-center justify-center border border-amber-500/30 group-hover:border-amber-400/50 transition-colors p-4">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={100}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    
                    {/* Sponsor Name */}
                    <h3 className="text-xl font-bold text-amber-400 text-center mb-4 group-hover:text-amber-300 transition-colors">
                      {sponsor.name}
                    </h3>
                    
                    {/* Facebook Link */}
                    {sponsor.facebook && (
                      <Link
                        href={sponsor.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 hover:border-amber-400/70 rounded-lg text-sm font-medium text-amber-300 hover:text-amber-200 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Page
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800/40 to-slate-800/40 border-2 border-gray-500/50 rounded-full mb-4">
              <h2 className="text-2xl font-bold text-gray-300">Silver Sponsors</h2>
            </div>
            <p className="text-sm text-space-dust">Key supporters of our community</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {silverSponsors.map((sponsor) => (
              <Card key={sponsor.id} className="group overflow-hidden">
                <div className="relative">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-slate-600/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative p-6 flex flex-col items-center justify-center min-h-[240px]">
                    {/* Logo Container */}
                    <div className="w-full h-24 mb-4 relative bg-white rounded-lg flex items-center justify-center border border-gray-500/30 group-hover:border-gray-400/50 transition-colors p-3">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={150}
                        height={80}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    
                    {/* Sponsor Name */}
                    <h3 className="text-lg font-bold text-gray-300 text-center mb-3 group-hover:text-gray-200 transition-colors">
                      {sponsor.name}
                    </h3>
                    
                    {/* Facebook Link */}
                    {sponsor.facebook && (
                      <Link
                        href={sponsor.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-500/50 hover:border-gray-400/70 rounded-lg text-xs font-medium text-gray-300 hover:text-gray-200 transition-all"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Visit
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lavender/20 to-melrose/20 border-2 border-lavender/50 rounded-full mb-4">
              <h2 className="text-2xl font-bold text-lavender">Community Partners</h2>
            </div>
            <p className="text-sm text-space-dust">Growing together with our ecosystem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {communityPartners.map((sponsor) => (
              <Card key={sponsor.id} className="group overflow-hidden">
                <div className="relative">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-melrose/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative p-4 flex flex-col items-center justify-center min-h-[200px]">
                    {/* Logo Container */}
                    <div className="w-full h-20 mb-3 relative bg-white rounded-lg flex items-center justify-center border border-lavender/30 group-hover:border-lavender/50 transition-colors p-2">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={60}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    
                    {/* Sponsor Name */}
                    <h3 className="text-sm font-bold text-melrose text-center mb-3 group-hover:text-lavender transition-colors line-clamp-2">
                      {sponsor.name}
                    </h3>
                    
                    {/* Facebook Link */}
                    {sponsor.facebook && (
                      <Link
                        href={sponsor.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-lavender/20 hover:bg-lavender/30 border border-lavender/50 hover:border-lavender/70 rounded-lg text-xs font-medium text-lavender hover:text-melrose transition-all"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Visit
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Thank You Section */}
        <div className="mt-20 p-10 bg-gradient-to-br from-lavender/20 via-melrose/10 to-blue-violet/20 border-2 border-lavender/30 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent" />
          <div className="relative z-10 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-lavender" />
            <h2 className="text-3xl font-bold text-space-white mb-4">
              Thank You to All Our Supporters!
            </h2>
            <p className="text-lg text-space-dust max-w-2xl mx-auto mb-8">
              Your generosity and commitment to the tech community make events like Cebu Hacktoberfest possible. 
              Together, we're building a stronger, more innovative future for developers in Central Philippines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-lavender text-void font-bold rounded-xl hover:bg-melrose transform hover:scale-105 transition-all shadow-lg"
              >
                <Sparkles className="w-5 h-5" />
                Become a Sponsor
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-lavender text-lavender font-bold rounded-xl hover:bg-lavender/10 transition-all"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
