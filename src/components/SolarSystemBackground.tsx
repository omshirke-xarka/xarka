import { useEffect, useRef } from "react";

const UniverseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Stars configuration
    const starCount = 600;
    const stars: { x: number; y: number; z: number; size: number; alpha: number }[] = [];

    // Initialize stars
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * w - w / 2,
        y: Math.random() * h - h / 2,
        z: Math.random() * w,
        size: Math.random() * 1.5,
        alpha: Math.random()
      });
    }

    const getCssVar = (name: string) => {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      const foregroundRaw = getCssVar("--foreground"); // e.g., "0 0% 100%" or "222 47% 11%"

      // Update and draw stars
      stars.forEach((star) => {
        // Move star closer
        star.z -= 0.5; // Speed

        // Reset if passed viewport
        if (star.z <= 0) {
          star.z = w;
          star.x = Math.random() * w - w / 2;
          star.y = Math.random() * h - h / 2;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= w && py >= 0 && py <= h) {
          const size = (1 - star.z / w) * star.size * 2;
          const alpha = (1 - star.z / w) * star.alpha;

          ctx.beginPath();
          ctx.fillStyle = `hsla(${foregroundRaw} / ${alpha})`;
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default UniverseBackground;
