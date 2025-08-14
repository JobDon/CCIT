// /pages/contact.js
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add logic to send form data (e.g. API call or formspree)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <header className="flex items-center gap-4 p-4 bg-gray-900 border-b border-gray-800">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto sm:h-12" />
        </a>
        <h1 className="text-xl font-semibold">Contact Us</h1>
      </header>
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-green-400 text-lg">Thanks for your message! We'll be in touch shortly.</p>
      )}
    </div>
  )
}
