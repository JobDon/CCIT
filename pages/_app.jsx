import '@/styles/globals.css'
import { JetBrains_Mono } from 'next/font/google'
import React from 'react'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={jetBrainsMono.className}>
      <Component {...pageProps} />
    </div>
  )
}
