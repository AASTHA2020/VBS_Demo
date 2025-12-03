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
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-slate-900/60 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/40 backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vbs-red focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          aria-label="Play project showreel"
        >
          <span className="ml-1 border-l-[10px] border-t-[7px] border-b-[7px] border-l-white border-t-transparent border-b-transparent" />
        </button>
      </div>
      <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-200">
        <div>
          <p className="font-medium text-[0.7rem] sm:text-xs">Project Showreel</p>
          <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-300">Architecture · Scan-to-BIM · MEPF</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-300">10 sec</p>
        </div>
      </div>
    </div>
  );
}

