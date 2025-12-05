"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact-us" className="bg-slate-900 text-white">
      <div className="max-content-width section-padding">
        {/* Prominent Contact Section */}
        <div className="mb-12 pb-8 border-b border-slate-700">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">Get in Touch</h3>
              <p className="text-sm sm:text-base text-slate-300">
                Ready to scale your AEC production? Let's discuss how our remote specialists can strengthen your workflow.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="tel:+10000000000"
                className="inline-flex items-center gap-2 px-6 py-3 bg-vbs-red hover:bg-vbs-redDark rounded-lg font-bold text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-base sm:text-lg">+1 (000) 000-0000</span>
              </a>
              <a
                href="mailto:hello@virtualbuildingstudio.com?subject=Request%20for%20Information"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border-2 border-white/20 rounded-lg font-semibold text-white transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Virtual Building Studio</h3>
              <p className="text-xs text-slate-300">
                Your remote AEC production partner for drafting, modeling and coordination.
              </p>
            </div>
            {/* Certifications & Partnerships */}
            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Certifications</h4>
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1.5 bg-white/10 rounded border border-white/20 text-xs font-semibold">ISO Certified</div>
                <div className="px-3 py-1.5 bg-white/10 rounded border border-white/20 text-xs font-semibold">Autodesk Partner</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Contact</h4>
            <dl className="space-y-2 text-xs text-slate-300">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:hello@virtualbuildingstudio.com"
                    className="hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
                  >
                    hello@virtualbuildingstudio.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd className="font-semibold text-white">+1 (000) 000-0000</dd>
              </div>
              <div>
                <dt className="sr-only">Regions</dt>
                <dd className="text-slate-400">Serving AEC firms globally</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Follow</h4>
            <nav aria-label="Social media links">
              <ul className="flex gap-3">
                <li>
                  <a
                    href="https://linkedin.com/company/virtualbuildingstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition hover:border-vbs-red hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                    aria-label="LinkedIn (opens in new tab)"
                  >
                    <span className="text-sm">in</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@virtualbuildingstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition hover:border-vbs-red hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                    aria-label="YouTube (opens in new tab)"
                  >
                    <span className="text-sm">▶</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/virtualbuildingstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition hover:border-vbs-red hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                    aria-label="X (formerly Twitter) (opens in new tab)"
                  >
                    <span className="text-sm">𝕏</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Resources</h4>
            <nav aria-label="Resource links">
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="#what-we-do"
                    className="text-slate-300 hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
                  >
                    Download Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="#success-stories"
                    className="text-slate-300 hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
                  >
                    Get Sample Models
                  </a>
                </li>
                <li>
                  <a
                    href="#resources"
                    className="text-slate-300 hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Legal</h4>
            <nav aria-label="Legal links">
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="/privacy"
                    className="text-slate-300 hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-slate-300 hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Virtual Building Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

