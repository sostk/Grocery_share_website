"use client";
import { HoverEffect } from "../ui/card-hover-effect";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

export function FeatureSection() {
  const features = [
    {
      title: "Real-time Sync",
      description: "Lists update instantly across all devices, ensuring everyone stays on the same page.",
      icon: "sync",
    },
    {
      title: "Smart Lists",
      description: "Organize items by category and store, making shopping more efficient than ever.",
      icon: "list",
    },
    {
      title: "Family Sharing",
      description: "Invite family members to collaborate on lists and share shopping responsibilities.",
      icon: "group",
    },
    {
      title: "Secure",
      description: "Protected with biometric authentication to keep your data safe and private.",
      icon: "security",
    },
  ];

  const content = [
    {
      title: "Smart Organization",
      description: "Categorize your items automatically and create smart shopping lists that adapt to your needs.",
    },
    {
      title: "Collaborative Shopping",
      description: "Share lists with family members and update in real-time as items are purchased.",
    },
    {
      title: "Budget Tracking",
      description: "Keep track of your grocery spending and stay within your budget with our smart features.",
    },
    {
      title: "Store Integration",
      description: "Connect with your favorite stores and get real-time prices and availability updates.",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Grocery Share?
          </h2>
          <HoverEffect items={features} />
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StickyScroll content={content} />
        </div>
      </section>
    </>
  );
} 