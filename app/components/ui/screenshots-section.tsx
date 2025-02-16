"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function ScreenshotsSection() {
  const screenshots = [
    { 
      src: "/screenshots/screenshot1.jpg", 
      alt: "Grocery List Screen",
      title: "Create Grocery Lists",
      description: "Easily create and manage your shopping lists"
    },
    { 
      src: "/screenshots/screenshot3.jpg", 
      alt: "Add Items",
      title: "Add Items to List",
      description: "Add Items Easily"
    },
    { 
      src: "/screenshots/screenshot2.jpg", 
      alt: "Household Management",
      title: "household Management",
      description: "Manage Your Households"
    },
    { 
      src: "/screenshots/screenshot4.jpg", 
      alt: "Invite Members",
      title: "Invite Memebrs",
      description: "Collaborate and coordinate your grocery runs"
    },

  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          App <span className="gradient-text">Screenshots</span>
        </h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 min-w-max md:min-w-0">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-shrink-0 w-64 md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
              >
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {screenshot.description}
                  </p>
                </div>
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={300}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 