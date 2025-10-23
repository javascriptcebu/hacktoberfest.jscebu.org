import {
  Calendar,
  Facebook,
  GithubIcon,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Users,
} from "lucide-react";

import Image from "next/legacy/image";
import Link from "next/link";

const footerLinks = {
  event: [
    { name: "Event Schedule", href: "#schedule" },
    { name: "20-Day Hackathon", href: "#hackathon" },
    { name: "Open Source Contributions", href: "#contributions" },
    { name: "Categories & Prizes", href: "#prizes" },
    { name: "Registration", href: "#registration" },
    { name: "FAQ", href: "#faq" },
  ],
  resources: [
    { name: "2025 Projects", href: "/projects" },
    { name: "2024 Projects", href: "/projects/2024" },
    { name: "Submit Your Project", href: "/submit" },
    { name: "Contribution Guide", href: "/contribute" },
    { name: "Sponsorship", href: "/sponsors" },
    { name: "Contact Us", href: "/contact" },
  ],
  community: [
    { name: "JavaScript Cebu", href: "https://jscebu.org" },
    { name: "PizzaPy Cebu", href: "https://pizzapy.ph" },
    {
      name: "Ethereum Philippines",
      href: "https://www.facebook.com/ethphilippines",
    },
    { name: "React Cebu", href: "https://react.jscebu.org" },
    { name: "Laravel Cebu x PHPxCebu", href: "https://laravelcebu.org" },
    { name: "Cebu Game Dev", href: "https://cebugamedev.org" },
  ],
  partners: [
    { name: "DevCon Cebu", href: "https://devcon.ph" },
    { name: "GDG Cebu", href: "https://gdg.community.dev/gdg-cebu" },
    { name: "CebuXD", href: "https://cebuxd.com" },
    { name: "Web3 Cebu", href: "https://web3cebu.org" },
    { name: "AI Gen Cebu", href: "https://aicebu.org" },
    { name: "GitHub", href: "https://github.com/javascriptcebu" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/javascriptcebu",
      icon: GithubIcon,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/javascriptcebu",
      icon: Twitter,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/javascriptcebu",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/javascriptcebu/",
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-blue-violet/30 bg-gradient-to-b from-east-bay/20 to-void backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top Section - Event Info */}
        <div className="mb-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            <Image
              src="/images/jscebu.png"
              alt="JavaScript Cebu"
              width={120}
              height={30}
              className="opacity-80"
            />
            <Image
              src="/images/pizzapyhorizontal-primary-white.png"
              alt="PizzaPy Python Users Group"
              width={110}
              height={30}
              className="opacity-80"
            />
            <Image
              src="/images/DkBG_Rectangle.png"
              alt="Ethereum Philippines"
              width={88}
              height={50}
              className="opacity-80"
            />
          </div>
          <h2 className="text-2xl font-bold text-space-white mb-2">
            Hacktoberfest Cebu 2025
          </h2>
          <p className="text-space-dust mb-4">
            Build. Contribute. Win. Repeat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-space-haze">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              October 5-26, 2025
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Cebu, Philippines
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              Contribute & Create
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-zinc-100 mb-3">
                About Hacktoberfest Cebu
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Hacktoberfest Cebu is the largest open source celebration in the
                Visayas region, bringing together developers, designers, and
                tech enthusiasts to contribute to open source projects, learn
                new skills, and build lasting connections within the tech
                community.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-100 mb-3">
                Get Involved
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-zinc-300 mb-2">For Participants:</p>
                  <ul className="space-y-1 text-zinc-400 list-disc list-inside">
                    <li>Register for free</li>
                    <li>Join the hackathon</li>
                    <li>Contribute to projects</li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-300 mb-2">For Companies:</p>
                  <ul className="space-y-1 text-zinc-400 list-disc list-inside">
                    <li>Sponsor the event</li>
                    <li>Host workshops</li>
                    <li>Recruit talents</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row pt-8 border-t border-zinc-800">
            <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
              <span className="text-xs text-zinc-500">
                © 2025 Hacktoberfest Cebu. All rights reserved.
              </span>
              <span className="text-zinc-700">·</span>
              <span className="text-xs text-zinc-500">
                Organized by{" "}
                <a
                  href="https://jscebu.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  JavaScript Cebu
                </a>
                ,{" "}
                <a
                  href="https://pizzapy.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  PizzaPy Cebu
                </a>
                {" & "}
                <a
                  href="https://www.facebook.com/ethphilippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Ethereum Philippines
                </a>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
              <a
                href="https://github.com/javascriptcebu/hacktoberfest.jscebu.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                View Source
              </a>
              <span className="text-zinc-700">·</span>
              <Link
                href="/privacy"
                className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-zinc-700">·</span>
              <Link
                href="/terms"
                className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-zinc-700">·</span>
              <Link
                href="/code-of-conduct"
                className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
