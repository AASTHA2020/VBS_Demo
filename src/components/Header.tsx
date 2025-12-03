"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Resources", href: "#resources" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact-us" }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/98 backdrop-blur-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4 h-16">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Virtual Building Studio home">
            <div className="relative h-8 sm:h-10 w-auto">
              <Image
                src="/vbs-logo.svg"
                alt="Virtual Building Studio"
                width={180}
                height={35}
                className="h-full w-auto"
                priority
              />
            </div>
          </Link>
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-vbs-red font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#final-cta"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-gradient-to-r from-vbs-red to-vbs-redDark px-4 py-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap transition hover:from-vbs-redDark hover:to-vbs-red shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
            >
              Get Started
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-vbs-red focus:outline-none focus:ring-2 focus:ring-vbs-red rounded-md"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-vbs-red font-medium transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#final-cta"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 text-center rounded-md bg-gradient-to-r from-vbs-red to-vbs-redDark px-4 py-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap transition hover:from-vbs-redDark hover:to-vbs-red shadow-md"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
