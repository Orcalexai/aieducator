"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import useScrollReveal from "@/hooks/useScrollReveal"

export default function Implementation() {
  // Hero section refs
  const heroTitleRef = useScrollReveal({ delay: 0 });
  const heroSubtitleRef = useScrollReveal({ delay: 200 });
  
  // Hero Team Model section refs
  const teamModelTitleRef = useScrollReveal({ delay: 0 });
  const teamModelTextRef = useScrollReveal({ delay: 200 });
  const teamModelImageRef = useScrollReveal({ delay: 300, direction: 'left' });
  
  // Core Principles section refs
  const principlesTitleRef = useScrollReveal({ delay: 0 });
  
  // Implementation Process section refs
  const processTitleRef = useScrollReveal({ delay: 0 });
  const processSubtitleRef = useScrollReveal({ delay: 200 });
  
  // Risk Mitigation section refs
  const mitigationTitleRef = useScrollReveal({ delay: 0 });
  
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
              Implementation
            </Badge>
            <h1 ref={heroTitleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 mb-4">
              Implementation Framework
            </h1>
            <p ref={heroSubtitleRef} className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Empowering Educators and Students with AiEducator
            </p>
          </div>
        </div>
      </section>

      {/* Hero Team Model Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 ref={teamModelTitleRef} className="text-3xl font-bold tracking-tight">The AiEducator Hero Team Model</h2>
              <p ref={teamModelTextRef} className="text-lg text-muted-foreground">
                Orcalex Technologies utilizes a unique implementation approach focused on empowering your institution's
                key stakeholders—educators and students—to become champions of the AiEducator platform. While Orcalex
                manages the technical development and customization, we partner closely with your internal "Hero Team"
                to ensure successful adoption and long-term impact.
              </p>
            </div>
            <div ref={teamModelImageRef} className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border/40 bg-gradient-to-b from-background to-muted/10">
                <Image
                  src="/hero-team.png"
                  width={800}
                  height={600}
                  alt="Hero Team Model"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 ref={principlesTitleRef} className="text-3xl font-bold tracking-tight text-center mb-12">Core Principles for Schools</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "1. Focus on Effective Usage",
                description:
                  "The primary goal for the school's Hero Team (selected teachers and student leaders) is to master the AiEducator platform's features and integrate them effectively into daily teaching and learning practices.",
              },
              {
                title: "2. Internal Champions as Catalysts",
                description:
                  "We identify and train enthusiastic teachers and students who become internal experts and advocates. They provide peer support, share best practices, and drive adoption from within.",
              },
              {
                title: "3. Feedback Loop for Continuous Improvement",
                description:
                  "The Hero Team provides crucial real-world feedback to Orcalex, helping refine the platform and ensure it meets the evolving needs of educators and students.",
              },
              {
                title: "4. Building Brand Ambassadors",
                description:
                  "Empowered teachers and students naturally become ambassadors for AiEducator, showcasing its benefits and encouraging wider engagement throughout the institution.",
              },
            ].map((principle, i) => {
              // Create a ref for each principle with staggered delay
              const principleRef = useScrollReveal({ delay: 200 + (i * 150) });
              
              return (
                <Card
                  key={i}
                  ref={principleRef}
                  className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 ref={processTitleRef} className="text-3xl font-bold tracking-tight text-center mb-4">The Implementation Process</h2>
          <p ref={processSubtitleRef} className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">Partnering for Success</p>

          <div className="relative">
            

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Needs Assessment & Team Selection",
                  timeline: "Weeks 1-2",
                  items: [
                    "Orcalex works with school leadership to understand specific goals and challenges.",
                    "Identify enthusiastic teachers and student leaders for the Hero Team.",
                    "Define clear success metrics focused on adoption and impact.",
                  ],
                },
                {
                  phase: "Phase 2",
                  title: "Platform Customization & Hero Training",
                  timeline: "Weeks 3-4",
                  items: [
                    "Orcalex customizes the AiEducator platform based on curriculum and institutional needs.",
                    "Intensive training for the Hero Team on platform features, pedagogical integration, and support strategies.",
                  ],
                },
                {
                  phase: "Phase 3",
                  title: "Pilot Implementation & Support",
                  timeline: "Weeks 5-8",
                  items: [
                    "AiEducator is rolled out in a pilot phase (e.g., specific grades/subjects).",
                    "The Hero Team begins using the platform and providing peer support, with Orcalex offering technical backup.",
                    "Regular feedback sessions between the Hero Team and Orcalex.",
                  ],
                },
                {
                  phase: "Phase 4",
                  title: "Scaling & Knowledge Sharing",
                  timeline: "Weeks 9-12",
                  items: [
                    "Based on pilot success, the implementation is expanded.",
                    "The Hero Team leads internal workshops and sharing sessions.",
                    "Orcalex provides resources and support for broader rollout.",
                    "Establishment of ongoing feedback mechanisms.",
                  ],
                },
              ].map((phase, i) => {
                // Create a ref for each phase with staggered delay
                const phaseRef = useScrollReveal({ 
                  delay: 200 + (i * 150),
                  distance: 30,
                  direction: 'up'
                });
                
                return (
                  <div key={i} ref={phaseRef} className="relative z-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                        {i + 1}
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {phase.timeline}
                        </Badge>
                        <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                        <ul className="space-y-2 text-left">
                          {phase.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 ref={mitigationTitleRef} className="text-3xl font-bold tracking-tight text-center mb-12">
            Risk Mitigation: Secure and Supported Adoption
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Data Security",
                description:
                  "All student data remains within the institution's secure environment; Orcalex interacts only with anonymized usage data for platform improvement when necessary and agreed upon.",
              },
              {
                title: "Focus on Pedagogy",
                description:
                  "The school's team focuses on educational application, while Orcalex handles technical complexities.",
              },
              {
                title: "Sustainable Expertise",
                description:
                  "Internal champions ensure knowledge remains within the institution, reducing reliance on external support for day-to-day usage.",
              },
            ].map((item, i) => {
              // Create a ref for each risk mitigation card with staggered delay
              const cardRef = useScrollReveal({ 
                delay: 200 + (i * 150),
                direction: i % 2 === 0 ? 'left' : 'right',
                distance: 40
              });
              
              return (
                <Card
                  key={i}
                  ref={cardRef}
                  className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
            <h2 ref={ctaTitleRef} className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Transform Learning at Your Institution?
            </h2>
            <p ref={ctaSubtitleRef} className="text-xl text-white/80">
              Experience how AiEducator can be implemented in your specific context
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