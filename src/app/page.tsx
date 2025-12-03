"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoPlayer } from "@/components/VideoPlayer";
import { motion } from "framer-motion";

// Lazy load heavy animations
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.21, 0.56, 0.24, 0.99] }
};


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* SECTION 1 — HERO */}
        <section className="px-4 sm:px-6 lg:px-16 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto grid gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-slate-600"
                {...fadeUp}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-vbs-green" />
                AEC Production Services
              </motion.div>

              <motion.div
                className="space-y-4"
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.05 }}
              >
                <motion.h1
                  id="hero-title"
                  className="text-balance text-3xl font-bold tracking-tight text-vbs-black sm:text-4xl lg:text-5xl"
                  variants={fadeUp}
                >
                  Your AEC production partner for drafting, modeling and coordination.
                </motion.h1>
                <motion.p
                  className="text-lg font-semibold text-vbs-red"
                  variants={fadeUp}
                >
                  Virtual Building Studio
                </motion.p>
                <motion.p
                  className="max-w-xl text-balance text-sm leading-relaxed text-slate-600 sm:text-base"
                  variants={fadeUp}
                >
                  400+ remote architects and engineers helping architecture, surveying and MEPF firms deliver work
                  with accuracy and speed.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2 flex-wrap"
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
              >
                <motion.a
                  href="#final-cta"
                  className="inline-flex items-center justify-center rounded-md bg-vbs-red px-3 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white whitespace-nowrap transition hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
                  variants={fadeUp}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Build Your Remote Production Team
                </motion.a>
                <motion.p className="text-xs text-slate-500" variants={fadeUp}>
                  Embedded remote teams for architectural, Scan-to-BIM and MEPF production.
                </motion.p>
              </motion.div>
            </div>

            {/* Hero visual placeholder - Clean Autodesk style */}
            <motion.div
              className="relative h-56 sm:h-64 lg:h-80 xl:h-96 overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.21, 0.56, 0.24, 0.99], delay: 0.1 }}
              aria-label="Abstract architectural and engineering illustration"
              role="img"
            >
              <div className="absolute inset-0 grid grid-cols-3 gap-2 sm:gap-3 p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="h-16 sm:h-20 rounded-lg bg-vbs-blue/20 border border-vbs-blue/30" />
                  <div className="h-20 sm:h-24 rounded-lg bg-vbs-green/20 border border-vbs-green/30" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="h-20 sm:h-24 rounded-lg bg-vbs-red/20 border border-vbs-red/30" />
                  <div className="h-16 sm:h-20 rounded-lg bg-vbs-yellow/20 border border-vbs-yellow/30" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="h-12 sm:h-16 rounded-lg bg-vbs-blueAlt/20 border border-vbs-blueAlt/30" />
                  <div className="h-20 sm:h-24 rounded-lg bg-vbs-green/20 border border-vbs-green/30" />
                </div>
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div>
                  <p className="font-semibold text-vbs-black text-[0.7rem] sm:text-xs">Production control panel</p>
                  <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-500">
                    Live visibility into drafting, modeling and coordination.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-semibold text-vbs-red text-[0.7rem] sm:text-xs">400+</p>
                  <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-500">Remote specialists</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — SEGMENTATION (Primary CTA Zone) */}
        <section
          id="what-we-do"
          className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 border-t border-slate-200 bg-white"
          aria-labelledby="segmentation-title"
        >
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <h2
                id="segmentation-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-vbs-black"
              >
                Where do you need production support today?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Choose the production workflow you want to strengthen — we'll assemble the team behind it.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Architectural Production"
                description="Remote architects for drafting and BIM documentation."
                cta="Strengthen Architectural Production"
              />
              <ServiceCard
                title="Scan-to-BIM Production"
                description="Point cloud to BIM modeling delivered with precision and fast turnaround."
                cta="Build Scan-to-BIM Capacity"
              />
              <ServiceCard
                title="MEPF Production"
                description="MEPF modeling, clash detection, coordination and shop drawings."
                cta="Optimize MEPF Output"
              />
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW WE DELIVER */}
        <section
          id="about-us"
          className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 bg-slate-50"
          aria-labelledby="how-we-work-title"
        >
          <div className="max-w-7xl mx-auto grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2
                id="how-we-work-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-vbs-black"
              >
                How We Work
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Two models. One goal: strengthen your production output without slowing you down.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ModelCard
                  title="Dedicated Remote Production"
                  description="Long-term remote architects and engineers embedded into your workflow."
                />
                <ModelCard
                  title="Project-Based Production"
                  description="Drafting, modeling and coordination delivered on demand for specific projects."
                />
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vbs-green">
                Delivery confidence
              </p>
              <p className="mt-3 text-sm text-slate-600">
                From early concept drafting to detailed MEPF coordination, VBS teams are structured to plug into your
                standards, tools and QA processes — so remote never feels distant.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-600">
                <div>
                  <dt className="font-semibold text-vbs-green">Global coverage</dt>
                  <dd className="mt-1">Multiple time zones to extend your studio hours.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-vbs-blue">Tool alignment</dt>
                  <dd className="mt-1">Revit, Navisworks, AutoCAD and more — aligned to your stack.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* SECTION 4 — PROOF (Premium, Minimal, Trust-Driving) */}
        <section
          id="success-stories"
          className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 border-t border-slate-200 bg-white"
          aria-labelledby="proof-title"
        >
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
            <div className="space-y-2 text-center">
              <h2
                id="proof-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-vbs-black px-4"
              >
                Trusted by 250+ AEC firms and powered by a team of 400+ remote specialists.
              </h2>
            </div>

            {/* Client Logos grid */}
            <section
              aria-label="Representative client logos"
              className="grid gap-3 sm:gap-4 rounded-lg bg-slate-50 p-4 sm:p-6 lg:p-8 grid-cols-2 sm:grid-cols-4 border border-slate-200"
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-12 sm:h-16 items-center justify-center rounded-lg sm:rounded-2xl border border-slate-100 bg-white/80 text-[0.65rem] sm:text-xs font-medium text-slate-500"
                >
                  Client Logo
                </div>
              ))}
            </section>

            {/* Project videos, showreel, testimonials */}
            <section
              className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-center"
              aria-label="Representative project showreel and testimonial"
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-vbs-charcoal text-white shadow-subtle">
                <div className="relative h-48 sm:h-60 lg:h-72">
                  <VideoPlayer />
                </div>
              </div>

              {/* Testimonial slider placeholder */}
              <div className="space-y-5" aria-label="Client testimonial">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vbs-yellow">
                  Partner voices
                </p>
                <div className="bg-white relative overflow-hidden rounded-lg p-6 border border-slate-200 shadow-sm">
                  <p className="text-sm leading-relaxed text-slate-700">
                    “VBS behaves like an extension of our in-house team. They understand our standards, deliver on tight
                    deadlines and keep coordination clean across disciplines.”
                  </p>
                  <div className="mt-5 text-xs text-slate-500">
                    <p className="font-semibold text-vbs-black">Head of Production</p>
                    <p>Global architecture and engineering firm</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[0.65rem] text-slate-400">
                    <p>Slide 01 of 03 (placeholder)</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full border border-slate-200 text-slate-600 transition hover:border-vbs-red hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        aria-label="Previous testimonial (placeholder)"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full border border-slate-200 text-slate-600 transition hover:border-vbs-red hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        aria-label="Next testimonial (placeholder)"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* SECTION 5 — MICRO PROCESS */}
        <section
          id="resources"
          className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 bg-slate-50"
          aria-labelledby="process-title"
        >
          <div className="max-w-7xl mx-auto space-y-6 text-center">
            <h2
              id="process-title"
              className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-vbs-black"
            >
              A simple path to more production capacity
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 px-4">
              Tell us what you need → We build your production team → Your project moves forward faster.
            </p>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
              {[
                {
                  step: "01",
                  title: "Tell us what you need",
                  body: "Share your current and upcoming workload across architecture, Scan-to-BIM and MEPF."
                },
                {
                  step: "02",
                  title: "We build your production team",
                  body: "We assemble remote specialists aligned to your tools, standards and delivery model."
                },
                {
                  step: "03",
                  title: "Your project moves forward faster",
                  body: "Production scales without overloading your in-house team or sacrificing quality."
                }
              ].map((item, index) => {
                const colors = [["text-vbs-red", "bg-vbs-red/10"], ["text-vbs-green", "bg-vbs-green/10"], ["text-vbs-blue", "bg-vbs-blue/10"]];
                const [textColor, bgColor] = colors[index];
                return (
                  <li key={item.step} className="bg-white flex flex-col gap-2 rounded-lg p-6 border border-slate-200 shadow-sm">
                    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${textColor}`}>
                      {item.step}
                    </p>
                    <p className="text-sm font-semibold text-vbs-black mt-1">{item.title}</p>
                    <p className="text-xs text-slate-600 mt-1">{item.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* SECTION 6 — FINAL CTA (Secondary CTA) */}
        <section
          id="final-cta"
          className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 bg-white"
          aria-labelledby="final-cta-title"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white mx-auto max-w-3xl rounded-lg px-4 sm:px-6 py-8 sm:py-10 text-center border border-slate-200 shadow-sm">
              <h2
                id="final-cta-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-vbs-black"
              >
                Build Your Remote Production Team
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Share the workflows you want to strengthen and we'll design a dedicated or project-based production
                model around them.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center sm:gap-5 flex-wrap">
                <a
                  href="mailto:hello@virtualbuildingstudio.com?subject=Build%20my%20remote%20AEC%20production%20team"
                  className="inline-flex items-center justify-center rounded-md bg-vbs-red px-3 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold text-white whitespace-nowrap transition hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
                >
                  Build Your Remote Production Team
                </a>
                <p className="text-xs text-slate-500">
                  Or call us directly at +1 (000) 000-0000 (placeholder).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  cta: string;
};

function ServiceCard({ title, description, cta }: ServiceCardProps) {
  return (
    <motion.a
      href="#final-cta"
      className="group flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 sm:p-6 shadow-sm outline-none transition hover:-translate-y-0.5 hover:border-vbs-red hover:shadow-md focus-visible:border-vbs-red focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      aria-label={cta}
    >
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-vbs-black">{title}</h3>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-2 text-[0.65rem] sm:text-xs font-semibold text-vbs-red">
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">{cta}</span>
        <span className="transition-transform group-hover:translate-x-1 flex-shrink-0">→</span>
      </div>
    </motion.a>
  );
}

type ModelCardProps = {
  title: string;
  description: string;
};

function ModelCard({ title, description }: ModelCardProps) {
  return (
    <div className="bg-white flex flex-col gap-2 rounded-lg p-5 border border-slate-200 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-vbs-green">
        {title}
      </p>
      <p className="text-xs text-slate-600 mt-1">{description}</p>
    </div>
  );
}


