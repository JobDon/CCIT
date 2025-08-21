import Link from "next/link";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";
import Navbar from "@/components/ui/navbar";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 border-2 border-[#1C0AA3] rounded-full flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-[#1C0AA3]" />
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-6xl md:text-8xl font-medium text-white mb-4">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
            Page Not Found
          </h2>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let us help you find what you&apos;re looking for.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#1C0AA3] hover:bg-[#1C0AA3]/80 text-white font-medium transition-all duration-200"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 hover:border-gray-500 text-white font-medium transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              View Services
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 border border-gray-800">
            <h3 className="text-lg font-medium text-white mb-3">Need Help?</h3>
            <p className="text-gray-400 mb-4">
              If you&apos;re looking for a specific service or page, try:
            </p>
            <ul className="text-left text-gray-400 space-y-2">
              <li>
                •{" "}
                <Link
                  href="/services"
                  className="text-[#1C0AA3] hover:underline"
                >
                  Our Services
                </Link>
              </li>
              <li>
                •{" "}
                <Link href="/about" className="text-[#1C0AA3] hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                •{" "}
                <Link
                  href="/contact"
                  className="text-[#1C0AA3] hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
