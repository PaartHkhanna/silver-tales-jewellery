
import { useEffect, useRef } from "react";

export function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulse: number;
      depth: number; // 🔥 NEW (near/far)
    };

    const particles: Particle[] = [];

    const createParticles = () => {
      particles.length = 0;

      for (let i = 0; i < 200; i++) {
        const depth = Math.random(); // 0 → far, 1 → near

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,

          // 🔥 speed based on depth
          vx: (Math.random() - 0.5) * (0.2 + depth * 0.4),
          vy: (Math.random() - 0.5) * (0.2 + depth * 0.4),

          // 🔥 size based on depth
          size: 0.5 + depth * 2.5,

          // 🔥 opacity based on depth
          opacity: 0.2 + depth * 0.6,

          pulse: Math.random() * Math.PI * 2,
          depth,
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles(); // regenerate
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.01;

        const o = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));

        // wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // 🔥 main particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${o})`;
        ctx.fill();

        // 🔥 glow effect (depth based)
        const glowSize = p.size * (2 + p.depth * 3);

        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          glowSize
        );

        grad.addColorStop(0, `rgba(255, 215, 0, ${o * 0.6})`);
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
