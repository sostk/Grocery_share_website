"use client";
import { motion } from "framer-motion";
import { MaterialIcon } from "./material-icon";
import { useEffect, useState } from "react";

const groceryIcons = [
  { icon: "shopping_cart", color: "text-green-400", size: "text-4xl" },
  { icon: "local_pizza", color: "text-orange-400", size: "text-3xl" },
  { icon: "local_cafe", color: "text-yellow-400", size: "text-2xl" },
  { icon: "egg", color: "text-blue-400", size: "text-4xl" },
  { icon: "lunch_dining", color: "text-red-400", size: "text-3xl" },
  { icon: "restaurant", color: "text-purple-400", size: "text-2xl" },
  { icon: "local_bar", color: "text-pink-400", size: "text-3xl" },
  { icon: "bakery_dining", color: "text-amber-400", size: "text-4xl" },
  { icon: "icecream", color: "text-teal-400", size: "text-2xl" },
];

export function FloatingIcons() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setMounted(true);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {groceryIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            opacity: 0,
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <MaterialIcon
            name={item.icon}
            className={`${item.color} ${item.size} opacity-30`}
          />
        </motion.div>
      ))}
    </div>
  );
} 