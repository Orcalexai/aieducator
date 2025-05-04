"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Info, Lock, User, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import useScrollReveal from "@/hooks/useScrollReveal"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: '/demo',
  },
}

export default function Demo() {
  const [username, setUsername] = useState("admin")
  const [password, setPassword] = useState("Orcalex@54321")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Hero section refs
  const heroTitleRef = useScrollReveal({ delay: 0 });
  const heroSubtitleRef = useScrollReveal({ delay: 200 });
  
  // Demo section refs
  const demoTitleRef = useScrollReveal({ delay: 0 });
  const demoAlertRef = useScrollReveal({ delay: 200 });
  const demoLoginRef = useScrollReveal({ delay: 400 });
  const demoContentRef = useScrollReveal({ delay: 300 });
  
  // Features Highlight section refs
  const highlightsTitleRef = useScrollReveal({ delay: 0 });
  
  // CTA section refs
  const ctaTitleRef = useScrollReveal({ delay: 0 });
  const ctaSubtitleRef = useScrollReveal({ delay: 200 });
  const ctaButtonsRef = useScrollReveal({ delay: 400 });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "admin" && password === "Orcalex@54321") {
      setIsLoggedIn(true)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 md:pt-20 lg:pt-24 pb-12">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Demo
            </Badge>
            <h1 ref={heroTitleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 mb-4">
              AiEducator Demo
            </h1>
            
            <p ref={heroSubtitleRef} className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Experience the power of AI in education firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 ref={demoTitleRef} className="text-3xl font-bold tracking-tight text-center mb-8">Live Application Demo</h2>

            <Alert ref={demoAlertRef} className="mb-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <Info className="h-5 w-5" />
              <AlertTitle>Demo Credentials</AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">Please use the following credentials to access the demo:</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-3">
                  <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 px-3 py-1.5 rounded">
                    <User className="h-4 w-4 text-blue-700 dark:text-blue-300" />
                    <span className="font-mono text-sm">10HPS17</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 px-3 py-1.5 rounded">
                    <Lock className="h-4 w-4 text-blue-700 dark:text-blue-300" />
                    <span className="font-mono text-sm">17HPS</span>
                  </div>
                </div>
              </AlertDescription>
            </Alert>

       
              <div ref={demoContentRef} className="space-y-4">
                <div className="rounded-xl overflow-hidden border border-border/40 shadow-lg h-[100vh]">
                  <iframe
                    src="https://app1.aieducator.com"
                    className="w-full h-full"
                    title="AiEducator Demo Application"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Note: This is an embedded view of the live application hosted at app1.aieducator.com.
                </p>
              </div>
           
          </div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 ref={highlightsTitleRef} className="text-3xl font-bold tracking-tight text-center mb-12">Key Features to Explore</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Question Generation",
                description: "See how AI creates curriculum-aligned questions that adapt to student needs.",
              },
              {
                title: "Analytics Dashboard",
                description: "Explore detailed visualizations of student progress and performance metrics.",
              },
              {
                title: "Gamification Elements",
                description: "Experience the engaging reward system that motivates student participation.",
              },
              {
                title: "Gap Analysis",
                description: "Discover how AI identifies learning gaps and suggests personalized pathways.",
              },
            ].map((feature, i) => {
              // Create a ref for each feature card with staggered delay
              const featureRef = useScrollReveal({ 
                delay: 200 + (i * 100),
                distance: 30,
                direction: 'up'
              });
              
              return (
                <Card
                  key={i}
                  ref={featureRef}
                  className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 ref={ctaTitleRef} className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Learn More?</h2>
            <p ref={ctaSubtitleRef} className="text-xl text-white/80">
              Discover how AiEducator can be implemented in your educational institution.
            </p>
            <div ref={ctaButtonsRef} className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                <Link href="/implementation">Implementation Details</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/case-study">View Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}