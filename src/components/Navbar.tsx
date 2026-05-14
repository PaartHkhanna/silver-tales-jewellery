import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Designs", href: "#designs" },
  { label: "Contact", href: "#contact" },
  { label: "Visit Us",
    href: "https://www.google.com/maps/place/SILVER+TALES/@32.8992458,74.7316475,724m/data=!3m2!1e3!4b1!4m6!3m5!1s0x391e6362a42f9749:0xee09536a019255d9!8m2!3d32.8992413!4d74.7342224!16s%2Fg%2F11yb0yv1nz?entry=ttu",
    external: true,
}
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  

  // Scroll blur logic (clean)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Smooth scroll
  type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

const handleClick = (link: NavLink) => {
  setMobileOpen(false);

  if (link.external) {
    window.open(link.href, "_blank");
    return;
  }

  const el = document.querySelector(link.href);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth" });
};

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0}}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black/30 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-16 sm:h-20 w-full items-center justify-between px-4 sm:px-6">
        
        {/* LOGO */}
        <a
          href="#home"
          onClick={() => handleClick({ label: "Home", href: "#home" })}
          className="flex items-center gap-4 sm:gap-3"
        >
          <img src={logo} alt="Silver Tales Jewellery" className="h-20 w-auto" />
          <span className="gold-gradient-text font-heading text-lg font-bold tracking-wide hidden sm:inline">
            Silver Tales Jewellery
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link)}
              className="text-base md:text-lg font-semibold tracking-wider uppercase gold-gradient-text transition-all duration-300 hover:opacity-80"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN (simple & stable) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-6 top-22 z-50 md:hidden 
            backdrop-blur-md bg-black/60 border border-white/10 rounded-lg p-4"
          >
            <div className="flex flex-col items-end gap-5 text-lg">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link)}
                  className="text-right text-base font-medium tracking-wider uppercase 
                  gold-gradient-text transition-all duration-300 
                  hover:opacity-80 hover:drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
