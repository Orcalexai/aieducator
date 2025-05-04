"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Mail, Phone, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import useScrollReveal from "@/hooks/useScrollReveal"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
}

export default function About() {
  // Hero section refs
  const heroTitleRef = useScrollReveal({ delay: 0 });
  const heroSubtitleRef = useScrollReveal({ delay: 200 });
  
  // Mission section refs
  const missionTitleRef = useScrollReveal({ delay: 0 });
  const missionTextRef = useScrollReveal({ delay: 200 });
  const missionImageRef = useScrollReveal({ delay: 300, direction: 'left' });
  
  // Expertise section refs
  const expertiseTitleRef = useScrollReveal({ delay: 0 });
  const expertiseTextRef = useScrollReveal({ delay: 200 });
  
  // Approach section refs
  const approachTitleRef = useScrollReveal({ delay: 0 });
  const approachSubtitleRef = useScrollReveal({ delay: 200 });
  
  // Product section refs
  const productTitleRef = useScrollReveal({ delay: 0 });
  const productTextRef = useScrollReveal({ delay: 200 });
  const productButtonRef = useScrollReveal({ delay: 400 });
  const productImageRef = useScrollReveal({ delay: 300, direction: 'right' });
  
  // Contact section refs
  const contactTitleRef = useScrollReveal({ delay: 0 });
  const contactSubtitleRef = useScrollReveal({ delay: 200 });
  
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
              About Us
            </Badge>
            <h1 ref={heroTitleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 mb-4">
              About Orcalex Technologies
            </h1>
            <p ref={heroSubtitleRef} className="text-xl text-muted-foreground max-w-[800px] mx-auto">The innovative team behind AiEducator</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 ref={missionTitleRef} className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p ref={missionTextRef} className="text-lg text-muted-foreground">
                Orcalex Technologies is dedicated to transforming education through intelligent technology that empowers
                rather than replaces educators. We believe in building internal capabilities within the organizations we
                serve, creating sustainable solutions that continue to evolve long after our initial engagement.
              </p>
            </div>
            <div ref={missionImageRef} className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border/40 bg-gradient-to-b from-background to-muted/10">
                <Image
                  src="/mission.png"
                  width={800}
                  height={600}
                  alt="Orcalex Technologies team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 ref={expertiseTitleRef} className="text-3xl font-bold tracking-tight text-center mb-12">Our Expertise</h2>

          <div className="max-w-3xl mx-auto">
            <p ref={expertiseTextRef} className="text-lg text-muted-foreground mb-8">
              Orcalex Technologies is a cutting-edge AI company specializing in educational technology solutions. Our
              team includes AI developers, React and Django developers, and PostgreSQL specialists with deep expertise
              in:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Retrieval-Augmented Generation (RAG)",
                "Advanced model fine-tuning techniques",
                "GRPO-based fine-tuning requiring very few data points",
                "Agentic AI systems",
                "Educational technology integration",
              ].map((expertise, i) => {
                // Create a ref for each expertise card with staggered delay
                const expertiseCardRef = useScrollReveal({ 
                  delay: 200 + (i * 120),
                  direction: i % 2 === 0 ? 'left' : 'right',
                  distance: 30
                });
                
                return (
                  <Card
                    key={i}
                    ref={expertiseCardRef}
                    className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md"
                  >
                    <CardContent className="p-6 flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{expertise}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 ref={approachTitleRef} className="text-3xl font-bold tracking-tight text-center mb-4">Our Approach</h2>
          <p ref={approachSubtitleRef} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            What sets Orcalex apart is our commitment to:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Knowledge Transfer",
                description: "We don't just deliver products; we build capabilities within your organization.",
              },
              {
                title: "Sustainable Solutions",
                description:
                  "Our Hero Team Model ensures your institution can maintain and evolve the technology independently.",
              },
              {
                title: "Data Security",
                description: "All development happens within your secure environment with zero data exposure.",
              },
              {
                title: "Measurable Impact",
                description: "We focus on tangible educational outcomes, not just technological novelty.",
              },
            ].map((approach, i) => {
              // Create a ref for each approach with staggered delay
              const approachItemRef = useScrollReveal({ 
                delay: 300 + (i * 150),
                distance: 30,
                direction: 'up'
              });
              
              return (
                <div key={i} ref={approachItemRef} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                    <p className="text-muted-foreground">{approach.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flagship Product Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div ref={productImageRef} className="flex-1 w-full order-2 md:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border/40 bg-gradient-to-b from-background to-muted/10">
                <Image
                  src="/dashboard.png"
                  width={800}
                  height={600}
                  alt="AiEducator platform"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2">
              <h2 ref={productTitleRef} className="text-3xl font-bold tracking-tight">Our Flagship Product</h2>
              <p ref={productTextRef} className="text-lg text-muted-foreground">
                AiEducator represents our vision for the future of education—a platform that combines sophisticated AI
                capabilities with intuitive design to enhance teaching and learning across any curriculum or educational
                system.
              </p>
              <div ref={productButtonRef}>
                <Button asChild className="rounded-full">
                  <Link href="/features">
                    Explore Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 ref={contactTitleRef} className="text-3xl font-bold tracking-tight text-center mb-4">Contact Us</h2>
          <p ref={contactSubtitleRef} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Ready to explore how AiEducator can transform learning at your institution? Get in touch with our team:
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-3xl mx-auto">
            {[
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Email",
                content: (
                  <a href="mailto:info@orcalex.ai" className="text-primary hover:underline">
                    info@orcalex.ai
                  </a>
                ),
              },
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: "Website",
                content: (
                  <a
                    href="http://www.orcalex.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.orcalex.ai
                  </a>
                ),
              },
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Phone",
                content: (
                  <a href="tel:+918008066228" className="text-primary hover:underline">
                    +91 8008066228
                  </a>
                ),
              },
            ].map((contact, i) => {
              // Create a ref for each contact card with staggered delay
              const contactCardRef = useScrollReveal({ 
                delay: 300 + (i * 150),
                distance: 30,
                direction: 'up'
              });
              
              return (
                <Card key={i} ref={contactCardRef} className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md w-full md:w-auto">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      {contact.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                    {contact.content}
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
            <h2 ref={ctaTitleRef} className="text-3xl md:text-4xl font-bold tracking-tight">Experience AiEducator Today</h2>
            <p ref={ctaSubtitleRef} className="text-xl text-white/80">
              See our technology in action and imagine the possibilities for your institution.
            </p>
            <div ref={ctaButtonRef}>
              <Button asChild size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base mt-4">
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