import { Camera, Phone, MapPin, ArrowUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa"; 
import logo from "@/assets/logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <img src={logo} alt="Silver Tales" className="h-30 w-auto" />
            <p className="text-sm text-muted-foreground tracking-wide">
              "Be picky with your jewellery.."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "Designs", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    document
                      .querySelector(`#${link.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-left text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-101 hover:translate-x-1"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-muted-foreground">
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/919906316357"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary hover:scale-101 transition hover:translate-x-1"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9906316357</span>
              </a>

              {/* ✅ UPDATED LOCATION LINK */}
              <a
                href="https://www.google.com/maps/place/SILVER+TALES/@32.8992458,74.7316475,724m/data=!3m2!1e3!4b1!4m6!3m5!1s0x391e6362a42f9749:0xee09536a019255d9!8m2!3d32.8992413!4d74.7342224!16s%2Fg%2F11yb0yv1nz?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary hover:scale-101 transition hover:translate-x-1"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span>Raja Bazar Akhnoor, Jammu 181201</span>
              </a>
              

              {/* Instagram */}
              <a
                href="https://instagram.com/silver_tales_akhnoor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary hover:scale-101 transition hover:translate-x-1"
              >
                <FaInstagram className="h-4 w-4 text-primary" />
                <span>@silver_tales_akhnoor</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Silver Tales Jewellery. All rights reserved.
            <br /><br />
            Designed with ❤️ by{" "}
            <span className="gold-gradient-text font-semibold transition-all duration-300 hover:scale-103 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] inline-block">
              PAARTH KHANNA
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:gold-glow-sm"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}