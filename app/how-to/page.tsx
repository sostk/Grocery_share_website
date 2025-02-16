"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MaterialIcon } from "../components/ui/material-icon";
import { Navigation } from "../components/ui/navigation";
import { Footer } from "../components/ui/footer";

export default function HowToPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const steps = [
    {
      title: "Create an Account",
      description: "Sign up using your email or social media accounts. It's quick and easy!",
      icon: "account_circle",
      video: "/how-to-videos/create-account.mp4"
    },
    {
      title: "Create Your Households from Manage HouseHolds Screen",
      description: "Tap the '+' button to create a new Household. Give it a name.",
      icon: "house",
      video: "/how-to-videos/create-household.mp4"
    },
    {
      title: "Create Your First List",
      description: "Tap the '+' button to create a new grocery list. Give it a name and start adding items.",
      icon: "add_shopping_cart",
      video: "/how-to-videos/create-list.mp4"
    },
    {
      title: "Invite Collaborators",
      description: "Share your list with family or roommates by sending an invite link. Go to Manage HouseHolds",
      icon: "group_add",
      video: "/how-to-videos/invite-collaborators.mp4"
    },
    {
      title: "Track and Update",
      description: "Mark items as you shop. Everyone can see real-time updates.",
      icon: "checklist",
      video: "/how-to-videos/track-update.mp4"
    },
  ];

  const VideoModal = () => {
    if (!selectedVideo) return null;

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={() => setSelectedVideo(null)}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="relative w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition z-10"
          >
            <MaterialIcon name="close" className="text-3xl" />
          </button>
          <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
            <video 
              src={selectedVideo}
              controls
              autoPlay
              playsInline
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">
          How to Use <span className="gradient-text">Grocery Share</span>
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <MaterialIcon 
                    name={step.icon} 
                    className="text-4xl text-primary" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center space-y-4">
                <button
                  onClick={() => setSelectedVideo(step.video)}
                  className="inline-flex items-center px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
                >
                  <MaterialIcon name="play_circle" className="mr-2" />
                  Watch Video
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />

      <AnimatePresence>
        {selectedVideo && <VideoModal />}
      </AnimatePresence>
    </div>
  );
} 