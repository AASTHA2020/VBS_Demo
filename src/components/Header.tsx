"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Resources", href: "#resources" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact-us" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/98 backdrop-blur-sm">
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 h-16">
          <Link href="/" className="flex items-center gap-3" aria-label="Virtual Building Studio home">
            <div className="relative h-8 w-auto">
              <Image
                src="/vbs-logo.svg"
                alt="Virtual Building Studio"
                width={149}
                height={28}
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
          <motion.a
            href="#final-cta"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-vbs-red px-5 py-2 text-sm font-semibold text-white transition hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </header>
  );
}
