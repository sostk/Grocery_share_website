"use client";
import { motion } from "framer-motion";
import { MaterialIcon } from "./material-icon";
import { BackgroundGradient } from "./background-gradient";

const features = [
  {
    icon: "group",
    title: "Family Sharing",
    description: "Share your grocery lists with family members and roommates in real-time.",
    gradient: "from-green-100 via-green-50 to-transparent"
  },
  {
    icon: "sync",
    title: "Real-time Sync",
    description: "Changes sync instantly across all devices, keeping everyone up to date.",
    gradient: "from-blue-100 via-blue-50 to-transparent"
  },
  {
    icon: "category",
    title: "Smart Categories",
    description: "Automatically organize items by category for efficient shopping.",
    gradient: "from-purple-100 via-purple-50 to-transparent"
  },
  {
    icon: "savings",
    title: "Price Tracking",
    description: "Track prices over time and get notified of the best deals.",
    gradient: "from-orange-100 via-orange-50 to-transparent"
  },
  {
    icon: "local_mall",
    title: "Store Layouts",
    description: "Optimize your shopping route with store-specific item locations.",
    gradient: "from-teal-100 via-teal-50 to-transparent"
  },
  {
    icon: "notifications",
    title: "Smart Reminders",
    description: "Get notified when items are running low or when it's time to shop.",
    gradient: "from-pink-100 via-pink-50 to-transparent"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative section-spacing overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to manage your grocery shopping efficiently
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BackgroundGradient className="p-8 rounded-2xl h-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-xl mb-4 w-14 h-14 flex items-center justify-center`}>
                  <MaterialIcon name={feature.icon} className="text-gray-900 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 