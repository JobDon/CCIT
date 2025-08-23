"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import Navbar from "@/components/ui/navbar";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    emailjs.init("SSNmSvlP2Tt8Kq9Oq");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send("service_mgyzcfa", "template_yyvefdu", {
        name: form.fullName,
        title: form.subject || "New Contact Request",
        email: form.email,
      });
      console.log("EmailJS send success");
      setStatus("success");
      setForm({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS send error:", error?.text || error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-wide leading-tight uppercase">
              Send us a
              <br />
              message and
              <br />
              We will call you back.
            </h1>
            <div className="mt-10 space-y-6 text-gray-300">
              <div>
                <p className="font-medium text-white">Security Assessment</p>
                <p className="text-sm mt-1 text-gray-400">
                  At Command Centre IT we provide free security assessments 
                  for new customers, get to know your risks and mitigate.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Managed Security Service</p>
                <p className="text-sm mt-1 text-gray-400">
                  Command Centre is a managed detection and response service
                  we monitor your IT estate 24/7 and provide automated response
                  to threats, outsource your security operations now.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Professional Security Services</p>
                <p className="text-sm mt-1 text-gray-400">
                  Our founder has over 25 years in building robust cyber defences an protecting 
                  SME's and enterprises alike against cyber threats. We have experience in government and banking.
                </p>
              </div>
              <p className="text-xs text-gray-500 pt-2">
                All messages are encryped.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="order-1 lg:order-2">
            <div className="border border-gray-800 p-6 lg:p-8 bg-transparent">
              {/* Status Messages */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-[#1C0AA3] border border-[#1C0AA3] ">
                  <p className="text-white font-medium">
                    Message sent successfully!
                  </p>
                  <p className="text-white text-sm mt-1">
                    We will get back to you within 15 minutes during business hours for emergencies and 1 business day for non emergencies.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-600/20 border border-red-600/30 ">
                  <p className="text-red-400 font-medium">
                    Failed to send message. Please try again.
                  </p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1C0AA3]"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1C0AA3]"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject <span className="text-gray-500">(If you have been hacked, write "Emergency")</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1C0AA3]"
                    placeholder="Choose a service"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1C0AA3] resize-none"
                    placeholder="Describe your issue or enquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-[#1C0AA3] hover:bg-[#1C0AA3]/80 disabled:bg-gray-600 text-white font-semibold transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
