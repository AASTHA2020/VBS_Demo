"use client";

import { useState } from "react";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Using a placeholder video URL - replace with your actual video
  // For demo, using a sample video from a CDN (10 second clip)
  const videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  if (isPlaying) {
    return (
      <div className="relative w-full h-full">
        <video
          autoPlay
          controls
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-vbs-red ring-4 ring-white/50 backdrop-blur-sm transition-all hover:bg-vbs-redDark hover:scale-110 hover:ring-white/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 shadow-2xl"
          aria-label="Play project showreel"
        >
          <span className="ml-1.5 border-l-[14px] border-t-[10px] border-b-[10px] border-l-white border-t-transparent border-b-transparent" />
        </button>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-white">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2">
          <p className="font-bold text-xs sm:text-sm">Project Showreel</p>
          <p className="text-[0.7rem] sm:text-xs text-slate-200">Architecture · Scan-to-BIM · MEPF</p>
        </div>
        <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 text-left sm:text-right">
          <p className="text-[0.7rem] sm:text-xs font-medium">10 sec</p>
        </div>
      </div>
    </div>
  );
}

