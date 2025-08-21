"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Settings,
  AlertCircle,
  Search,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/ui/navbar";

const servicesData = {
  "Managed Security Services": {
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    color: "blue",
    description:
      "Comprehensive 24/7 security monitoring and management to protect your organization's digital assets.",
    services: [
      {
        title: "Managed Firewall & Network Security",
        description:
          "Deployment and 24/7 monitoring of firewalls and network devices to prevent unauthorized access.",
        available: true,
        href: "/services/managed-security-services#firewall",
      },
      {
        title: "Endpoint Detection & Response (EDR)",
        description:
          "Advanced threat detection and containment for endpoints using behavioral analytics and AI.",
        available: true,
        href: "/services/managed-security-services#edr",
      },
      {
        title: "Managed Detection & Response (MDR)",
        description:
          "Fully integrated solution combining threat detection, incident response, and continuous monitoring.",
        available: true,
        href: "/services/managed-security-services#mdr",
      },
      {
        title: "Managed SOAR",
        description:
          "Security Orchestration, Automation, and Response for streamlined incident workflows.",
        available: true,
        href: "/services/managed-security-services#soar",
      },
      {
        title: "Cloud Security Management",
        description:
          "Proactive monitoring and securing of cloud environments across AWS, Azure, and GCP.",
        available: true,
        href: "/services/managed-security-services#cloud",
      },
      {
        title: "Managed Vulnerability Intelligence",
        description:
          "Continuous identification and prioritization of vulnerabilities based on threat intelligence.",
        available: true,
        href: "/services/managed-security-services#vulnerability",
      },
    ],
  },
  "Professional & Advisory Services": {
    icon: <Settings className="w-6 h-6 text-blue-400" />,
    color: "blue",
    description:
      "Strategic consulting and advisory services to strengthen your security posture and compliance.",
    services: [
      {
        title: "Identity & Access Management",
        description:
          "Managed identity operations, implementation and design for secure access control.",
        available: true,
        href: "/services/advisory#iam",
      },
      {
        title: "Defence Architecture",
        description:
          "Defence in depth, zero trust and security centric architecture for all defense layers.",
        available: true,
        href: "/services/advisory#architecture",
      },
      {
        title: "Governance, Risk & Compliance (GRC)",
        description:
          "Frameworks and consulting to help identify, manage, and mitigate risks while achieving compliance.",
        available: true,
        href: "/services/advisory#grc",
      },
      {
        title: "Security Maturity Assessments",
        description:
          "In-depth evaluations of your cybersecurity posture, identifying strengths and opportunities.",
        available: true,
        href: "/services/advisory#assessments",
      },
    ],
  },
  "Offensive Security & Testing": {
    icon: <AlertCircle className="w-6 h-6 text-blue-400" />,
    color: "blue",
    description:
      "Proactive security testing and assessment services to identify vulnerabilities before attackers do.",
    services: [
      {
        title: "Penetration Testing",
        description:
          "Simulated real-world attacks on networks, applications, and systems to identify vulnerabilities.",
        available: true,
        href: "/services/offensive#pentesting",
      },
      {
        title: "Red Team Assessments",
        description:
          "Full-scope attack simulations that test your organization's detection and response capabilities.",
        available: true,
        href: "/services/offensive#redteam",
      },
      {
        title: "Infrastructure Assessments",
        description:
          "Comprehensive scans and manual analysis of your internal and external IT infrastructure.",
        available: true,
        href: "/services/offensive#infrastructure",
      },
      {
        title: "Compromise Assessments",
        description:
          "Detailed forensic analysis to identify signs of breach or unauthorized access.",
        available: true,
        href: "/services/offensive#compromise",
      },
    ],
  },
  "Threat Intelligence & Incident Response": {
    icon: <Search className="w-6 h-6 text-blue-400" />,
    color: "blue",
    description:
      "Advanced threat intelligence and rapid incident response to minimize impact and recovery time.",
    services: [
      {
        title: "Threat Intelligence Services",
        description:
          "Contextualized and actionable intelligence feeds to understand and mitigate emerging threats.",
        available: true,
        href: "/services/intelligence#threat-intel",
      },
      {
        title: "Cybersecurity Incident Response",
        description:
          "Rapid response services to contain and resolve cybersecurity incidents and breaches.",
        available: true,
        href: "/services/intelligence#incident-response",
      },
      {
        title: "Security Operations Center (SOC) Services",
        description:
          "24/7 monitoring of your infrastructure by skilled analysts using advanced analytics.",
        available: true,
        href: "/services/intelligence#soc",
      },
      {
        title: "Malware Analysis & Forensics",
        description:
          "Reverse engineering and behavioral analysis of malicious software for remediation.",
        available: true,
        href: "/services/intelligence#malware",
      },
    ],
  },
  "Training & Awareness": {
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
    color: "blue",
    description:
      "Comprehensive training programs to build security awareness and technical expertise across your organization.",
    services: [
      {
        title: "Security Awareness Training",
        description:
          "Interactive training modules to help employees recognize and respond to common threats.",
        available: true,
        href: "/services/training#awareness",
      },
      {
        title: "Technical Training Workshops",
        description:
          "Hands-on sessions covering key security skills such as ethical hacking and secure coding.",
        available: true,
        href: "/services/training#technical",
      },
      {
        title: "Executive Security Briefings",
        description:
          "Strategic security briefings for leadership teams on emerging threats and risk management.",
        available: true,
        href: "/services/training#executive",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
              Cybersecurity
              <br />
              <span>Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cybersecurity solutions designed to protect your
              organization against evolving threats and ensure business
              continuity.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(servicesData).map(([category, data]) => (
              <div
                key={category}
                className="group border border-gray-800 p-6 transition-all duration-300 hover:border-blue-400/30 hover:bg-gray-900/20"
              >
                <div className="flex items-center mb-4">
                  {data.icon}
                  <h3 className="text-xl font-medium text-white ml-3">
                    {category}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {data.description}
                </p>

                <div className="space-y-3 mb-6">
                  {data.services.slice(0, 3).map((service, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{service.title}</span>
                    </div>
                  ))}
                  {data.services.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{data.services.length - 3} more services
                    </div>
                  )}
                </div>

                <Link
                  href={`/services/${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/&/g, "and")}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
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
