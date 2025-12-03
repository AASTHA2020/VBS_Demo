"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoPlayer } from "@/components/VideoPlayer";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* SECTION 1 — HERO - Background Image with Centered Text */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-24 sm:pb-28 lg:pb-32 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] flex items-center justify-center" aria-labelledby="hero-title">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg_img.avif"
              alt="AEC production background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          {/* Centered Content */}
          <div className="relative z-10 max-w-[1600px] mx-auto w-full text-center px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <h1
                id="hero-title"
                className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-lg px-2"
              >
                Your AEC production partner for drafting, modeling and coordination.
              </h1>

              <div className="flex flex-col gap-6 sm:gap-8 items-center justify-center">
                <a
                  href="#final-cta"
                  className="inline-flex items-center justify-center rounded-lg bg-vbs-red px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white whitespace-nowrap transition hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 shadow-lg hover:shadow-xl"
                >
                  Build Your Remote Production Team
                </a>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 font-semibold drop-shadow-md max-w-2xl px-4">
                  400+ remote architects and engineers helping architecture, surveying and MEPF firms deliver work
                  with accuracy and speed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — TRUST - BairesDev Style Simple Text */}
        {/* <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-slate-50" aria-labelledby="trust-title">
          <div className="max-w-[1600px] mx-auto text-center space-y-4">
            <h2 id="trust-title" className="text-2xl sm:text-3xl font-bold text-vbs-black">
              250+ AEC firms rely on our remote production teams to scale their output.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a href="#" className="text-vbs-red font-semibold hover:underline">Read case study</a>
              <span className="text-slate-400">•</span>
              <a href="#" className="text-vbs-red font-semibold hover:underline">Watch testimonial</a>
              <span className="text-slate-400">•</span>
              <a href="#" className="text-vbs-red font-semibold hover:underline">Read case study</a>
            </div>
          </div>
        </section> */}

        {/* SECTION 3 — SEGMENTATION - BairesDev Style Service Grid */}
        <section
          id="what-we-do"
          className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white"
          aria-labelledby="segmentation-title"
        >
          <div className="max-w-[1600px] mx-auto space-y-12 bg-gray-50">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2
                id="segmentation-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800"
              >
                Where do you need production support today?
              </h2>
              <p className="text-lg text-slate-600">
                Choose the production workflow you want to strengthen — we'll assemble the team behind it.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <ServiceCard
                  title="Architectural Production"
                  description="Remote architects for drafting and BIM documentation."
                  cta="Strengthen Architectural Production"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <ServiceCard
                  title="Scan-to-BIM Production"
                  description="Point cloud to BIM modeling delivered with precision and fast turnaround."
                  cta="Build Scan-to-BIM Capacity"
                />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <ServiceCard
                  title="MEPF Production"
                  description="MEPF modeling, clash detection, coordination and shop drawings."
                  cta="Optimize MEPF Output"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — FEATURED IN - Simple Logo Grid */}
        {/* <section className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm font-semibold text-slate-500 text-center mb-8 uppercase tracking-wider">
              As featured in...
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              {["CNBC", "Forbes", "Insider", "Bloomberg"].map((name) => (
                <div key={name} className="text-2xl font-bold text-slate-700">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* SECTION 5 — HOW WE DELIVER - BairesDev Style */}
        <section
          id="about-us"
          className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-white"
          aria-labelledby="how-we-work-title"
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2
                id="how-we-work-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800"
              >
                How We Work
              </h2>
              <p className="text-lg text-slate-600">
                Two models. One goal: strengthen your production output without slowing you down.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              <ModelCard
                title="Dedicated Remote Production"
                description="Long-term remote architects and engineers embedded into your workflow."
              />
              <ModelCard
                title="Project-Based Production"
                description="Drafting, modeling and coordination delivered on demand for specific projects."
              />
            </div>
            <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
              <p className="text-sm font-semibold uppercase tracking-wider text-vbs-green mb-4">
                Delivery confidence
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                From early concept drafting to detailed MEPF coordination, VBS teams are structured to plug into your
                standards, tools and QA processes — so remote never feels distant.
              </p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="font-bold text-vbs-green mb-2">Global coverage</dt>
                  <dd className="text-slate-600">Multiple time zones to extend your studio hours.</dd>
                </div>
                <div>
                  <dt className="font-bold text-vbs-blue mb-2">Tool alignment</dt>
                  <dd className="text-slate-600">Revit, Navisworks, AutoCAD and more — aligned to your stack.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* SECTION 6 — PROOF - Client Logos & Testimonials */}
        <section
          id="success-stories"
          className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-slate-50"
          aria-labelledby="proof-title"
        >
          <div className="max-w-[1600px] mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2
                id="proof-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800"
              >
                Trusted by 250+ AEC firms and powered by a team of 400+ remote specialists.
              </h2>
            </div>

            {/* Client Testimonial Images - Infinite Horizontal Scroll */}
            <div className="scroll-container" aria-label="250+ AEC firms trust VBS">
              <div className="scroll-content">
                {[
                  { id: 1, filename: "firm1.avif" },
                  { id: 2, filename: "firm2.jpg" },
                  { id: 3, filename: "firm3.avif" },
                  { id: 4, filename: "firm4.avif" },
                  { id: 5, filename: "firm5.avif" },
                  { id: 6, filename: "firm7.avif" },
                  { id: 7, filename: "firm8.avif" },
                  { id: 8, filename: "firm1.avif" }
                ].map((client) => (
                  <div key={client.id} className="scroll-item">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <Image
                        src={`/${client.filename}`}
                        alt={`AEC firm client ${client.id}`}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { id: 1, filename: "firm1.avif" },
                  { id: 2, filename: "firm2.jpg" },
                  { id: 3, filename: "firm3.avif" },
                  { id: 4, filename: "firm4.avif" },
                  { id: 5, filename: "firm5.avif" },
                  { id: 6, filename: "firm7.avif" },
                  { id: 7, filename: "firm8.avif" },
                  { id: 8, filename: "firm1.avif" }
                ].map((client) => (
                  <div key={`duplicate-${client.id}`} className="scroll-item">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <Image
                        src={`/${client.filename}`}
                        alt={`AEC firm client ${client.id}`}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video & Testimonial - Side by Side */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="relative overflow-hidden rounded-xl bg-slate-900 text-white">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop&q=80"
                    alt="Architecture and engineering project"
                    fill
                    className="object-cover opacity-60"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <VideoPlayer />
                </div>
              </div>

              <div className="space-y-6" aria-label="Client testimonial">
                <p className="text-sm font-semibold uppercase tracking-wider text-vbs-yellow">
                  Partner voices
                </p>
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-base leading-relaxed text-slate-700 mb-4">
                    "VBS behaves like an extension of our in-house team. They understand our standards, deliver on tight
                    deadlines and keep coordination clean across disciplines."
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="font-bold text-sm text-gray-800">Head of Production</p>
                    <p className="text-xs text-slate-600 mt-1">Global architecture and engineering firm</p>
                  </div>
                </div>
                
                {/* Second Testimonial */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-base leading-relaxed text-slate-700 mb-4">
                    "Working with VBS has transformed our production capacity. Their remote architects seamlessly integrate with our workflow, maintaining our quality standards while significantly accelerating project delivery."
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="font-bold text-sm text-gray-800">Director of Architecture</p>
                    <p className="text-xs text-slate-600 mt-1">Leading AEC consulting firm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — AWARDS - Enhanced Attractive Design */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Our Awards</h2>
              <p className="text-lg sm:text-xl text-slate-700 font-medium">Excellence. Our minimum bar for client delivery.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "1,250+ projects delivered", desc: "Projects executed successfully", icon: "📊" },
                { title: "130+ industry sectors", desc: "Industry sectors", icon: "🏢" },
                { title: "4.9/5 client rating", desc: "Average client rating", icon: "⭐" },
                { title: "America's Fastest-Growing Companies 2025", desc: "Financial Times", icon: "🏆" },
                { title: "Top 100 U.S. IT Innovators 2025", desc: "Industry recognition", icon: "💡" },
                { title: "Nearshore North America Top Software Developers 2025", desc: "Award recognition", icon: "🎯" }
              ].map((award, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 hover:border-vbs-red/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{award.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-vbs-red transition-colors">{award.title}</h3>
                      <p className="text-sm text-slate-600 font-medium">{award.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — PROCESS - BairesDev Style Horizontal 3-Step */}
        <section
          id="resources"
          className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-slate-50"
          aria-labelledby="process-title"
        >
          <div className="max-w-[1600px] mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2
                id="process-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800"
              >
                Our process. Simple, seamless, streamlined.
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  step: "step 1",
                  title: "Join exploration call.",
                  body: "Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help."
                },
                {
                  step: "step 2",
                  title: "Discuss solution and team structure.",
                  body: "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team."
                },
                {
                  step: "step 3",
                  title: "Get started and track performance.",
                  body: "Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <p className="text-sm font-semibold uppercase tracking-wider text-vbs-green mb-4">
                    {item.step}
                  </p>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — FINAL CTA - BairesDev Style Centered */}
        <section
          id="final-cta"
          className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white"
          aria-labelledby="final-cta-title"
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="bg-white mx-auto max-w-4xl rounded-2xl px-8 sm:px-12 py-12 sm:py-16 text-center border border-slate-200 shadow-lg">
              <h2
                id="final-cta-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800 mb-6"
              >
                Build Your Remote Production Team
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Share the workflows you want to strengthen and we'll design a dedicated or project-based production
                model around them.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@virtualbuildingstudio.com?subject=Build%20my%20remote%20AEC%20production%20team"
                  className="inline-flex items-center justify-center rounded-lg bg-vbs-red px-8 py-4 text-base font-semibold text-white whitespace-nowrap transition hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
                >
                  Build Your Remote Production Team
                </a>
                <p className="text-sm text-slate-500">
                  Or call us directly at +1 (000) 000-0000
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
    <a
      href="#final-cta"
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm outline-none transition-all duration-300 hover:shadow-lg hover:border-vbs-red/30 hover:-translate-y-1 focus-visible:border-vbs-red focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2"
      aria-label={cta}
    >
      <div className="space-y-4 flex-1">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-base text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-2 text-sm font-semibold text-vbs-red">
        <span className="whitespace-nowrap">{cta}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 text-lg">→</span>
      </div>
    </a>
  );
}

type ModelCardProps = {
  title: string;
  description: string;
};

function ModelCard({ title, description }: ModelCardProps) {
  return (
    <div className="bg-white flex flex-col gap-3 rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <p className="text-sm font-semibold uppercase tracking-wider text-vbs-green">
        {title}
      </p>
      <p className="text-base text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
