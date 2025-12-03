// Curved section wrapper with 3D effect
export function CurvedSection({ 
  children, 
  className = "",
  topCurve = false,
  bottomCurve = false 
}: { 
  children: React.ReactNode;
  className?: string;
  topCurve?: boolean;
  bottomCurve?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {topCurve && (
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden pointer-events-none z-10">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[200%] h-32 rounded-full bg-inherit shadow-2xl" />
        </div>
      )}
      <div className="relative z-0">{children}</div>
      {bottomCurve && (
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none z-10">
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200%] h-32 rounded-full bg-inherit shadow-2xl" />
        </div>
      )}
    </div>
  );
}

