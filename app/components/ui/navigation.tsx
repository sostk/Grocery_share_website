"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navigation() {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Grocery Share Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">Grocery Share</span>
          </Link>
          <div className="flex items-center space-x-6">
            {isHomePage ? (
              <Link 
                href="#features" 
                className="text-gray-600 hover:text-gray-900 transition duration-200"
              >
                Features
              </Link>
            ) : (
              <Link 
                href="/#features" 
                className="text-gray-600 hover:text-gray-900 transition duration-200"
              >
                Features
              </Link>
            )}
            
            <Link 
              href="/how-to" 
              className="text-gray-600 hover:text-gray-900 transition duration-200"
            >
              How To
            </Link>
            
            {isHomePage ? (
              <Link 
                href="#download" 
                className="text-gray-600 hover:text-gray-900 transition duration-200"
              >
                Download
              </Link>
            ) : (
              <Link 
                href="/#download" 
                className="text-gray-600 hover:text-gray-900 transition duration-200"
              >
                Download
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 