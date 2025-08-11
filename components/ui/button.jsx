// components/ui/button.jsx
import React from "react"

export function Button({ children, className = "", variant = "default", ...props }) {
  const base =
    "px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
  const outline =
    "px-4 py-2 rounded border border-gray-400 text-gray-100 hover:bg-gray-800 transition-colors duration-200"

  return (
    <button
      className={`${variant === "outline" ? outline : base} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
