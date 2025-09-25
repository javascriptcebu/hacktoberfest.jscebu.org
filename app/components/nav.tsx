"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import PastYearsDropdown from "./nav-dropdown";

interface NavigationProps {
  isHomepage?: boolean;
  isAuthenticated?: boolean;
  onSignOut?: () => Promise<void>;
}

export const Navigation: React.FC<NavigationProps> = ({
  isHomepage = false,
  isAuthenticated = false,
  onSignOut,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Projects", href: "/projects", hasDropdown: true },
    { name: "Events", href: "/events" },
    { name: "Join", href: "/join" },
    { name: "Submit", href: "/submit" },
    { name: "Contributions", href: "/contributions" },
    { name: "Sponsor", href: "/sponsor" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
  ];

  // Homepage variant - centered navigation without sticky header
  if (isHomepage) {
    return (
      <>
        <nav className="w-full my-8 md:my-16 animate-fade-in px-4">
          {/* Desktop Navigation for Homepage */}
          <ul className="hidden md:flex flex-wrap items-center justify-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.hasDropdown ? (
                  <div className="flex gap-0.5 items-center group">
                    <Link
                      href={link.href}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                    >
                      {link.name}
                    </Link>
                    <PastYearsDropdown />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            {isAuthenticated && onSignOut ? (
              <li>
                <button
                  onClick={onSignOut}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <li>
                <Link
                  href="/signin"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium duration-200 text-space-dust hover:text-space-white"
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>

          {/* Mobile Navigation for Homepage */}
          <div className="md:hidden flex items-center justify-between">
            <Link href="/" className="text-lavender font-bold text-xl">
              CHF25
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[100] bg-void/95 backdrop-blur-lg">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-space-haze/30">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lavender font-bold text-xl"
                >
                  CHF25
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center p-2 transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <div
                      key={link.href}
                      className={
                        link.hasDropdown
                          ? "pb-2 mb-2 border-b border-space-haze/30"
                          : ""
                      }
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${
                          link.hasDropdown
                            ? "flex items-center justify-between px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                            : "block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
                        }`}
                      >
                        {link.name}
                        {link.hasDropdown && <PastYearsDropdown />}
                      </Link>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-space-haze/30">
                    {isAuthenticated && onSignOut ? (
                      <button
                        onClick={() => {
                          onSignOut();
                          setMobileMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <Link
                        href="/signin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                      >
                        Sign In
                      </Link>
                    )}
                  </div>
                </div>
              </nav>

              {/* Mobile Footer */}
              <div className="p-4 border-t border-space-haze/30">
                <p className="text-xs text-center text-space-haze">
                  Hacktoberfest Cebu 2025
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Regular navigation for other pages with sticky header
  return (
    <>
      <header ref={ref}>
        <div
          className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
            isIntersecting
              ? "bg-void/0 border-transparent"
              : "bg-void/90 border-space-haze/30"
          }`}
        >
          <div className="flex items-center justify-between p-4 mx-auto max-w-7xl w-full">
            {/* Logo - Always visible on left */}
            <Link
              href="/"
              className="text-lavender font-bold text-xl hover:text-melrose transition-colors flex-shrink-0"
            >
              CHF25
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className={
                    link.hasDropdown ? "flex gap-0.5 items-center group" : ""
                  }
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-lg whitespace-nowrap ${
                      link.hasDropdown
                        ? "text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && <PastYearsDropdown />}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button - Always on right */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-void/95 backdrop-blur-lg">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-space-haze/30">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lavender font-bold text-xl"
              >
                CHF25
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center p-2 transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <div
                    key={link.href}
                    className={
                      link.hasDropdown
                        ? "pb-2 mb-2 border-b border-space-haze/30"
                        : ""
                    }
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`${
                        link.hasDropdown
                          ? "flex items-center justify-between px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
                          : "block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && <PastYearsDropdown />}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>

            {/* Mobile Footer */}
            <div className="p-4 border-t border-space-haze/30">
              <p className="text-xs text-center text-space-haze">
                Hacktoberfest Cebu 2025
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
