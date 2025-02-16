"use client";
import { MaterialIcon } from "./material-icon";

export function DownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="https://play.google.com/store/apps/details?id=YOUR_GOOGLE_PLAY_APP_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition hover:scale-105"
      >
        <img 
          src="Google_Play_Store_badge_EN.svg.webp" 
          alt="Get it on Google Play" 
          className="h-12 sm:h-14 object-contain"
        />
      </a>
      <a
        href="https://apps.apple.com/app/YOUR_APP_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto transition hover:scale-105"
      >
        <img 
          src="App-store-badge.svg" 
          alt="Download on the App Store" 
          className="h-12 sm:h-14 object-contain"
        />
      </a>
    </div>
  );
} 