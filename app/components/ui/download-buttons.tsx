"use client";
import Image from "next/image";

export function DownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="https://play.google.com/store/apps/details?id=YOUR_GOOGLE_PLAY_APP_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition hover:scale-105"
      >
        <Image 
          src="/google-play.svg" 
          alt="Get it on Google Play" 
          width={180}
          height={70}
          className="h-12 sm:h-14 object-contain"
        />
      </a>
      <a
        href="https://apps.apple.com/app/YOUR_APP_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition hover:scale-105"
      >
        <Image 
          src="/app-store.svg" 
          alt="Download on the App Store" 
          width={180}
          height={70}
          className="h-12 sm:h-14 object-contain"
        />
      </a>
    </div>
  );
} 