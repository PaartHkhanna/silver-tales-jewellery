import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Designs } from "@/components/Designs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Silver Tales Jewellery" },
      {
        name: "description",
        content:
          "Premium handcrafted jewellery by Silver Tales. Explore our exclusive designs of necklaces, rings, bracelets and earrings from Akhnoor, Jammu.",
      },
      {
        property: "og:title",
        content: "Silver Tales Jewellery – Be Picky With Your Jewellery",
      },
      {
        property: "og:description",
        content:
          "Premium handcrafted jewellery by Silver Tales. Explore our exclusive designs.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", href: "/favicon.png" }, // ✅ simplified (no type)
    ],
  }),
});

function Index() {
  // ✅ FIX: reload pe top scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Designs />
      <Contact />
      <Footer />
    </div>
  );
}
