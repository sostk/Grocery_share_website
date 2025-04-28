"use client";
import Image from "next/image";

export function DownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="https://play.google.com/store/apps/details?id=com.easylife.groceryshare"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition hover:scale-105"
      >
        <Image 
          src="/Google_Play_Store_badge_EN.svg.webp" 
          alt="Get it on Google Play" 
          width={180}
          height={70}
          className="h-12 sm:h-14 object-contain"
        />
      </a>
      <a
        href="https://apps.apple.com/us/app/grocery-share/id6744265823"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition hover:scale-105"
      >
        <Image 
          src="/App-store-badge.svg" 
          alt="Download on the App Store" 
          width={180}
          height={70}
          className="h-12 sm:h-14 object-contain"
        />
      </a>
    </div>
  );
} 
