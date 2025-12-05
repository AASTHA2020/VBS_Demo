"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoPlayer } from "@/components/VideoPlayer";
import Image from "next/image";
import { HiChartBar, HiOfficeBuilding, HiStar, HiLightBulb, HiGlobeAlt } from "react-icons/hi";
import { FaTrophy, FaBullseye, FaPhone, FaHardHat, FaUsers, FaCog } from "react-icons/fa";


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* SECTION 1 — HERO - Background Image with Centered Text */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] flex items-center justify-center" aria-labelledby="hero-title">
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
            {/* Enhanced semi-dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          </div>
          
          {/* Centered Content */}
          <div className="relative z-10 max-w-[1600px] mx-auto w-full text-center px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <h1
                id="hero-title"
                className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl px-2"
              >
                Scale your AEC production with 400+ remote specialists who deliver precision, speed, and seamless integration.
              </h1>

              {/* Micro-Value Props - 3-4 Pillars */}
              {/* <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 px-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white font-semibold text-sm sm:text-base">✓ Accurate Models</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white font-semibold text-sm sm:text-base">⚡ Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white font-semibold text-sm sm:text-base">🌍 Remote Specialists</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <span className="text-white font-semibold text-sm sm:text-base">📈 Scalable Teams</span>
                </div>
              </div> */}

              <div className="flex flex-col gap-4 sm:gap-5 items-center justify-center">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
                  <a
                    href="#final-cta"
                    className="inline-flex items-center justify-center rounded-lg bg-vbs-red px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white whitespace-nowrap transition-all hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
                  >
                    Build Your Remote Production Team
                  </a>
                  <a
                    href="#what-we-do"
                    className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white whitespace-nowrap transition-all hover:bg-white/20 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
                  >
                    View Work Samples
                  </a>
                </div>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 font-medium drop-shadow-lg max-w-3xl px-4">
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
          className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-slate-50 to-white"
          aria-labelledby="segmentation-title"
        >
          <div className="max-w-[1600px] mx-auto space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2
                id="segmentation-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800"
              >
                Where do you need production support today?
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Choose the production workflow you want to strengthen — we'll assemble the team behind it.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
              <div className="animate-fade-in-up h-full" style={{ animationDelay: "0.1s" }}>
                <ServiceCard
                  title="Architectural Production"
                  description="Remote architects for drafting and BIM documentation. Scale your architectural output with precision and speed."
                  cta="Strengthen Architectural Production"
                  image="/img1.avif"
                  isMostRequested={false}
                />
              </div>
              <div className="animate-fade-in-up h-full" style={{ animationDelay: "0.2s" }}>
                <ServiceCard
                  title="Scan-to-BIM Production"
                  description="Point cloud to BIM modeling delivered with precision and fast turnaround. Transform reality capture into production-ready models."
                  cta="Build Scan-to-BIM Capacity"
                  image="/img2.avif"
                  isMostRequested={true}
                />
              </div>
              <div className="animate-fade-in-up h-full" style={{ animationDelay: "0.3s" }}>
                <ServiceCard
                  title="MEPF Production"
                  description="MEPF modeling, clash detection, coordination and shop drawings. Streamline mechanical, electrical, and plumbing workflows."
                  cta="Optimize MEPF Output"
                  image="/img3.avif"
                  isMostRequested={false}
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
          className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-white"
          aria-labelledby="how-we-work-title"
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
              <h2
                id="how-we-work-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800"
              >
                How We Work
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Two models. One goal: strengthen your production output without slowing you down.
              </p>
            </div>
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 mb-8">
              <ModelCard
                title="Dedicated Remote Production"
                description="Long-term remote architects and engineers embedded into your workflow. Ideal for firms scaling production capacity with consistent, integrated teams."
                isRecommended={true}
                recommendedFor="Ongoing projects & scaling teams"
                icon={FaUsers}
              />
              <ModelCard
                title="Project-Based Production"
                description="Drafting, modeling and coordination delivered on demand for specific projects. Perfect for peak workloads and specialized project needs."
                isRecommended={false}
                recommendedFor="Peak workloads & specialized needs"
                icon={FaHardHat}
              />
            </div>
            <div className="relative mt-8 sm:mt-10 rounded-2xl text-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl overflow-hidden">
              {/* Tech Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/new.jpeg"
                  alt="Global coverage and tool alignment background"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              {/* Semi-transparent overlay for text readability - lighter than before */}
              <div className="absolute inset-0 z-[1] bg-black/50" />
              
              {/* Foreground content */}
              <div className="relative z-10">
                {/* Section Label */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-vbs-blue to-vbs-green flex items-center justify-center text-white shadow-lg">
                    <HiGlobeAlt className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.12em] text-white">
                    Delivery Confidence
                  </h3>
                </div>

                {/* Intro Text */}
                <p className="text-sm sm:text-base md:text-lg font-semibold text-white leading-relaxed max-w-3xl mb-8 sm:mb-10 md:mb-12">
                  From early concept drafting to detailed MEPF coordination, VBS teams plug
                  into your standards, tools and QA processes — so remote never feels distant.
                </p>

                {/* Feature Cards with more whitespace */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 justify-items-center">
                  {/* Card 1 — Global Coverage */}
                  <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center text-center px-4 py-6 sm:px-8 sm:py-8 w-full max-w-sm transition-all hover:shadow-2xl hover:-translate-y-2 hover:scale-105 duration-300 border border-slate-100">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-vbs-blue/10 to-vbs-green/10 flex items-center justify-center mb-4 sm:mb-6 p-3 sm:p-4">
                      <Image
                        src="/global.png"
                        alt="Global Coverage"
                        width={160}
                        height={140}
                        className="object-contain"
                      />
                    </div>
                    <dt className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      Global Coverage
                    </dt>
                    <dd className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                      Multiple time zones extend your studio hours.
                    </dd>
                  </div>

                  {/* Card 2 — Tool Alignment */}
                  <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center text-center px-4 py-6 sm:px-8 sm:py-8 w-full max-w-sm transition-all hover:shadow-2xl hover:-translate-y-2 hover:scale-105 duration-300 border border-slate-100">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-vbs-green/10 to-vbs-yellow/10 flex items-center justify-center mb-4 sm:mb-6 p-3 sm:p-4">
                      <Image
                        src="/tool.jpg"
                        alt="Tool Alignment"
                        width={140}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                    <dt className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      Tool Alignment
                    </dt>
                    <dd className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                      Revit, Navisworks, AutoCAD and more — aligned to your stack.
                    </dd>
                  </div>
                </dl>
              </div>
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
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800 mb-8"
              >
                Trusted by 250+ AEC firms and powered by a team of 400+ remote specialists.
              </h2>
            </div>

            {/* Client Testimonial Images - Infinite Horizontal Scroll with Consistent Grading */}
            <div className="scroll-container mb-12 sm:mb-16 lg:mb-20" aria-label="250+ AEC firms trust VBS">
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
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
                      <Image
                        src={`/${client.filename}`}
                        alt={`AEC firm client ${client.id}`}
                        fill
                        className="object-cover brightness-100 contrast-110 saturate-110 group-hover:brightness-110 transition-all duration-300"
                        sizes="160px"
                      />
                      {/* Consistent overlay for unified look */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
                      <Image
                        src={`/${client.filename}`}
                        alt={`AEC firm client ${client.id}`}
                        fill
                        className="object-cover brightness-100 contrast-110 saturate-110 group-hover:brightness-110 transition-all duration-300"
                        sizes="160px"
                      />
                      {/* Consistent overlay for unified look */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video & Testimonial - Side by Side */}
            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-vbs-blue/20 to-vbs-green/20 shadow-xl border-2 border-slate-200">
                <div className="relative h-[250px] sm:h-[350px] lg:h-[450px]">
                  <Image
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop&q=80"
                    alt="Architecture and engineering project"
                    fill
                    className="object-cover brightness-110 contrast-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                  <VideoPlayer />
                </div>
              </div>

              <div className="space-y-4 flex flex-col h-full" aria-label="Client testimonial">
                <p className="text-base sm:text-lg font-bold uppercase tracking-wider text-vbs-red">
                  Partner voices
                </p>
                <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-1">
                  <div className="mb-2">
                    <svg className="w-6 h-6 text-vbs-red opacity-60 mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-800 mb-3">
                    <span className="font-bold text-gray-900">"VBS behaves like an extension of our in-house team."</span> They understand our standards, deliver on tight
                    deadlines and keep coordination clean across disciplines.
                  </p>
                  <div className="pt-3 border-t-2 border-slate-100">
                    <p className="font-bold text-xs sm:text-sm text-gray-900">Head of Production</p>
                    <p className="text-xs text-slate-600 mt-0.5">Global architecture and engineering firm</p>
                  </div>
                </div>
                
                {/* Second Testimonial */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-1">
                  <div className="mb-2">
                    <svg className="w-6 h-6 text-vbs-red opacity-60 mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-800 mb-3">
                    <span className="font-bold text-gray-900">"Working with VBS has transformed our production capacity."</span> Their remote architects seamlessly integrate with our workflow, maintaining our quality standards while significantly accelerating project delivery.
                  </p>
                  <div className="pt-3 border-t-2 border-slate-100">
                    <p className="font-bold text-xs sm:text-sm text-gray-900">Director of Architecture</p>
                    <p className="text-xs text-slate-600 mt-0.5">Leading AEC consulting firm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — AWARDS - Enhanced Attractive Design */}
        {/* <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">Our Awards</h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium">Excellence. Our minimum bar for client delivery.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "1,250+ projects delivered", desc: "Projects executed successfully", icon: HiChartBar },
                { title: "130+ industry sectors", desc: "Industry sectors", icon: HiOfficeBuilding },
                { title: "4.9/5 client rating", desc: "Average client rating", icon: HiStar },
                { title: "America's Fastest-Growing Companies 2025", desc: "Financial Times", icon: FaTrophy },
                { title: "Top 100 U.S. IT Innovators 2025", desc: "Industry recognition", icon: HiLightBulb },
                { title: "Nearshore North America Top Software Developers 2025", desc: "Award recognition", icon: FaBullseye }
              ].map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <div key={index} className="group bg-white rounded-xl p-5 sm:p-6 border-2 border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 text-vbs-blue">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1.5">{award.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">{award.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* SECTION 8 — PROCESS - BairesDev Style Horizontal 3-Step */}
        <section
          id="resources"
          className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-white"
          aria-labelledby="process-title"
        >
          <div className="max-w-[1600px] mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2
                id="process-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800"
              >
                Our process. Simple, seamless, streamlined.
              </h2>
            </div>
            <div className="relative grid gap-8 lg:grid-cols-3">
              {/* Flow Arrow - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-vbs-red via-vbs-blue to-vbs-green">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-l-[12px] border-l-vbs-green border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
              </div>
              <div className="hidden lg:block absolute top-24 left-2/3 right-0 h-0.5 bg-gradient-to-r from-vbs-green via-vbs-yellow to-vbs-red">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-0 h-0 border-l-[12px] border-l-vbs-red border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
              </div>
              
              {[
                {
                  step: "STEP 1",
                  icon: FaPhone,
                  title: "Tell us what you need",
                  body: "Share details about your business during a discovery call. We'll talk about your project needs, goals, timeline, budget, and necessary skills to see how we can assist you."
                },
                {
                  step: "STEP 2",
                  icon: FaHardHat,
                  iconSecondary: FaCog,
                  title: "We build your production team",
                  body: "Within 3 days, we'll carefully provide remote Architects or Engineers from our global talent pool tailored to your specific requirements and skills."
                },
                {
                  step: "STEP 3",
                  icon: FaHardHat,
                  iconSecondary: FaUsers,
                  title: "Your project moves forward faster",
                  body: "Our team integrates with yours seamlessly, ready to get to work right away. Onboard new members, oversee performance, and adjust your headcount as required."
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                const IconSecondary = item.iconSecondary;
                
                // Progressive sizing: Step 1 (smaller) → Step 3 (larger) - Responsive
                const sizeMultiplier = index === 0 ? 1 : index === 1 ? 1.1 : 1.2;
                const iconContainerSize = index === 0 ? 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24' : index === 1 ? 'w-20 h-20 sm:w-[88px] sm:h-[88px] lg:w-24 lg:h-24' : 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28';
                const iconSize = index === 0 ? 'w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12' : index === 1 ? 'w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12' : 'w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14';
                const iconSecondarySize = index === 1 ? 'w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7' : 'w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8';
                const cardPadding = index === 0 ? 'p-4 sm:p-6 lg:p-6' : index === 1 ? 'p-5 sm:p-7 lg:p-7' : 'p-5 sm:p-8 lg:p-8';
                const titleSize = index === 0 ? 'text-base sm:text-lg lg:text-xl' : index === 1 ? 'text-lg sm:text-xl lg:text-2xl' : 'text-lg sm:text-xl lg:text-2xl';
                
                // Brand-specific gradient colors
                const iconBgGradient = index === 0 
                  ? 'from-vbs-red/20 to-vbs-red/10' 
                  : index === 1 
                  ? 'from-vbs-blue/20 to-vbs-green/20' 
                  : 'from-vbs-green/20 to-vbs-yellow/20';
                
                return (
                  <div key={index} className={`flex flex-col items-center text-center space-y-4 ${cardPadding} border-2 border-gray-200 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up relative`} style={{ animationDelay: `${index * 0.15}s` }}>
                    {/* Icon Container with Brand Gradient */}
                    <div className="relative flex items-center justify-center">
                      <div className={`rounded-2xl bg-gradient-to-br ${iconBgGradient} flex items-center justify-center relative shadow-lg ${iconContainerSize}`}>
                        {IconSecondary ? (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <IconComponent className={`text-vbs-red ${iconSize}`} />
                            <IconSecondary className={`absolute text-vbs-blue ${index === 1 ? 'bottom-1 right-1 sm:bottom-2 sm:right-2' : 'bottom-2 right-2 sm:bottom-3 sm:right-3'} ${iconSecondarySize}`} />
                          </div>
                        ) : (
                          <IconComponent className={`text-vbs-red ${iconSize}`} />
                        )}
                      </div>
                    </div>
                    
                    {/* Step Number */}
                    <p className="text-sm font-bold uppercase tracking-wider text-vbs-red">
                      {item.step}
                    </p>
                    
                    {/* Title with Progressive Sizing */}
                    <h3 className={`${titleSize} font-bold text-gray-900 leading-tight`}>
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 9 — FINAL CTA - BairesDev Style Centered */}
        <section
          id="final-cta"
          className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-white to-slate-50"
          aria-labelledby="final-cta-title"
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="bg-white mx-auto max-w-4xl rounded-2xl px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 text-center border-2 border-slate-200 shadow-2xl relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-vbs-blue/5 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-vbs-green/5 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-vbs-red/10 rounded-full mb-4">
                  <span className="w-2 h-2 bg-vbs-red rounded-full animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-bold text-vbs-red uppercase tracking-wider">Book a 20-min Assessment</span>
                </div>
                
                <h2
                  id="final-cta-title"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4"
                >
                  Build Your Remote Production Team
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Share the workflows you want to strengthen and we'll design a dedicated or project-based production
                  model around them.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:hello@virtualbuildingstudio.com?subject=Build%20my%20remote%20AEC%20production%20team"
                    className="inline-flex items-center justify-center rounded-lg bg-vbs-red px-8 py-3.5 text-base sm:text-lg font-bold text-white whitespace-nowrap transition-all hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
                  >
                    Build Your Remote Production Team
                  </a>
                  <a
                    href="tel:+10000000000"
                    className="inline-flex items-center justify-center rounded-lg bg-white border-2 border-slate-300 px-6 py-3.5 text-sm sm:text-base font-semibold text-gray-900 whitespace-nowrap transition-all hover:border-vbs-red hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 shadow-lg hover:shadow-xl hover:scale-105 transform duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call +1 (000) 000-0000
                  </a>
                </div>
                <p className="mt-6 text-xs sm:text-sm text-slate-500">
                  Free consultation • No commitment required
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
  image?: string;
  isMostRequested?: boolean;
};

function ServiceCard({ title, description, cta, image, isMostRequested = false }: ServiceCardProps) {
  return (
    <a
      href="#final-cta"
      className={`group relative flex flex-col h-full rounded-xl border-2 ${
        isMostRequested 
          ? 'border-vbs-red/40 bg-gradient-to-br from-white to-vbs-red/5 shadow-xl' 
          : 'border-slate-200 bg-white shadow-md'
      } p-4 sm:p-6 md:p-7 outline-none transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] focus-visible:border-vbs-red focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 overflow-hidden`}
      aria-label={cta}
    >
      {isMostRequested && (
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
          <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-vbs-red shadow-lg">
            Most Requested
          </span>
        </div>
      )}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/80 group-hover:from-white/85 group-hover:via-white/75 group-hover:to-white/90 transition-colors duration-300"></div>
        </div>
      )}
      <div className="space-y-3 sm:space-y-4 flex-1 relative z-10">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 drop-shadow-sm leading-tight">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 leading-relaxed drop-shadow-sm">{description}</p>
      </div>
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-slate-200 group-hover:border-vbs-red/30 transition-colors duration-300 flex items-center justify-between gap-2 text-xs sm:text-sm md:text-base font-bold text-vbs-red relative z-10">
        <span className="whitespace-nowrap">{cta}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-2 flex-shrink-0 text-xl">→</span>
      </div>
    </a>
  );
}

type ModelCardProps = {
  title: string;
  description: string;
  isRecommended?: boolean;
  recommendedFor?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

function ModelCard({ title, description, isRecommended = false, recommendedFor, icon: Icon }: ModelCardProps) {
  return (
    <div className={`group relative flex flex-col gap-3 sm:gap-4 rounded-2xl p-4 sm:p-6 md:p-8 border-2 ${
      isRecommended 
        ? 'bg-gradient-to-br from-vbs-blue/5 via-white to-vbs-green/5 border-vbs-blue/40 shadow-xl' 
        : 'bg-gradient-to-br from-white to-slate-50/80 border-slate-200/80 shadow-lg'
    } hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] overflow-hidden`}>
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
          <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-gradient-to-r from-vbs-blue to-vbs-green shadow-lg">
            Recommended
          </span>
        </div>
      )}
      
      {/* Strong Icon */}
      {Icon && (
        <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl ${
          isRecommended 
            ? 'bg-gradient-to-br from-vbs-blue to-vbs-green' 
            : 'bg-gradient-to-br from-slate-200 to-slate-300'
        } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${
            isRecommended ? 'text-white' : 'text-slate-700'
          }`} />
        </div>
      )}
      
      <div className="space-y-3 relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        {recommendedFor && (
          <p className="text-xs sm:text-sm font-semibold text-vbs-blue uppercase tracking-wider">
            {recommendedFor}
          </p>
        )}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">{description}</p>
      </div>
      
      {/* Accent line on hover */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${
        isRecommended 
          ? 'bg-gradient-to-r from-vbs-blue via-vbs-green to-vbs-blue' 
          : 'bg-gradient-to-r from-slate-300 to-slate-400'
      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  );
}
