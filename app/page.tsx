import { HeroSection } from "./components/ui/hero-section";
import { FeaturesSection } from "./components/ui/features-section";
import { DownloadSection } from "./components/ui/download-section";
import { Footer } from "./components/ui/footer";
import { Navigation } from "./components/ui/navigation";
import { ScreenshotsSection } from "./components/ui/screenshots-section";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <DownloadSection />
      
      {/* How To Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            New to <span className="gradient-text">Grocery Share</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn how to make the most of our app with our step-by-step guide.
          </p>
          <Link 
            href="/how-to"
            className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            View How To Guide
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
