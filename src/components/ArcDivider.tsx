// Arc/Semicircle divider component for sections with 3D effect
export function ArcDivider({ flip = false, color = "slate" }: { flip?: boolean; color?: "slate" | "white" }) {
  const fillColor = color === "white" ? "white" : "#f8fafc";
  const uniqueId = `arcGradient-${color}-${flip ? "flip" : "normal"}`;
  
  return (
    <div className={`relative w-full ${flip ? "rotate-180" : ""}`} style={{ height: "80px" }}>
      <svg
        viewBox="0 0 1440 80"
        className="w-full h-full"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={uniqueId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fillColor} stopOpacity="1" />
            <stop offset="100%" stopColor={fillColor} stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d="M0 80C300 80 600 0 720 0C840 0 1140 80 1440 80V80H0V80Z"
          fill={`url(#${uniqueId})`}
        />
      </svg>
      {/* 3D Shadow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
    </div>
  );
}
