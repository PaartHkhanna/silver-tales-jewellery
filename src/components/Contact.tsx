import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

// ✅ IMPORT IMAGES
import paarth from "@/assets/paarth.png";
import honey from "@/assets/honey.png";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    
  // EMPTY VALIDATION
  if (!form.name || !form.phone || !form.message) {
    setErrorMessage("Please fill all details.");

    setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return;
  }

  // PHONE VALIDATION
  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(form.phone)) {
    setErrorMessage("Enter a valid 10-digit phone number.");

    setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return;
  }

  setLoading(true);

  const data = {
    ...form,
    date: new Date().toLocaleString(),
  };

  try {
    const res = await fetch("http://localhost:5000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      setForm({
        name: "",
        phone: "",
        message: "",
      });
    } else {
      setErrorMessage("Something went wrong.");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  } catch (error) {
    console.error(error);

    setErrorMessage("Server error.");

    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="relative py-24 md:py-32 tracking-wide">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gold-gradient-text text-4xl font-bold tracking-wide">
            Meet Our Team
          </h2>
          <p className="mt-4 text-muted-foreground tracking-wide">
            "The faces behind our brand, crafting your dreams into reality.."
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* PROFILE SECTION */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* Hitesh */}
            <div className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-[2px]">
              <img
                src={honey}
                alt="honey"
                className="h-18 w-18 rounded-full object-cover border border-border shadow-[0_0_20px_rgba(255,215,0,0.5)]"
              />
              <div>
                <h3 className="font-heading text-white text-lg font-semibold tracking-wider">
                  Hitesh Verma
                </h3>
                <p className="text-sm gold-gradient-text tracking-wider">
                  Founder
                </p>
              </div>
            </div>

            {/* Paarth */}
            <div className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-[2px]">
              <img
                src={paarth}
                alt="paarth"
                className="h-18 w-18 rounded-full object-cover border border-border shadow-[0_0_20px_rgba(255,215,0,0.5)]"
              />
              <div>
                <h3 className="font-heading text-white text-lg font-semibold tracking-wider">
                  Paarth Khanna
                </h3>
                <p className="text-sm gold-gradient-text tracking-wider">
                  Designer
                </p>
              </div>
            </div>

          </motion.div>

          {/* FORM (ONLY GLOW, NO BORDER) */}
          
          <motion.div
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-2xl bg-card p-8 transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,215,0,0.35)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* SUCCESS TOAST */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 flex items-start gap-3 rounded-xl border border-yellow-500/20 bg-background/80 px-4 py-3 shadow-[0_0_20px_rgba(255,215,0,0.12)] backdrop-blur-md"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-400" />

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Message sent successfully
                  </p>

                  <p className="text-xs text-muted-foreground">
                    We'll contact you soon.
                  </p>
                </div>
              </motion.div>
            )}

            {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-xl border border-red-500/20 bg-background/80 px-4 py-3 shadow-[0_0_20px_rgba(255,0,0,0.12)] backdrop-blur-md"
            >
              <p className="text-sm font-semibold text-red-400">
                {errorMessage}
              </p>
            </motion.div>
          )}
            
            {/* NAME */}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Name
              </label>

              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                placeholder="Your name"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Phone
              </label>

              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                placeholder="Your phone number"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>

              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                placeholder="Your message"
              />
            </div>

            {/* BUTTON */}
            <motion.button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="gold-gradient-bg flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </motion.button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}