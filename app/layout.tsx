import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AiEducator - AI-Powered Education Platform | Personalized Learning Solutions",
  description: "Leveraging cutting-edge AI to personalize learning, empower educators, and boost student engagement. AiEducator is a cutting-edge AI education platform that transforms learning through personalized experiences, adaptive learning paths, and comprehensive analytics. Perfect for educators and students seeking innovative edtech solutions.",
  keywords: "AI education,ai educator .com, aieducator.com, edtech platform, personalized learning, adaptive learning, AI in education, educational technology, smart learning, student engagement, teacher tools, learning analytics, aieducator, aiedtech, AI-powered education platform, personalized learning solutions, smart learning system, engaging learning, smart learning",
  authors: [{ name: "AiEducator Team" }],
  creator: "AiEducator",
  publisher: "AiEducator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aieducator.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AiEducator - AI-Powered Education Platform",
    description: "Transform education with AI-powered personalized learning solutions",
    url: 'https://aieducator.com',
    siteName: 'AiEducator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AiEducator Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AiEducator - AI-Powered Education Platform",
    description: "Transform education with AI-powered personalized learning solutions",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'MQWu4_LdI-Dnzv4LlZLbmm-aGerpVX4NG70wrxCG-UA',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/fav.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
