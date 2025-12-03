"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.21, 0.56, 0.24, 0.99] }
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* HERO - Autodesk-inspired clean design */}
        <section className="px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
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
                  400+ remote architects and engineers helping architecture, surveying and MEPF firms deliver work with
                  accuracy and speed.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2"
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
              >
                <motion.a
                  href="#final-cta"
                  className="inline-flex items-center justify-center rounded-md bg-vbs-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
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
              className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 sm:h-80 lg:h-96"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.56, 0.24, 0.99], delay: 0.1 }}
              aria-label="Abstract architectural and engineering illustration"
              role="img"
            >
              <div className="absolute inset-0 grid grid-cols-3 gap-3 p-6">
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-vbs-blue/20 border border-vbs-blue/30" />
                  <div className="h-24 rounded-lg bg-vbs-green/20 border border-vbs-green/30" />
                </div>
                <div className="space-y-3">
                  <div className="h-24 rounded-lg bg-vbs-red/20 border border-vbs-red/30" />
                  <div className="h-20 rounded-lg bg-vbs-yellow/20 border border-vbs-yellow/30" />
                </div>
                <div className="space-y-3">
                  <div className="h-16 rounded-lg bg-vbs-blueAlt/20 border border-vbs-blueAlt/30" />
                  <div className="h-24 rounded-lg bg-vbs-green/20 border border-vbs-green/30" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-vbs-black">Production control panel</p>
                  <p className="text-[0.7rem] text-slate-500">
                    Live visibility into drafting, modeling and coordination.
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-vbs-red">400+</p>
                  <p className="text-[0.7rem] text-slate-500">Remote specialists</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 – PRIMARY SEGMENTATION */}
        <section
          id="what-we-do"
          className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-t border-slate-200 bg-white"
          aria-labelledby="segmentation-title"
        >
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h2
                id="segmentation-title"
                className="text-2xl font-bold tracking-tight text-vbs-black sm:text-3xl"
              >
                Where do you need production support today?
              </h2>
              <p className="text-sm text-slate-600">
                Choose the production workflow you want to strengthen — we'll assemble the team behind it.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
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

        {/* SECTION 3 – HOW WE WORK */}
        <section
          id="about-us"
          className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-slate-50"
          aria-labelledby="how-we-work-title"
        >
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2
                id="how-we-work-title"
                className="text-2xl font-bold tracking-tight text-vbs-black sm:text-3xl"
              >
                How We Work
              </h2>
              <p className="text-sm text-slate-600">
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

        {/* SECTION 4 – PROOF / TRUST */}
        <section
          id="success-stories"
          className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-t border-slate-200 bg-white"
          aria-labelledby="proof-title"
        >
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2 text-center">
              <h2
                id="proof-title"
                className="text-2xl font-bold tracking-tight text-vbs-black sm:text-3xl"
              >
                Trusted by 250+ AEC firms and powered by a team of 400+ remote specialists.
              </h2>
            </div>

            {/* Logos grid placeholder */}
            <section
              aria-label="Representative client logos"
              className="grid gap-4 rounded-lg bg-slate-50 p-6 sm:grid-cols-4 sm:p-8 border border-slate-200"
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-16 items-center justify-center rounded-2xl border border-slate-100 bg-white/80 text-xs font-medium text-slate-500"
                >
                  Client Logo
                </div>
              ))}
            </section>

            {/* Showreel placeholder */}
            <section
              className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-center"
              aria-label="Representative project showreel and testimonial"
            >
              <div className="relative overflow-hidden rounded-3xl bg-vbs-charcoal text-white shadow-subtle">
                <div className="relative h-60 sm:h-72">
                  <Image
                    src="/placeholder-showreel.jpg"
                    alt="Placeholder for Virtual Building Studio project showreel"
                    fill
                    className="object-cover opacity-40"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-vbs-black/60 to-transparent" />
                  <button
                    type="button"
                    className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/40 backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-vbs-charcoal"
                    aria-label="Play project showreel (placeholder)"
                  >
                    <span className="ml-1 border-l-[10px] border-t-[7px] border-b-[7px] border-l-white border-t-transparent border-b-transparent" />
                  </button>
                  <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs text-slate-200">
                    <p className="font-medium">Sample portfolio showreel</p>
                    <p className="text-[0.7rem] text-slate-300">Architecture · Scan-to-BIM · MEPF</p>
                  </div>
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

        {/* SECTION 5 – MICRO PROCESS */}
        <section
          id="resources"
          className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-slate-50"
          aria-labelledby="process-title"
        >
          <div className="max-w-7xl mx-auto space-y-6 text-center">
            <h2
              id="process-title"
              className="text-2xl font-bold tracking-tight text-vbs-black sm:text-3xl"
            >
              A simple path to more production capacity
            </h2>
            <p className="text-sm text-slate-600">
              Tell us what you need → We build your production team → Your project moves forward faster.
            </p>
            <ol className="mt-6 grid gap-4 text-left sm:grid-cols-3">
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

        {/* SECTION 6 – FINAL CTA */}
        <section
          id="final-cta"
          className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-white"
          aria-labelledby="final-cta-title"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white mx-auto max-w-3xl rounded-lg px-6 py-10 text-center border border-slate-200 shadow-sm">
              <h2
                id="final-cta-title"
                className="text-2xl font-bold tracking-tight text-vbs-black sm:text-3xl"
              >
                Build Your Remote Production Team
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Share the workflows you want to strengthen and we'll design a dedicated or project-based production
                model around them.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <a
                  href="mailto:hello@virtualbuildingstudio.com?subject=Build%20my%20remote%20AEC%20production%20team"
                  className="inline-flex items-center justify-center rounded-md bg-vbs-red px-7 py-3 text-sm font-semibold text-white transition hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
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
      className="group flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm outline-none transition hover:-translate-y-0.5 hover:border-vbs-red hover:shadow-md focus-visible:border-vbs-red focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      aria-label={cta}
    >
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-vbs-black">{title}</h3>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs font-semibold text-vbs-red">
        <span>{cta}</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
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


