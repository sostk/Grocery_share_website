"use client";
import { BackgroundGradient } from "./background-gradient";
import Image from "next/image";

export function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Download <span className="gradient-text">Grocery Share</span> Today
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <BackgroundGradient className="rounded-2xl p-4 sm:p-10 bg-white">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Google_Play_Store_badge_EN.svg.webp"
                alt="Google Play Store"
                width={180}
                height={70}
                className="mb-6 object-contain"
              />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Android Users</h3>
              <p className="text-gray-600 mb-6">
                Get it on Google Play Store
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.easylife.groceryshare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg glass-button transition"
              >
                Download Now
              </a>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-2xl p-4 sm:p-10 bg-white">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/App-store-badge.svg"
                alt="App Store"
                width={180}
                height={70}
                className="mb-6 object-contain"
              />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">iOS Users</h3>
              <p className="text-gray-600 mb-6">
                Get it on the App Store
              </p>
              <a
                href="https://apps.apple.com/app/id6744265823"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg glass-button transition"
              >
                Download Now
              </a>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
} 
