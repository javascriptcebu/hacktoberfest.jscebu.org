"use client";

import { Card } from "./card";
import Link from "next/link";
import { ScrollAnimation } from "./scroll-animation";
import { Sparkles, Heart, ExternalLink } from "lucide-react";
import Image from "next/image";


type Sponsor = {
  id: number;
  name: string;
  logo: string;
  facebook?: string;
  tier: "gold" | "silver" | "community" | "co-presenter";
};


export function HomeSponsors() {
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
      tier: "co-presenter",
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
      tier: "co-presenter",
    },
    {
      id: 13,
      name: "PizzaPy",
      logo: "/images/sponsor-logo/pizzapyhorizontal-primary-white.png",
      facebook: "https://www.facebook.com/PizzaPy.PH",
      tier: "co-presenter",
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
  const coPresenters = sponsors.filter(s => s.tier === "co-presenter");

  return (
    <section className="py-12">
      <ScrollAnimation animation="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 text-center">
          💎 Our Partners & Sponsors
        </h2>
      </ScrollAnimation>
      <div className="space-y-8">
        <ScrollAnimation animation="fade-up" delay={0.1}>
          <div>
            <h4 className="text-2xl font-semibold text-purple-400 mb-4 text-center">
              Co-Presenters
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coPresenters.map((sponsor) => (
                <Card key={sponsor.id} className="group overflow-hidden">
                  {sponsor.facebook && (
                    <Link href={sponsor.facebook} target="_blank" rel="noopener noreferrer">
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-zinc-800/50"></div>
                      <div className="relative"> 
                        <div className="relative p-8 flex flex-col items-center justify-center min-h-[200px]">
                          {/* Logo Container */}
                          <div className="w-full h-32 mb-6 relative bg-white rounded-lg flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400/50 transition-colors p-4">
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              width={200}
                              height={100}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                          
                          <h3 className="text-xl font-bold text-violet-500 text-center mb-4 group-hover:text-violet-400 transition-colors">
                            {sponsor.name}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>
{/* 
        <ScrollAnimation animation="fade-up" delay={0.2}>
          <div>
            <h4 className="text-lg font-semibold text-slate-300 mb-4 text-center">
              Platinum Sponsors
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <div className="p-8 text-center bg-gradient-to-br from-slate-600/10 to-zinc-800/50">
                  <p className="text-zinc-400 text-sm">Major Partnership Available</p>
                </div>
              </Card>
              <Card>
                <div className="p-8 text-center bg-gradient-to-br from-slate-600/10 to-zinc-800/50">
                  <p className="text-zinc-400 text-sm">Major Partnership Available</p>
                </div>
              </Card>
            </div>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animation="fade-up" delay={0.3}>
          <div>
            <h4 className="text-2xl font-semibold text-amber-400 mb-4 mt-12 text-center">
              Gold Sponsors
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goldSponsors.map((sponsor) => (
                <Card key={sponsor.id} className="group overflow-hidden ">
                   {sponsor.facebook && (
                      <Link href={sponsor.facebook} target="_blank" rel="noopener noreferrer">
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="relative p-8 flex flex-col items-center justify-center min-h-[150px]">
                          {/* Logo Container */}
                          <div className="w-full h-24 mb-6 relative bg-white rounded-lg flex items-center justify-center border border-amber-500/30 group-hover:border-amber-400/50 transition-colors p-4">
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              width={150}
                              height={80}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                          
                          {/* Sponsor Name */}
                          <h3 className="text-lg font-bold text-amber-400 text-center mb-4 group-hover:text-amber-300 transition-colors">
                            {sponsor.name}
                          </h3>  
                        </div>
                      </div>
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.4}>
          <div> 
             <h4 className="text-2xl font-semibold text-gray-300 mb-4 mt-12 text-center">
              Silver Sponsors
              </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {silverSponsors.map((sponsor) => (
                <Card key={sponsor.id} className="group overflow-hidden ">
                   {sponsor.facebook && (
                      <Link href={sponsor.facebook} target="_blank" rel="noopener noreferrer">
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-slate-600/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="relative p-8 flex flex-col items-center justify-center min-h-[100px]">
                          {/* Logo Container */}
                          <div className="w-full h-20 mb-6 relative bg-white rounded-lg flex items-center justify-center border border-gray-500/30 group-hover:border-gray-400/50 transition-colors p-4">
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              width={120}
                              height={60}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                          
                          {/* Sponsor Name */}
                          <h3 className="font-bold text-gray-400 text-center mb-4 group-hover:text-gray-300 transition-colors">
                            {sponsor.name}
                          </h3>  
                        </div>
                      </div>
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animation="fade-up" delay={0.4}>
          <div className="text-center mt-8">
            <Card>
              <div className="relative p-8 bg-gradient-to-br from-yellow-900/20 via-zinc-800/50 to-orange-900/20 border border-yellow-800/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-yellow-900/30 px-3 py-1 rounded-full mb-4 border border-yellow-800/50">
                    <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                      Limited Slots Available
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-100 mb-3">
                    🎯 Become a Partner
                  </h4>
                  <p className="text-base text-zinc-300 mb-6 max-w-md mx-auto">
                    Join us in building Cebu's thriving tech ecosystem.
                    <span className="text-yellow-400 font-semibold">
                      {" "}All partnership levels are customizable
                    </span>{" "}
                    to align with your organization's goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link
                      href="/sponsor"
                      className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-md font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Explore Partnership Options →
                    </Link>
                    <span className="text-zinc-500 text-sm">
                      or email us at{" "}
                      <a
                        href="mailto:sponsors@hacktoberfest.jscebu.org"
                        className="text-yellow-400 hover:text-yellow-300 underline"
                      >
                        sponsors@hacktoberfest.jscebu.org
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollAnimation> */}
      </div>
    </section>
  );
}
