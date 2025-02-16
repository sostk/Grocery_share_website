"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./background-beams";
import { TypewriterEffect } from "./typewriter-effect";
import { SparklesCore } from "./sparkles";
import { DownloadButtons } from "./download-buttons";
import { SpotlightNew } from "./spotlight-new";
import { FloatingIcons } from "./floating-icons";

export function HeroSection() {
  const words = [
    {
      text: "Simplify",
      className: "text-green-500",
    },
    {
      text: "Your",
      className: "text-blue-500",
    },
    {
      text: "Grocery",
      className: "text-violet-500",
    },
    {
      text: "Shopping",
      className: "text-red-500",
    },
  ];

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <SpotlightNew 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(142, 100%, 85%, .12) 0, hsla(142, 100%, 55%, .05) 50%, hsla(142, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(142, 100%, 85%, .08) 0, hsla(142, 100%, 55%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(142, 100%, 85%, .06) 0, hsla(142, 100%, 45%, .03) 80%, transparent 100%)"
      />
      
      <FloatingIcons />
      
      <div className="w-full absolute inset-0 h-screen opacity-40">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#22c55e"
        />
      </div>

      {/* Banner Message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 text-center shadow-md"
      >
        <p className="text-sm md:text-base font-medium">
          🎉 New Version Available! Get 3 months free premium with code: <span className="font-bold">GROCERY2024</span>
        </p>
      </motion.div>

      <div className="relative z-10 w-full section-spacing">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col items-center text-center gap-12">
            <div className="max-w-3xl">
              <div className="mb-10">
                <TypewriterEffect words={words} />
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Share lists, track items, and never forget groceries again. Perfect for families and roommates.
              </motion.p>
              
              {/* Download Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center gap-8"
              >
                <DownloadButtons />

                {/* Rating & Reviews */}
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700">4.8/5 from 1,000+ reviews</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}

function FeatureHighlight({ icon, text, position }: { icon: string; text: string; position: 'left' | 'right' }) {
  return (
    <div className={`hidden md:flex items-center gap-2 ${position === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
      <span className="material-icons text-white/80">
        {icon}
      </span>
      <span className="text-sm text-white/80">{text}</span>
    </div>
  );
} 