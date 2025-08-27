import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "CodeBot Companion",
    "one_liner": "A voice-activated coding assistant that helps non-coders to create simple applications through conversation.",
    "why_now": "With the rise of no-code and low-code platforms, more people want to create apps without deep coding knowledge.",
    "novel_mechanism": "Utilizes conversational AI to translate vague instructions into code snippets.",
    "ai_stack": [
      "Claude/GPT",
      "Agents",
      "Speech"
    ],
    "edge_use_cases": [
      "Teachers creating educational apps",
      "Small businesses generating customized solutions",
      "Students building projects without prior coding experience"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Basic voice command recognition",
        "Code generation for simple apps",
        "User interface for interaction"
      ],
      "tools": [
        "React.js",
        "Firebase",
        "Twilio"
      ],
      "data_bootstrap": [
        "public coding languages dataset",
        "common templates for app functionalities"
      ],
      "risk": [
        "Compliance with coding standards",
        "Accuracy of code generation"
      ],
      "mitigation": [
        "User feedback loop for continuous learning",
        "Limit functionality to safer coding practices"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Showcase easy app creation via voice",
        "User testimonials on accessibility"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Developer Forums"
      ],
      "pricing": {
        "free": "limited features",
        "pro": "$10/month for advanced features",
        "business": "custom pricing for teams"
      }
    },
    "moat": [
      "Community-driven improvement",
      "Variety of integrations with other tools",
      "User-generated templates"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "This idea caters to a new market segment while leveraging familiar voice technologies, minimizing competition from traditional coding tools."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}