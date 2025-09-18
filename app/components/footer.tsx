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
    { name: "JavaScript Cebu", href: "https://javascriptcebu.org" },
    { name: "PizzaPy Cebu", href: "https://python.ph" },
    { name: "Ethereum Philippines", href: "https://ethereum.ph" },
    { name: "React Cebu", href: "https://reactcebu.org" },
    { name: "Laravel Cebu", href: "https://laravelcebu.org" },
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
    <footer className="relative mt-16 border-t border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-black backdrop-blur-sm">
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
          <h2 className="text-2xl font-bold text-zinc-100 mb-2">
            Hacktoberfest Cebu 2025
          </h2>
          <p className="text-zinc-400 mb-4">Build. Contribute. Win. Repeat.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
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
              100+ Developers Expected
            </span>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 mb-12">
          <div className="col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-zinc-100 mb-4">
              Event Details
            </h3>
            <ul role="list" className="space-y-2">
              {footerLinks.event.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-zinc-100 mb-4">
              Resources
            </h3>
            <ul role="list" className="space-y-2">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-zinc-100 mb-4">
              Organizers
            </h3>
            <ul role="list" className="space-y-2">
              {footerLinks.community.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-zinc-100 mb-4">
              Partners
            </h3>
            <ul role="list" className="space-y-2">
              {footerLinks.partners.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold leading-6 text-zinc-100 mb-4">
              Stay Connected
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Join our community and never miss an update about Hacktoberfest
              Cebu
            </p>
            <div className="flex items-center gap-3 mb-4">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100 transition-all duration-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <a
              href="mailto:hello@hacktoberfest.jscebu.org"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@hacktoberfest.jscebu.org
            </a>
          </div>
        </div>

        {/* Sponsor CTA Section */}
        <div className="mb-12 p-8 rounded-lg bg-gradient-to-r from-zinc-800/30 to-zinc-800/20 border border-zinc-800">
          <div className="text-center">
            <h3 className="text-lg font-bold text-zinc-100 mb-2">
              Want to Support Hacktoberfest Cebu?
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Join us as a sponsor and help grow the local developer community
            </p>
            <Link
              href="/sponsor"
              className="inline-flex items-center justify-center px-6 py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 rounded-md font-medium transition-colors"
            >
              Become a Sponsor
            </Link>
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
                  <ul className="space-y-1 text-zinc-500">
                    <li>• Register for free</li>
                    <li>• Join the hackathon</li>
                    <li>• Contribute to projects</li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-300 mb-2">For Companies:</p>
                  <ul className="space-y-1 text-zinc-500">
                    <li>• Sponsor the event</li>
                    <li>• Host workshops</li>
                    <li>• Recruit talents</li>
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
                  href="https://javascriptcebu.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  JavaScript Cebu
                </a>
                ,{" "}
                <a
                  href="https://python.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  PizzaPy Cebu
                </a>
                {" & "}
                <a
                  href="https://ethereum.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Ethereum Philippines
                </a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                Terms of Service
              </Link>
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
