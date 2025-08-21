"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Monitor,
  Zap,
  Cloud,
  Search,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Lock,
} from "lucide-react";
import Navbar from "@/components/ui/navbar";

const managedServices = [
  {
    id: "firewall",
    label: "Firewall",
    title: "Managed Firewall & Network Security",
    icon: <Lock className="w-8 h-8 text-blue-400" />,
    description:
      "Comprehensive firewall and network security management to protect your infrastructure from external threats.",
    features: [
      "24/7 firewall monitoring and management",
      "Advanced threat detection and prevention",
      "Network traffic analysis and optimization",
      "Regular security rule updates and maintenance",
      "Incident response and threat containment",
      "Compliance reporting and documentation",
    ],
    benefits: [
      "Reduced risk of network breaches",
      "Improved network performance",
      "Compliance with security standards",
      "Expert security team support",
    ],
  },
  {
    id: "edr",
    label: "EDR",
    title: "Endpoint Detection & Response (EDR)",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    description:
      "Advanced endpoint protection with real-time threat detection, investigation, and response capabilities.",
    features: [
      "Real-time endpoint monitoring and analysis",
      "Behavioral threat detection using AI/ML",
      "Automated threat containment and remediation",
      "Forensic investigation capabilities",
      "Threat hunting and intelligence integration",
      "Comprehensive endpoint visibility",
    ],
    benefits: [
      "Proactive threat detection and response",
      "Reduced incident response time",
      "Enhanced endpoint security posture",
      "Improved threat intelligence",
    ],
  },
  {
    id: "mdr",
    label: "MDR",
    title: "Managed Detection & Response (MDR)",
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    description:
      "Fully managed security operations center (SOC) services providing comprehensive threat detection and response.",
    features: [
      "24/7 security monitoring and alerting",
      "Expert security analysts and threat hunters",
      "Advanced SIEM and analytics platform",
      "Threat intelligence integration",
      "Incident response and remediation",
      "Regular security reporting and insights",
    ],
    benefits: [
      "Enterprise-grade security without the overhead",
      "Expert security team available 24/7",
      "Faster threat detection and response",
      "Reduced security operations costs",
    ],
  },
  {
    id: "soar",
    label: "SOAR",
    title: "Managed SOAR",
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    description:
      "Security Orchestration, Automation, and Response platform to streamline security operations and reduce response times.",
    features: [
      "Automated incident response workflows",
      "Security tool integration and orchestration",
      "Custom playbook development and deployment",
      "Threat intelligence automation",
      "Case management and collaboration tools",
      "Performance analytics and optimization",
    ],
    benefits: [
      "Faster incident response times",
      "Reduced manual security tasks",
      "Improved team collaboration",
      "Enhanced security operations efficiency",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    title: "Cloud Security Management",
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    description:
      "Comprehensive cloud security management across AWS, Azure, and GCP environments.",
    features: [
      "Multi-cloud security monitoring",
      "Cloud configuration auditing and compliance",
      "Identity and access management (IAM)",
      "Data protection and encryption",
      "Cloud-native threat detection",
      "Compliance reporting for cloud environments",
    ],
    benefits: [
      "Unified cloud security management",
      "Reduced cloud security risks",
      "Compliance with cloud security standards",
      "Optimized cloud security costs",
    ],
  },
  {
    id: "vulnerability",
    label: "Vuln Intel",
    title: "Managed Vulnerability Intelligence",
    icon: <Search className="w-8 h-8 text-blue-400" />,
    description:
      "Continuous vulnerability assessment and management with threat intelligence integration.",
    features: [
      "Automated vulnerability scanning and assessment",
      "Threat intelligence-driven prioritization",
      "Risk-based vulnerability management",
      "Remediation guidance and tracking",
      "Compliance reporting and documentation",
      "Integration with existing security tools",
    ],
    benefits: [
      "Proactive vulnerability management",
      "Reduced attack surface",
      "Improved security posture",
      "Compliance with security standards",
    ],
  },
];

export default function ManagedSecurityServicesPage() {
  const [activeService, setActiveService] = useState("firewall");

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text Content */}
            <div>
              <div className="flex items-center mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight">
                  Managed Security
                  <br />
                  <span>Services</span>
                </h1>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Comprehensive 24/7 security monitoring and management services
                to protect your organization&apos;s digital assets and ensure
                business continuity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#1C0AA3] hover:bg-[#1C0AA3]/80 text-white font-medium transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/AdobeStock1.jpeg.jpg"
                  alt="Cybersecurity Operations Center"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Service Navigation */}
          <div
            id="services"
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {managedServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-5 py-2.5 font-medium transition-colors duration-200 border ${
                  activeService === service.id
                    ? "bg-[#1C0AA3] border-[#1C0AA3] text-white"
                    : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Unified content container with animated tabs */}
          <div className="border border-gray-800 p-6">
            <AnimatePresence mode="wait">
              {managedServices
                .filter((s) => s.id === activeService)
                .map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start mb-6">
                      {service.icon}
                      <div className="ml-4">
                        <h2 className="text-2xl md:text-3xl font-medium text-white">
                          {service.title}
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed mt-2">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium text-white mb-3">
                          What’s included
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm md:text-base">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-3">
                          Outcomes
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm md:text-base">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center border border-gray-800 p-12">
          <h2 className="text-3xl font-medium text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get in touch with our cybersecurity experts to discuss how we can
            protect your organization from today&apos;s evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-[#1C0AA3] hover:bg-[#1C0AA3]/80 text-white font-medium transition-all duration-200"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium transition-all duration-200"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
