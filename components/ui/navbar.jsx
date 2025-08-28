import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from "lucide-react";

const servicesDropdownItems = [
  {
    category: "Managed Security Services",
    available: true,
    href: "/services/managed-security-services",
    icon: "🛡️",
    items: [
      {
        title: "Managed Security Operations",
        href: "/services/managed-security-services#soc",
        available: true,
      },
      {
        title: "Managed Detection & Response (MDR)",
        href: "/services/managed-security-services#mdr",
        available: true,
      },
      {
        title: "Managed Incident Response",
        href: "/services/managed-security-services#mir",
        available: true,
      },
      {
        title: "Managed Identity & Access Security",
        href: "/services/managed-security-services#mir",
        available: true,
      },
    ],
  },
  {
    category: "Professional & Advisory Services",
    available: true,
    href: "/services#professional-advisory-services",
    icon: "👥",
    items: [
      {
        title: "Defence Architecture & Engineering",
        href: "/services#design",
        available: true,
      },
      {
        title: "Identity & Access Management",
        href: "/services#iam",
        available: true,
      },
      {
        title: "Governance, Risk & Compliance (GRC)",
        href: "/services#grc",
        available: true,
      },
      {
        title: "Security Assessments",
        href: "/services#assessments",
        available: true,
      },
    ],
  },
  {
    category: "Training & Awareness",
    available: true,
    href: "/services#training-awareness",
    icon: "🎓",
    items: [
      {
        title: "Security Awareness Training",
        href: "/services#awareness",
        available: true,
      },
      {
        title: "Technical Training Workshops",
        href: "/services#technical",
        available: true,
      },
    ],
  },
];

export default function Navbar() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        const dropdownContent = document.querySelector(".dropdown-content");
        if (!dropdownContent || !dropdownContent.contains(event.target)) {
          setServicesDropdownOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServicesClick = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <>
      {/* Main Navbar - Full Width */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg"
            : "bg-black border-b border-gray-800"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Command Centre IT"
                width={200}
                height={200}
                className="hover:opacity-90 transition-opacity duration-200"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center px-4 py-2 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-900/50  transition-all duration-200 group"
                  onClick={handleServicesClick}
                >
                  Services
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <Link
                href="/about"
                className="px-4 py-2 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-900/50  transition-all duration-200"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-900/50  transition-all duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#1C0AA3] hover:bg-gray-900/50  transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-800/50  transition-all duration-200"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="mt-2 space-y-3">
                    {servicesDropdownItems.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="pl-4">
                        <div
                          className={`flex items-center space-x-2 px-3 py-2  ${
                            category.available ? "text-white" : "text-gray-500"
                          }`}
                        >
                          <ChevronRight />
                          <span className="text-sm">{category.icon}</span>
                          <span className="font-medium text-sm">
                            {category.category}
                          </span>
                          {!category.available && (
                            <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1">
                              Soon
                            </span>
                          )}
                        </div>
                        <div className="ml-4 mt-1 space-y-1">
                          {category.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.available ? item.href : "#"}
                              className={`block px-3 py-2  text-sm transition-all duration-200 ${
                                item.available
                                  ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                                  : "text-gray-500 cursor-not-allowed"
                              }`}
                              onClick={
                                item.available
                                  ? () => setMobileMenuOpen(false)
                                  : (e) => e.preventDefault()
                              }
                            >
                              <div className="flex items-center justify-between">
                                <span>{item.title}</span>
                                {!item.available && (
                                  <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1">
                                    Soon
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-4 py-3 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-800/50  transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-3 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-800/50  transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Mega Menu Dropdown */}
      {servicesDropdownOpen && (
        <>
          {/* Blurred background overlay */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 hidden lg:block" />

          {/* Dropdown container without side padding */}
          <div className="dropdown-content fixed top-16 lg:top-18 left-0 right-0 z-40 hidden lg:block">
            <div className="max-w-6xl mx-auto">
              <div className="bg-black border border-gray-800 shadow-2xl">
                <div className="flex justify-center">
                  <div className="w-full flex">
                    {/* Left Sidebar - Categories */}
                    <div className="w-64 border-r border-gray-800">
                      {/* <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3 px-3">
                         Security Services
                       </h3> */}
                      <div className="space-y-1">
                        {servicesDropdownItems.map((category, index) => (
                          <div
                            key={index}
                            className={`group cursor-pointer p-5 transition-all duration-200 ${
                              selectedCategory === index
                                ? "border border-[#1C0AA3]"
                                : "hover:bg-gray-900 border border-transparent"
                            } ${!category.available ? "opacity-60" : ""}`}
                            onClick={() => setSelectedCategory(index)}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4
                                  className={`font-medium text-xs ${
                                    selectedCategory === index
                                      ? "text-white"
                                      : "text-white"
                                  } transition-colors duration-200`}
                                >
                                  {category.category}
                                </h4>
                              </div>
                              <div className="flex flex-col items-end space-y-1">
                                {!category.available && (
                                  <span className="text-xs bg-gray-800 text-gray-400 px-1.5 py-0.5">
                                    Soon
                                  </span>
                                )}
                                <ChevronRight
                                  className={`w-3 h-3 transition-all duration-200 ${
                                    selectedCategory === index
                                      ? "text-white"
                                      : "text-gray-500"
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Content - Service Items */}
                    <div className="flex-1 p-4">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-semibold text-white">
                            {servicesDropdownItems[selectedCategory]?.category}
                          </h3>
                          {!servicesDropdownItems[selectedCategory]
                            ?.available && (
                            <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <div className="h-px bg-gray-800  "></div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {servicesDropdownItems[selectedCategory]?.items.map(
                          (item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.available ? item.href : "#"}
                              className={`group p-3 transition-all duration-200 ${
                                item.available
                                  ? "hover:border-[#1C0AA3]"
                                  : "border-gray-800/50 cursor-not-allowed"
                              }`}
                              onClick={
                                !item.available
                                  ? (e) => e.preventDefault()
                                  : () => setServicesDropdownOpen(false)
                              }
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1 flex items-center gap-2 hover:text-[#1C0AA3]">
                                  <h4
                                    className={`font-medium text-xs mb-1 ${
                                      item.available
                                        ? "text-white group-hover:text-[#1C0AA3]"
                                        : "text-gray-500"
                                    } transition-colors duration-200`}
                                  >
                                    {item.title}
                                  </h4>
                                  <ChevronRight className={`w-4 h-4`} />
                                </div>
                                {!item.available && (
                                  <span className="text-xs bg-gray-800 text-gray-400 px-1.5 py-0.5 flex-shrink-0 ml-2">
                                    Soon
                                  </span>
                                )}
                              </div>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-18"></div>
    </>
  );
}
