import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { GoldParticles } from "./GoldParticles";

export function Hero() {
  const scrollToDesigns = () => {
    document.querySelector("#designs")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/30" />

      {/* Radial gold glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      {/* Particles */}
      <GoldParticles />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.img
          src={logo}
          alt="Silver Tales Jewellery"
          className="mb-2 h-[300px] sm:h-[240px] md:h-[400px] w-auto drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ animation: "float 6s ease-in-out infinite" }}
        />

        <motion.button
          onClick={scrollToDesigns}
          className="shimmer gold-gradient-bg mt-1 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:scale-105 gold-glow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Designs
        </motion.button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}