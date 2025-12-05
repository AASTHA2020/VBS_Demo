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
                    className="inline-flex items-center justify-center rounded-lg bg-vbs-red px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white whitespace-nowrap transition-all duration-500 ease-in-out hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                  >
                    Build Your Remote Production Team
                  </a>
                  <a
                    href="#what-we-do"
                    className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white whitespace-nowrap transition-all duration-500 ease-in-out hover:bg-white/20 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
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
                  isMostRequested={false}
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
          className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 bg-white"
          aria-labelledby="how-we-work-title"
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-3">
              <h2
                id="how-we-work-title"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800"
              >
                How We Work
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600">
                Two models. One goal: strengthen your production output without slowing you down.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2 mb-8">
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
          

          </div>
        </section>

        {/* SECTION 6 — PROOF - Client Logos & Testimonials */}
        <section
          id="success-stories"
          className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50"
          aria-labelledby="proof-title"
        >
          <div className="max-w-[1600px] mx-auto space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <h2
                id="proof-title"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800 mb-6 sm:mb-8"
              >
                Trusted by 250+ AEC firms and powered by a team of 400+ remote specialists.
              </h2>
            </div>

            {/* Client Testimonial Images - Infinite Horizontal Scroll with Consistent Grading */}
            <div className="scroll-container mb-8 sm:mb-12 md:mb-16 lg:mb-20" aria-label="250+ AEC firms trust VBS">
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
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out hover:scale-110 group">
                      <Image
                        src={`/${client.filename}`}
                        alt={`AEC firm client ${client.id}`}
                        fill
                        className="object-cover brightness-100 contrast-110 saturate-110 group-hover:brightness-110 transition-all duration-500 ease-in-out"
                        sizes="160px"
                      />
                      {/* Consistent overlay for unified look */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
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
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out hover:scale-110 group">
                      <Image
                        src={`/${client.filename}`}
                        alt={`AEC firm client ${client.id}`}
                        fill
                        className="object-cover brightness-100 contrast-110 saturate-110 group-hover:brightness-110 transition-all duration-500 ease-in-out"
                        sizes="160px"
                      />
                      {/* Consistent overlay for unified look */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video & Testimonial - 3 YouTube Videos in Horizontal Layout */}
            <div className="grid gap-3 sm:gap-4 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { id: "uyaBPQrNhW0", title: "Client Testimonial 1" },
                { id: "nHNRCMkaGAk", title: "Client Testimonial 2" },
                { id: "2NsLtpdtMto", title: "Client Testimonial 3" }
              ].map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border-2 border-slate-200 hover:border-vbs-red transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2"
                >
                  <div className="relative aspect-video w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl"
                    />
                  </div>
                </div>
              ))}
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

        {/* SECTION 8 — PROCESS - Vertical Layout with Circular Icons */}
        <section
          id="resources"
          className="px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 bg-white"
          aria-labelledby="process-title"
        >
          <div className="max-w-[1600px] mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <h2
                id="process-title"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800 px-2"
              >
                Our process. Simple, seamless, streamlined.
              </h2>
            </div>
            <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
              {/* Vertical Dotted Line Connector */}
              <div className="absolute left-4 sm:left-5 md:left-6 lg:left-8 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300"></div>
              
              <div className="space-y-4 sm:space-y-4 md:space-y-5 lg:space-y-6">
                {[
                  {
                    step: "STEP 1",
                    icon: FaPhone,
                    title: "Join exploration call.",
                    body: "Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help."
                  },
                  {
                    step: "STEP 2",
                    icon: FaUsers,
                    title: "We build your production team",
                    body: "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team."
                  },
                  {
                    step: "STEP 3",
                    icon: FaHardHat,
                    title: "Your project moves forward faster",
                    body: "Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs."
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  
                  return (
                    <div key={index} className="relative flex items-start gap-3 sm:gap-3 md:gap-4 lg:gap-6">
                      {/* Circular Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-vbs-red flex items-center justify-center shadow-lg">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-0 sm:pt-0.5 md:pt-1 lg:pt-2">
                        <p className="text-xs sm:text-sm md:text-sm lg:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1 sm:mb-1 md:mb-1.5">
                          {item.step}
                        </p>
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-600 leading-snug sm:leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — FINAL CTA - Left Content + Right Eye Illustration */}
        <section
          id="final-cta"
          className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-white to-slate-50"
          aria-labelledby="final-cta-title"
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="bg-white rounded-2xl px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 border-2 border-slate-200 shadow-2xl relative overflow-hidden">
              {/* Background Image inside the white div */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/bg_img2.avif"
                  alt="AEC production background"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/70"></div>
              </div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Side - Content */}
                <div className="text-left lg:pr-8">
                  {/* Urgency Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-vbs-red/10 rounded-full mb-4">
                    <span className="w-2 h-2 bg-vbs-red rounded-full animate-pulse"></span>
                    <span className="text-xs sm:text-sm font-bold text-vbs-red uppercase tracking-wider">Book a 20-min Assessment</span>
                  </div>
                  
                  <h2
                    id="final-cta-title"
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4"
                  >
                    Build Your Remote Production Team
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-5 sm:mb-6 md:mb-8">
                    Share the workflows you want to strengthen and we'll design a dedicated or project-based production
                    model around them.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
                    <a
                    href="mailto:hello@virtualbuildingstudio.com?subject=Build%20my%20remote%20AEC%20production%20team"
                    className="inline-flex items-center justify-center rounded-lg bg-vbs-red px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold text-white whitespace-nowrap transition-all duration-500 ease-in-out hover:bg-vbs-redDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                  >
                    Build Your Remote Production Team
                  </a>
                  <a
                    href="tel:+10000000000"
                    className="inline-flex items-center justify-center rounded-lg bg-white border-2 border-slate-300 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold text-gray-900 whitespace-nowrap transition-all duration-500 ease-in-out hover:border-vbs-red hover:text-vbs-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call +1 (000) 000-0000
                    </a>
                  </div>
                  <p className="mt-3 sm:mt-4 md:mt-6 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white/80">
                    Free consultation • No commitment required
                  </p>
                </div>
                
                {/* Right Side - Eye Illustration */}
                <div className="flex items-center justify-center lg:justify-end">
                  <EyeIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Circular Stat Component for Final CTA
function EyeIllustration() {
  const uniqueId = `cta-circle-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
      {/* Circular Rotating Text using SVG - Rotating entire SVG */}
      <svg 
        className="absolute inset-0 w-full h-full animate-rotate-svg" 
        viewBox="0 0 300 300"
        style={{ animation: 'rotate 20s linear infinite' }}
      >
        <defs>
          <path
            id={uniqueId}
            d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
          />
        </defs>
        <text
          fill="#FFFFFF"
          fontSize="18"
          fontWeight="400"
          letterSpacing="6"
        >
          <textPath href={`#${uniqueId}`}>
            trusted by 250+ aec firms • trusted by 250+ aec firms • 
          </textPath>
        </text>
      </svg>
      
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 text-white">
          400+
        </h2>
        <p className="text-base sm:text-lg font-semibold text-white leading-tight">
          remote<br />specialists
        </p>
      </div>
    </div>
  );
}

// Circular Stat Component
function CircularStat() {
  const uniqueId = `circle-path-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
      {/* Circular Text - Rotating entire SVG */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 300 300"
        style={{ animation: 'rotate 20s linear infinite' }}
      >
        <defs>
          <path
            id={uniqueId}
            d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
          />
        </defs>
        <text
          fill="#FFFFFF"
          fontSize="18"
          fontWeight="400"
          letterSpacing="6"
        >
          <textPath href={`#${uniqueId}`}>
            trusted by 250+ aec firms • trusted by 250+ aec firms • 
          </textPath>
        </text>
      </svg>
      
      {/* Center Content */}
      <div className="relative z-10 text-center">
        <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2">
          400+
        </div>
        <div className="text-base sm:text-lg font-semibold text-white">
          remote
        </div>
        <div className="text-base sm:text-lg font-semibold text-white">
          specialists
        </div>
      </div>
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
      } p-4 sm:p-6 md:p-7 outline-none transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] focus-visible:border-vbs-red focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 overflow-hidden`}
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
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/80 group-hover:from-white/85 group-hover:via-white/75 group-hover:to-white/90 transition-colors duration-500 ease-in-out"></div>
        </div>
      )}
      <div className="space-y-3 sm:space-y-4 flex-1 relative z-10">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 drop-shadow-sm leading-tight">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 leading-relaxed drop-shadow-sm">{description}</p>
      </div>
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-slate-200 group-hover:border-vbs-red/30 transition-colors duration-500 ease-in-out flex items-center justify-between gap-2 text-xs sm:text-sm md:text-base font-bold text-vbs-red relative z-10">
        <span className="whitespace-nowrap">{cta}</span>
        <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-2 flex-shrink-0 text-xl">→</span>
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
    <div className="group relative flex flex-col gap-2.5 sm:gap-3 md:gap-4 rounded-2xl p-3 sm:p-5 md:p-6 lg:p-8 border-2 bg-white border-vbs-red/40 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-[1.01] overflow-hidden">
      {/* Recommended Badge - Only show for Dedicated Remote Production */}
      {isRecommended && (
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
          <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-vbs-red shadow-lg">
            Recommended
          </span>
        </div>
      )}
      
      {/* Strong Icon - Red gradient theme */}
      {Icon && (
        <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-vbs-red via-red-600 to-vbs-red shadow-lg group-hover:scale-110 transition-transform duration-500 ease-in-out">
          <Icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 text-white" />
        </div>
      )}
      
      <div className="space-y-2 sm:space-y-2.5 md:space-y-3 relative z-10">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        {recommendedFor && (
          <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-vbs-red uppercase tracking-wider">
            {recommendedFor}
          </p>
        )}
        <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-medium">{description}</p>
      </div>
      
      {/* Accent line on hover - Red theme */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-vbs-red opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
    </div>
  );
}
