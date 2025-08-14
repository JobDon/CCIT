// /pages/about.js
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <header className="flex items-center gap-4 p-4 bg-gray-900 border-b border-gray-800">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto sm:h-12" />
        </a>
        <h1 className="text-xl font-semibold">Contact Us</h1>
      import Image from 'next/image'
      <Image src="/logo.png" alt="Logo" width={160} height={40} priority />
      </header>
      
      <h1 className="text-4xl font-bold mb-6">About Command Centre IT</h1>
      <p className="text-gray-300 mb-4">
        Founded in 2022, Command Centre IT Ltd. was built to meet the growing demand for advanced cyber defence
        in a volatile digital world.
      </p>
      <p className="text-gray-300 mb-4">
        We specialise in proactive and reactive cyber operations. Our mission is to empower clients with real-time
        visibility, robust defence architectures, and rapid incident response.
      </p>
      <p className="text-gray-300">
        Whether you're a small business or a large enterprise, we build bespoke solutions to protect what matters most.
      </p>
    </div>
  )
}
