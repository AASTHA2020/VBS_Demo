"use client";

export function Footer() {
  return (
    <footer id="contact-us" className="bg-slate-900 text-white">
      <div className="max-content-width section-padding">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Virtual Building Studio</h3>
              <p className="text-xs text-slate-300">
                Your remote AEC production partner for drafting, modeling and coordination.
              </p>
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
                    className="hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    hello@virtualbuildingstudio.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>+1 (000) 000-0000 (placeholder)</dd>
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
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Legal</h4>
            <nav aria-label="Legal links">
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="/privacy"
                    className="text-slate-300 hover:text-vbs-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-teal focus-visible:ring-offset-2 focus-visible:ring-offset-vbs-navy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-slate-300 hover:text-vbs-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-teal focus-visible:ring-offset-2 focus-visible:ring-offset-vbs-navy"
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

