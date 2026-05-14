"use client";


import { useState, useEffect } from "react";
import type { PanInfo } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";


// IMAGES (same as before)
import goldNecklace from "@/assets/goldnecklace.png";
import mercedesRings from "@/assets/mercedesrings.png";
import chinarTops from "@/assets/chinarpatta.png";
import silverChain from "@/assets/silverchainbracelets.png";
import antiqueMangalsutra from "@/assets/antiquemangalsutra.png";
import silverRings from "@/assets/silverrings.png";
import ranihaar from "@/assets/ranihaar.png";
import goldJhumke from "@/assets/goldjhumke.png";

import goldnecklace1 from "@/assets/goldnecklace1.png";
import goldnecklace2 from "@/assets/goldnecklace2.png";
import goldnecklace3 from "@/assets/goldnecklace3.png";

import antiquemangalsutra1 from "@/assets/antiquemangalsutra1.png";
import antiquemangalsutra2 from "@/assets/antiquemangalsutra2.png";

import mercedesrings1 from "@/assets/mercedesrings1.png";
import mercedesrings2 from "@/assets/mercedesrings2.png";

import chinarpatta1 from "@/assets/chinarpatta1.png";
import chinarpatta2 from "@/assets/chinarpatta2.png";

import silverchainbracelets2 from "@/assets/silverchainbracelets2.png";
import silverchainbracelets3 from "@/assets/silverchainbracelets3.png";

import silverrings1 from "@/assets/silverrings1.png";
import silverrings2 from "@/assets/silverrings2.png";
import silverrings3 from "@/assets/silverrings3.png";

import ranihaar1 from "@/assets/ranihaar1.png";
import ranihaar2 from "@/assets/ranihaar2.png";
import ranihaar3 from "@/assets/ranihaar3.png";

import goldjhumke1 from "@/assets/goldjhumke1.png";
import goldjhumke2 from "@/assets/goldjhumke2.png";

const categories = ["All", "Necklaces", "Rings", "Bracelets", "Earrings"];



const designs = [
  {
    id: 1,
    name: "Golden Elegance Necklace",
    category: "Necklaces",
    label: "91.6 hallmark",
    image: goldNecklace,
    images: [goldNecklace, goldnecklace1, goldnecklace2, goldnecklace3],
  },
  {
    id: 2,
    name: "Mercedes Gold Rings",
    category: "Rings",
    label: "2.5 - 3.00 gms",
    image: mercedesRings,
    images: [mercedesRings, mercedesrings1, mercedesrings2],
  },
  {
    id: 3,
    name: "Chinar Patta Tops",
    category: "Earrings",
    label: "Silver",
    image: chinarTops,
    images: [chinarTops, chinarpatta1, chinarpatta2],
  },
  {
    id: 4,
    name: "Silver Chain Bracelets",
    category: "Bracelets",
    label: "Gents Bracelets",
    image: silverChain,
    images: [silverChain, silverchainbracelets2, silverchainbracelets3],
  },
  {
    id: 5,
    name: "Antique Mangalsutra",
    category: "Necklaces",
    label: "100% hallmark gold",
    image: antiqueMangalsutra,
    images: [antiqueMangalsutra, antiquemangalsutra1, antiquemangalsutra2],
  },
  {
    id: 6,
    name: "Silver Adjustable Rings",
    category: "Rings",
    label: "Silver 92.5",
    image: silverRings,
    images: [silverRings, silverrings1, silverrings2, silverrings3],
  },
  {
    id: 7,
    name: "Gold Ranihaar Set",
    category: "Necklaces",
    label: "weight- 30gms silver",
    image: ranihaar,
    images: [ranihaar, ranihaar1, ranihaar2, ranihaar3],
  },
  {
    id: 8,
    name: "Antique Golden Jhumke",
    category: "Earrings",
    label: "91.6 22ct.",
    image: goldJhumke,
    images: [goldJhumke, goldjhumke1, goldjhumke2],
  },
];

export function Designs() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<any>(null);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(true);
  const swipeThreshold = 80; // tweak for sensitivity
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleDoubleTap = (index: number) => {
  setZoomedIndex(prev => (prev === index ? null : index));
};

const handleSwipe = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
  const offset = info.offset.x;
  const velocity = info.velocity.x;

  if (offset < -swipeThreshold || velocity < -500) {
    nextImage();
  } else if (offset > swipeThreshold || velocity > 500) {
    prevImage();
  }
};


  

 // Inside your Designs component...

useEffect(() => {
  if (selected) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return () => { document.body.style.overflow = "unset"; };
}, [selected]);
  const filtered = active === "All" ? designs : designs.filter((d) => d.category === active);
  const nextImage = () => {
  setDirection(1);
  setSelectedIndex((prevIndex) =>
    prevIndex === selected.images.length - 1 ? 0 : prevIndex + 1
  );
};

const prevImage = () => {
  setDirection(-1);
  setSelectedIndex((prevIndex) =>
    prevIndex === 0 ? selected.images.length - 1 : prevIndex - 1
  );
};
 
  return (
    <section id="designs" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* 🔥 HEADING BACK */}
        <div className="mb-16 text-center">
          <h2 className="gold-gradient-text text-4xl font-bold tracking-wide">Our Designs</h2>
          <p className="mt-4 text-muted-foreground tracking-wide">
            "Handcrafted pieces that tell your story"
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelected(item);
                setSelectedIndex(0);
              }}
              className="cursor-pointer rounded-xl overflow-hidden border border-border bg-card 
              transition-all duration-300 hover:scale-105 
              hover:shadow-[0_0_20px_rgba(255,215,0,0.3),0_0_40px_rgba(255,215,0,0.2)]"
            >
              
              <motion.img
        src={item.image}
        layoutId={`main-image-${item.id}`} // Modal wale layoutId se match hona chahiye
        className="h-60 w-full object-cover rounded-xl"
        initial={{ filter: "brightness(1)" }}
        whileHover={{ filter: "brightness(1.15)" }} // Hover par bhi thodi brightness badhegi
        transition={{ duration: 0.3 }}
      />

              <div className="p-4">
                <p className="text-xs text-primary uppercase">{item.category}</p>
                <h3 className="text-white font-semibold">{item.name}</h3>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

    
     <AnimatePresence mode="wait">
  {selected && (
    <motion.div
      key="modal-wrapper"
      className="fixed inset-0 z-[998] flex items-center justify-center p-2 overflow-hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* 🔥 BACKDROP */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { opacity: 0 }
        }}
        onClick={() => setSelected(null)}
      />

      {/* 🔥 MODAL CONTENT */}
      <motion.div
        key="modal-content"
        className="relative z-[999] flex flex-col items-center w-full max-w-5xl"
        style={{ willChange: "transform, opacity" }}
        variants={{
          hidden: { opacity: 0, scale: 0.95, y: 10 },
          visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.05 } 
          },
          exit: { 
            opacity: 0, 
            scale: 0.9, 
            y: 20,
            transition: { duration: 0.2 } 
          }
        }}
      >
        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={() => setSelected(null)}
          className="absolute -top-12 right-2 md:-right-2 h-10 w-10 text-black font-bold rounded-full gold-gradient-bg z-[1001] flex items-center justify-center shadow-lg"
        >
          ✕
        </button>

        {/* 🔥 IMAGES CONTAINER WITH PROGRESS INDICATOR */}
<div className="relative w-full group">
  <div className="flex items-center justify-start md:justify-center gap-3 mt-6 w-full overflow-x-auto md:overflow-visible no-scrollbar [&::-webkit-scrollbar]:hidden [ms-overflow-style:none] [scrollbar-width:none] px-4 py-4 snap-x snap-mandatory">
    {selected.images.map((img: string, i: number) => (
      <motion.div 
        key={`${selected.id}-img-${i}`}
        className="flex-shrink-0 rounded-xl overflow-hidden shadow-2xl border border-white/10 snap-center"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        }}
      >
        <motion.img
          src={img}
          className="w-[44vw] h-[250px] md:w-[220px] md:h-[220px] object-cover"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    ))}
  </div>

  {/* ✨ SCROLLBAR ALTERNATE: Animated Progress Dots */}
  {selected.images.length > 2 && (
    <div className="flex justify-center gap-1.5 mt-2 md:hidden">
      {selected.images.map((_: string, i: number) => (
        <div 
          key={i} 
          className="h-1 w-4 rounded-full bg-white/20 overflow-hidden"
        >
          {/* Ye bar move hota hua dikhega (Optional logic needed for active state) */}
          <div className="h-full bg-gold-gradient w-1/2 opacity-50" />
        </div>
      ))}
    </div>
  )}
</div>

        {/* 🔥 TITLE */}
        <motion.h3 
          className="mt-6 text-white font-semibold text-xl md:text-3xl text-center px-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          {selected.name}
        </motion.h3>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
</div>
    </section>
  );
}
