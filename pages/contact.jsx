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
              Get your
              <br />
              personalized
              <br />
              demo
            </h1>
            <div className="mt-10 space-y-6 text-gray-300">
              <div>
                <p className="font-medium text-white">Actionable visibility</p>
                <p className="text-sm mt-1 text-gray-400">
                  See how Command Centre IT uncovers data leaks, dark‑web
                  mentions, and exposed assets — all mapped to business impact.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Tailored walkthrough</p>
                <p className="text-sm mt-1 text-gray-400">
                  We focus the demo on your environment, use cases, and current
                  risks — no generic slides, just the workflow you’ll actually
                  use.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Clear next steps</p>
                <p className="text-sm mt-1 text-gray-400">
                  Leave with a short remediation plan, integration guidance, and
                  timelines so you can move from insight to action quickly.
                </p>
              </div>
              <p className="text-xs text-gray-500 pt-2">
                No pressure. 30–45 minutes. We can record the session on
                request.
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
                    We&apos;ll get back to you within 24 hours.
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
                    Full name
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
                    Subject <span className="text-gray-500">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1C0AA3]"
                    placeholder="What&apos;s this about?"
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
                    placeholder="Tell us about your cybersecurity needs..."
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
