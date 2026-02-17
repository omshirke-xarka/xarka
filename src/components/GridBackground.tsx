const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    {/* Floating nodes */}
    <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-accent/30 animate-grid-flow" />
    <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-accent/20 animate-grid-flow" style={{ animationDelay: "1s" }} />
    <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 rounded-full bg-accent/25 animate-grid-flow" style={{ animationDelay: "2s" }} />
  </div>
);

export default GridBackground;
