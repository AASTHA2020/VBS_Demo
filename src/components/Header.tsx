"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiHome, HiStar, HiBookOpen, HiInformationCircle, HiPhone, HiChevronDown } from "react-icons/hi";

const navItems = [
  {
    label: "What We Do",
    href: "#what-we-do",
    icon: HiHome,
    hasDropdown: true,
    dropdown: [
      { title: "Dedicated Resource", description: "Top 1% Vetted Global Architects and Engineers in your team.", href: "#what-we-do" },
      { title: "Dedicated Team", description: "Top 1% Architects and Engineers Dedicated Team for your A&E firm.", href: "#what-we-do" }
    ],
    layout: "single"
  },
  {
    label: "Success Stories",
    href: "#success-stories",
    icon: HiStar,
    hasDropdown: false
  },
  {
    label: "Resources",
    href: "#resources",
    icon: HiBookOpen,
    hasDropdown: true,
    dropdown: [
      { title: "Blog", description: "", href: "#resources" },
      { title: "Webinar", description: "", href: "#resources" }
    ],
    layout: "single"
  },
  {
    label: "About Us",
    href: "#about-us",
    icon: HiInformationCircle,
    hasDropdown: true,
    dropdown: [
      { title: "About VBS", description: "Who we are and how our vision became reality.", href: "#about-us", isLeftColumn: true },
      { title: "Top 1% A&E Talent", description: "", href: "#about-us" },
      { title: "Hire Architects and Engineers", description: "", href: "#about-us" },
      { title: "Leadership Team", description: "", href: "#about-us" }
    ],
    layout: "two-column"
  },
  {
    label: "Contact Us",
    href: "#contact-us",
    icon: HiPhone,
    hasDropdown: false
  }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const ref = dropdownRefs.current[openDropdown];
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Add blur to main content when mobile menu is open (but not header/logo)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.setAttribute('data-menu-open', 'true');
      // Also add class to main element directly
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.classList.add('blur-active');
      }
    } else {
      document.body.removeAttribute('data-menu-open');
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.classList.remove('blur-active');
      }
    }
    return () => {
      document.body.removeAttribute('data-menu-open');
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.classList.remove('blur-active');
      }
    };
  }, [mobileMenuOpen]);


  return (
    <>
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
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[item.label] = el;
                }}
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-2 px-3 py-2 font-medium transition-all duration-300 rounded-lg group ${
                    openDropdown === item.label 
                      ? 'text-vbs-red' 
                      : 'text-slate-700 hover:text-vbs-red'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <HiChevronDown className={`w-3 h-3 transition-all duration-300 ${openDropdown === item.label ? 'rotate-180 text-vbs-red' : 'text-gray-600 group-hover:text-vbs-red'}`} />
                  )}
                  {/* Red underline when active/hovered */}
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-vbs-red transition-all duration-300 ${
                    openDropdown === item.label ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></span>
                </Link>
                
                {openDropdown === item.label && item.hasDropdown && item.dropdown && (
                  <div className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl border border-slate-200 py-4 z-50 animate-slide-down ${
                    item.layout === "two-column" ? "w-[400px]" : "w-[320px]"
                  }`}>
                    {item.layout === "two-column" ? (
                      <div className="grid grid-cols-2 divide-x divide-slate-200">
                        {/* Left Column - First item with description */}
                        <div className="px-4">
                          {item.dropdown.filter(d => d.isLeftColumn).map((dropdownItem, idx) => (
                            <Link
                              key={idx}
                              href={dropdownItem.href}
                              className="block group hover:bg-slate-50 -mx-2 px-3 py-2.5 rounded-lg transition-all duration-200"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <h4 className="font-semibold text-sm text-gray-900 mb-1 group-hover:text-vbs-red transition-colors duration-200">
                                {dropdownItem.title}
                              </h4>
                              {dropdownItem.description && (
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {dropdownItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                        
                        {/* Right Column - Other items */}
                        <div className="px-4 space-y-2">
                          {item.dropdown.filter(d => !d.isLeftColumn).map((dropdownItem, idx) => (
                            <Link
                              key={idx}
                              href={dropdownItem.href}
                              className="block group hover:bg-slate-50 -mx-2 px-3 py-2 rounded-lg transition-all duration-200"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <span className="font-medium text-sm text-gray-900 group-hover:text-vbs-red transition-colors duration-200">
                                {dropdownItem.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="px-4 space-y-2">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            href={dropdownItem.href}
                            className="block group hover:bg-slate-50 -mx-2 px-3 py-2.5 rounded-lg transition-all duration-200"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <h4 className="font-semibold text-sm text-gray-900 mb-1 group-hover:text-vbs-red transition-colors duration-200">
                              {dropdownItem.title}
                            </h4>
                            {dropdownItem.description && (
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {dropdownItem.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
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
      {/* Backdrop overlay - closes menu when clicked outside */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-transparent z-20 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav 
          className="lg:hidden border-t border-slate-200 bg-white shadow-lg animate-slide-down z-30 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-3 py-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isMobileDropdownOpen = mobileDropdownOpen === item.label;
              
              return (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(isMobileDropdownOpen ? null : item.label)}
                        className="flex items-center justify-between w-full gap-2.5 px-3 py-2.5 text-sm text-slate-700 hover:text-vbs-red hover:bg-slate-50 font-medium transition-colors duration-200 rounded-lg"
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComponent className="w-5 h-5 text-gray-700" />
                          <span>{item.label}</span>
                        </div>
                        <HiChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isMobileDropdownOpen && item.dropdown && (
                        <div className="ml-7 mt-1 mb-2 space-y-1.5 border-l-2 border-slate-200 pl-4">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <Link
                              key={idx}
                              href={dropdownItem.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                              className="block py-1.5"
                            >
                              <h4 className="font-medium text-xs text-gray-900 mb-0.5">
                                {dropdownItem.title}
                              </h4>
                              {dropdownItem.description && (
                                <p className="text-[10px] text-slate-600 leading-tight">
                                  {dropdownItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-700 hover:text-vbs-red hover:bg-slate-50 font-medium transition-colors duration-200 rounded-lg"
                    >
                      <IconComponent className="w-5 h-5 text-gray-700" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              );
            })}
            <Link
              href="#final-cta"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-2 mx-3 text-center rounded-lg bg-vbs-red px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-vbs-redDark"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
    </>
  );
}
