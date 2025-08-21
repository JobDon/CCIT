import {
  Shield,
  Users,
  Clock,
  Target,
  Award,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { number: "2022", label: "Founded" },
    { number: "24/7", label: "Monitoring" },
    { number: "100%", label: "Uptime Goal" },
    { number: "< 15min", label: "Response Time" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every decision we make is guided by security best practices and industry standards.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "We build bespoke solutions tailored to each client&apos;s unique security requirements.",
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description:
        "Our 24/7 monitoring and incident response team ensures threats are neutralized quickly.",
    },
    {
      icon: Target,
      title: "Proactive Defense",
      description:
        "We don&apos;t just respond to threats - we anticipate and prevent them before they impact you.",
    },
  ];

  const services = [
    "Managed Security Operations Center (SOC)",
    "24/7 Threat Monitoring & Detection",
    "Incident Response & Forensics",
    "Vulnerability Assessment & Management",
    "Security Compliance & Consulting",
    "Employee Security Training",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-6">
            About Command Centre IT
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your trusted cybersecurity partner since 2022, delivering advanced
            cyber defence solutions in an ever-evolving digital landscape.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 border border-gray-800">
              <div className="text-2xl md:text-3xl font-medium text-[#1C0AA3] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2022, Command Centre IT Ltd. was built to meet the
                  growing demand for advanced cyber defence in a volatile
                  digital world. As cyber threats became more sophisticated and
                  frequent, we recognized the critical need for proactive,
                  intelligent security solutions.
                </p>
                <p>
                  We specialize in both proactive and reactive cyber operations,
                  providing our clients with comprehensive protection that
                  evolves with the threat landscape. Our mission is to empower
                  organizations with real-time visibility, robust defence
                  architectures, and rapid incident response capabilities.
                </p>
                <p>
                  Whether you&apos;re a small business taking your first steps into
                  cybersecurity or a large enterprise seeking to enhance your
                  existing defenses, we build bespoke solutions to protect what
                  matters most to your organization.
                </p>
              </div>
            </div>
            <div className="border border-gray-800 p-8">
              <h3 className="text-xl font-medium text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 mb-6">
                To provide world-class cybersecurity services that enable
                businesses to operate confidently in the digital age, knowing
                their critical assets are protected by cutting-edge technology
                and expert analysis.
              </p>
              <Link
                href="/services"
                className="flex items-center text-[#1C0AA3] font-medium"
              >
                <span>Learn about our services</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These principles guide everything we do and ensure we deliver the
            highest quality cybersecurity services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="p-6 border border-gray-800 hover:border-[#1C0AA3]/30 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C0AA3]/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#1C0AA3]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-medium text-white mb-6">
                What We Do
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We provide comprehensive cybersecurity services designed to
                protect your organization from evolving threats. Our approach
                combines cutting-edge technology with human expertise to deliver
                unmatched security coverage.
              </p>

              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#1C0AA3] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-800 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-[#1C0AA3]" />
                <h3 className="text-xl font-medium text-white">
                  Why Choose Us?
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-1">Expert Team</h4>
                  <p className="text-gray-400 text-sm">
                    Certified cybersecurity professionals with years of
                    experience in threat detection and response.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-1">
                    Advanced Technology
                  </h4>
                  <p className="text-gray-400 text-sm">
                    State-of-the-art security tools and platforms that provide
                    comprehensive visibility and protection.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-1">
                    24/7 Monitoring
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Round-the-clock security operations center ensuring
                    continuous protection of your digital assets.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-1">
                    Tailored Solutions
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Custom security strategies designed specifically for your
                    industry, size, and risk profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
