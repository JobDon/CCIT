"use client";
// Services Page – Command Centre IT Ltd.

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShieldCheck, Settings, AlertCircle, Search, GraduationCap } from "lucide-react";

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function ServicesPage() {
  const sections = [
    { title: "Managed Security Services", icon: <ShieldCheck className="inline-block w-5 h-5 mr-2 text-blue-400" aria-hidden="true" /> },
    { title: "Professional & Advisory Services", icon: <Settings className="inline-block w-5 h-5 mr-2 text-green-400" aria-hidden="true" /> },
    { title: "Offensive Security & Testing", icon: <AlertCircle className="inline-block w-5 h-5 mr-2 text-red-400" aria-hidden="true" /> },
    { title: "Threat Intelligence & Incident Response", icon: <Search className="inline-block w-5 h-5 mr-2 text-yellow-400" aria-hidden="true" /> },
    { title: "Training & Awareness", icon: <GraduationCap className="inline-block w-5 h-5 mr-2 text-purple-400" aria-hidden="true" /> },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col scroll-smooth">
      {/* Header with Logo */}
      <header className="relative flex items-center gap-4 p-4 bg-gray-900 border-b border-gray-800">
        <button
          className="lg:hidden bg-gray-800 text-white px-4 py-2 rounded shadow"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-expanded={sidebarOpen}
          aria-controls="services-sidebar"
        >
          {sidebarOpen ? "Close Menu" : "Menu"}
        </button>

        <Link href="/" className="inline-flex items-center">
          <Image src="/logo.svg" alt="Command Centre IT" width={120} height={40} />
        </Link>

        <h1 className="text-xl font-semibold">Our Services</h1>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          id="services-sidebar"
          className={`fixed z-20 lg:static bg-gray-950 lg:bg-transparent w-64 px-6 py-8 border-r border-gray-800 lg:block transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <h2 className="text-xl font-bold mb-6">Navigate Services</h2>
          <ul className="space-y-4">
            {sections.map(({ title, icon }) => (
              <li key={title}>
                <a
                  href={`#${slugify(title)}`}
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                  onClick={() => setSidebarOpen(false)}
                >
                  {icon} {title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 py-12 max-w-5xl mx-auto lg:ml-0">
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            At Command Centre IT Ltd., we provide a full spectrum of cybersecurity services designed to protect your organization against evolving threats.
          </p>

          {sections.map(({ title, icon }) => (
            <Section
              key={title}
              id={slugify(title)}
              title={title}
              icon={icon}
              items={getSectionItems(title)}
            />
          ))}

          <div className="text-center mt-12 text-gray-400">
            <p>
              Need tailored support?{" "}
              <Link href="/contact" className="underline text-blue-500 hover:text-blue-400">
                Contact us
              </Link>{" "}
              or email{" "}
              <a
                href="mailto:contact@commandcentre.it"
                className="underline text-blue-500 hover:text-blue-400"
              >
                contact@commandcentre.it
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

function Section({ id, title, icon, items }) {
  return (
    <section id={id} className="scroll-mt-24 mt-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2 flex items-center">
        {icon} {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(([name, desc]) => (
          <Card key={name} className="bg-gray-900 border border-gray-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
              <p className="text-sm text-gray-300">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// original data map unchanged
function getSectionItems(title) {
  const sectionsMap = {
    "Managed Security Services": [
      ["Managed Firewall & Network Security", "Deployment and 24/7 monitoring of firewalls and network devices to prevent unauthorized access, detect anomalies, and secure your network perimeter."],
      ["Endpoint Detection & Response (EDR)", "Advanced threat detection and containment for endpoints using behavioral analytics, AI, and real-time response mechanisms."],
      ["Managed Detection & Response (MDR)", "A fully integrated solution combining threat detection, incident response, and continuous monitoring from our expert security operations center (SOC)."],
      ["Managed SOAR", "Security Orchestration, Automation, and Response for streamlined incident workflows and reduced response times through automated playbooks."],
      ["Cloud Security Management", "Proactive monitoring and securing of cloud environments across AWS, Azure, and GCP, including configuration auditing and threat detection."],
      ["Managed Vulnerability Intelligence", "Continuous identification and prioritization of vulnerabilities based on threat intelligence and asset criticality."],
      ["Managed Compliance Monitoring", "Automated compliance tracking for GDPR, ISO 27001, NIST, and other regulatory frameworks with customizable alerts."],
      ["Secure Access Service Edge (SASE)", "Modern edge-to-cloud security that integrates networking and security services in a unified cloud-native platform."]
    ],
    "Professional & Advisory Services": [
      ["Identity & Access Management", "Managed identity operations, implementation and design."],
      ["Defence Architecture", "Defence in depth, zero trust and security centric architecture for all defense layers."],
      ["Governance, Risk & Compliance (GRC)", "Frameworks and consulting to help identify, manage, and mitigate risks while achieving regulatory compliance."],
      ["Security Maturity Assessments", "In-depth evaluations of your cybersecurity posture, identifying strengths and opportunities for growth."],
      ["Cloud Security Assessments", "Thorough review of your cloud configurations and architecture to ensure data protection and compliance."],
      ["Subject Matter Experts", "Your point of contact for expertise, advice and knowledge on many different aspects of security."]
    ],
    "Offensive Security & Testing": [
      ["Penetration Testing", "Simulated real-world attacks on networks, applications, and systems to identify exploitable vulnerabilities."],
      ["Red Team Assessments", "Full-scope attack simulations that test your organization’s detection and response capabilities against APT-style threats."],
      ["Infrastructure Assessments", "Comprehensive scans and manual analysis of your internal and external IT infrastructure."],
      ["Compromise Assessments", "Detailed forensic analysis to identify signs of breach or unauthorized access across your environment."]
    ],
    "Threat Intelligence & Incident Response": [
      ["Threat Intelligence Services", "Contextualized and actionable intelligence feeds to understand and mitigate adversary behavior and emerging threats."],
      ["Cybersecurity Incident Response", "Rapid response services to contain and resolve cybersecurity incidents and breaches with minimal impact."],
      ["Security Operations Center (SOC) Services", "24/7 monitoring of your infrastructure by skilled analysts using advanced analytics and threat intelligence."],
      ["Malware Analysis & Forensics", "Reverse engineering and behavioral analysis of malicious software to determine origin, capabilities, and remediation strategies."]
    ],
    "Training & Awareness": [
      ["Security Awareness Training", "Interactive and engaging training modules designed to help employees recognize and respond to common threats like phishing and social engineering."],
      ["Technical Training Workshops", "Hands-on sessions covering key security skills such as ethical hacking, malware analysis, and secure coding."]
    ]
  };
  return sectionsMap[title] || [];
}
