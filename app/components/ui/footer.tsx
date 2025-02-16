import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 section-spacing border-t border-gray-100">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Grocery Share</h3>
            <p className="text-gray-600">
              Making grocery shopping simpler and more collaborative.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/#features" 
                  className="text-gray-600 hover:text-primary transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="/how-to" 
                  className="text-gray-600 hover:text-primary transition"
                >
                  How To
                </Link>
              </li>
              <li>
                <Link 
                  href="/#download" 
                  className="text-gray-600 hover:text-primary transition"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-600 hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-600 hover:text-primary transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">support@groceryshare.app</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Grocery Share. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 