import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const questions = [
  {
    id: 1,
    question: "Are you experiencing a live incident?",
    options: ["Yes", "No"]
  },
  {
    id: 2,
    question: "What are you looking for today?",
    options: [
      "Managed Security Services",
      "Professional & Advisory Services",
      "Offensive Security & Testing",
      "Threat Intelligence & Incident Response",
      "Training & Awareness",
      "General Info"
    ]
  },
  {
    id: 3,
    question: "What size business are you?",
    options: ["Small", "Medium", "Enterprise"]
  }
]

const redirects = {
  "Yes": "/contact",
  "Managed Security Services": "/services#Managed-Security-Services",
  "Professional & Advisory Services": "/services#Professional-and-Advisory-Services",
  "Offensive Security & Testing": "/services#Offensive-Security-and-Testing",
  "Threat Intelligence & Incident Response": "/services#Threat-Intelligence-and-Incident-Response",
  "Training & Awareness": "/services#Training-and-Awareness",
  "General Info": "/about"
}

export default function LandingPage() {
  const [step, setStep] = useState(0)
  const [history, setHistory] = useState([])
  const [redirectLink, setRedirectLink] = useState(null)

  const handleOption = (option) => {
    const newHistory = [...history, option]
    setHistory(newHistory)

    if (redirects[option]) {
      setRedirectLink(redirects[option])
    } else {
      setStep(step + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-6">
      {/* Header with Logo */}
      <header className="flex items-center gap-4 p-4 w-full max-w-6xl">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto sm:h-12" />
        </a>
      </header>

      <h1 className="text-4xl font-bold text-center mb-4">CYBER DEFENCE IS THE BEST FORM OF ATTACK.</h1>
      <p className="text-lg font-bold text-center text-gray-300 mb-8 max-w-xl">
        COMMAND CENTRE IT LTD. Est. 2022.
      </p>

      <Card className="w-full max-w-md bg-gray-900 border border-gray-700">
        <CardContent className="p-6">
          {!redirectLink ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="mb-4 text-white font-semibold">{questions[step]?.question}</p>
              <div className="space-y-2">
                {questions[step]?.options.map((option, index) => (
                  <Button
                    key={index}
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => handleOption(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="mb-4 text-lg font-semibold">Redirecting you to the right place...</p>
              <Button onClick={() => (window.location.href = redirectLink)}>Continue</Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
