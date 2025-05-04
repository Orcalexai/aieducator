"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check } from "lucide-react"
import useScrollReveal from "@/hooks/useScrollReveal"

export default function Features() {
  // Hero section refs
  const heroTitleRef = useScrollReveal({ delay: 0 });
  const heroSubtitleRef = useScrollReveal({ delay: 200 });
  
  // CTA section refs
  const ctaTitleRef = useScrollReveal({ delay: 0 });
  const ctaSubtitleRef = useScrollReveal({ delay: 200 });
  const ctaButtonRef = useScrollReveal({ delay: 400 });

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 md:pt-20 lg:pt-24 pb-12">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Platform Features
            </Badge>
            <h1 ref={heroTitleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 mb-4">
              AiEducator Platform Features
            </h1>
            <p ref={heroSubtitleRef} className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Discover how our AI-powered platform transforms the educational experience
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          {[
            {
              title: "Curriculum-Agnostic Question Generation",
              description: "Create customized questions that adapt to any curriculum or learning standard.",
              image: "/ai-question-generation.png",
              features: [
                "Customizable questions based on grade level, subject, and specific content",
                "Multiple question formats (multiple-choice, short answer, essay)",
                "Difficulty levels that adapt to student performance",
                "Seamless alignment with any curriculum standards",
                "Support for multiple languages and cultural contexts",
              ],
              imageLeft: false,
            },
            {
              title: "Advanced Analytics Dashboard",
              description: "Gain deep insights into student performance and learning patterns.",
              image: "/educational-analytics-overview.png",
              features: [
                "Detailed visualization of student progress by topic and concept",
                "Performance metrics and comparative analysis",
                "Study streak tracking to encourage consistent engagement",
                "Customizable reporting aligned with institutional metrics",
              ],
              imageLeft: true,
            },
            {
              title: "Engaging Gamification",
              description: "Motivate students with game-like elements that make learning fun.",
              image: "/learning-adventure.png",
              features: [
                "Achievement badges and rewards for completing learning milestones",
                "Performance-based points system with visual representation of growth",
                "Team-based competitions to encourage collaborative learning",
                "Special recognition for improvement, not just top performance",
              ],
              imageLeft: false,
            },
            {
              title: "Agent-Powered Gap Analysis",
              description: "Identify and address learning gaps with intelligent AI agents.",
              image: "/agent-powered.png",
              features: [
                "AI agents that identify specific conceptual misunderstandings",
                "Personalized learning pathways based on identified gaps",
                "Classroom-level insights for differentiated instruction",
                "Early warning system for students at risk of falling behind",
              ],
              imageLeft: true,
            },
          ].map((feature, i) => {
            // Create refs for each feature section with appropriate animations
            const featureTitleRef = useScrollReveal({ delay: 0 });
            const featureDescRef = useScrollReveal({ delay: 200 });
            const featureListRef = useScrollReveal({ delay: 400 });
            const featureImageRef = useScrollReveal({ 
              delay: 300, 
              direction: feature.imageLeft ? 'left' : 'right',
              distance: 50
            });
            
            return (
              <div
                key={i}
                className={`flex flex-col ${i !== 0 ? "mt-24" : "mt-8"} md:mt-32 ${feature.imageLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <h2 ref={featureTitleRef} className="text-3xl font-bold tracking-tight">{feature.title}</h2>
                  <p ref={featureDescRef} className="text-xl text-muted-foreground">{feature.description}</p>
                  <ul ref={featureListRef} className="space-y-3">
                    {feature.features.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div ref={featureImageRef} className="flex-1 w-full">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-border/40 bg-gradient-to-b from-background to-muted/10">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      width={800}
                      height={600}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 ref={ctaTitleRef} className="text-3xl md:text-4xl font-bold tracking-tight">Experience AiEducator in Action</h2>
            <p ref={ctaSubtitleRef} className="text-xl text-muted-foreground">
              See how these features work together to create a powerful learning environment
            </p>
            <div ref={ctaButtonRef}>
              <Button asChild size="lg" className="rounded-full h-12 px-8 text-base mt-4">
                <Link href="/demo">
                  Try the Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}