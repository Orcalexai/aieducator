"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import useScrollReveal from "@/hooks/useScrollReveal"

export default function CaseStudy() {
  // Hero section refs
  const heroTitleRef = useScrollReveal({ delay: 0 });
  const heroSubtitleRef = useScrollReveal({ delay: 200 });
  
  // Opportunity section refs
  const opportunityTitleRef = useScrollReveal({ delay: 0 });
  const opportunityTextRef = useScrollReveal({ delay: 200 });
  const opportunityListRef = useScrollReveal({ delay: 400 });
  const opportunityImageRef = useScrollReveal({ delay: 200, direction: 'left' });
  
  // Approach section refs
  const approachTitleRef = useScrollReveal({ delay: 0 });
  const approachSubtitleRef = useScrollReveal({ delay: 200 });
  
  // Results section refs
  const resultsTitleRef = useScrollReveal({ delay: 0 });
  const resultsSubtitleRef = useScrollReveal({ delay: 200 });
  const resultsSummaryRef = useScrollReveal({ delay: 400 });
  
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
              Case Study
            </Badge>
            <h1 ref={heroTitleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 mb-4">
              Proposed Case Study Scenario
            </h1>
            <p ref={heroSubtitleRef} className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Transforming Learning Outcomes with AiEducator
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 ref={opportunityTitleRef} className="text-3xl font-bold tracking-tight">The Opportunity</h2>
              <p ref={opportunityTextRef} className="text-lg text-muted-foreground">
                Consider a mid-sized school district or a chain of schools facing common challenges:
              </p>
              <ul ref={opportunityListRef} className="space-y-3">
                {[
                  "Stagnant or declining standardized test scores, particularly in core subjects like mathematics.",
                  "Persistent achievement gaps between different student groups.",
                  "High levels of teacher workload related to assessment creation and grading.",
                  "Difficulty providing truly personalized learning experiences at scale.",
                  "Inconsistent application of technology across different schools or classrooms.",
                ].map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                Such an institution might be seeking innovative solutions but remain cautious due to past experiences
                with complex EdTech implementations.
              </p>
            </div>
            <div ref={opportunityImageRef} className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border/40 bg-gradient-to-b from-background to-muted/10">
                <Image
                  src="/opportunity.png"
                  width={800}
                  height={600}
                  alt="School district with challenges"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AiEducator Approach Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 ref={approachTitleRef} className="text-3xl font-bold tracking-tight text-center mb-12">The AiEducator Approach</h2>
          <p ref={approachSubtitleRef} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Partnering with Orcalex Technologies, the institution could implement the AiEducator platform using a
            tailored approach:
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent z-0"></div>

            <div className="space-y-12">
              {[
                {
                  title: "OrcaLex Development",
                  description:
                    "Orcalex Technologies would handle the core platform development, customization, and integration based on the institution's specific curriculum and needs.",
                },
                {
                  title: "Hero Team Formation (Teachers & Students)",
                  description:
                    'A dedicated "Hero Team" comprising enthusiastic teachers and selected student leaders would be formed.',
                },
                {
                  title: "Focused Training",
                  description:
                    "This Hero Team would receive specialized training from Orcalex on maximizing the use of the AiEducator platform – focusing on leveraging analytics, creating engaging content, and utilizing personalization features effectively.",
                },
                {
                  title: "Pilot Implementation",
                  description:
                    "A pilot program could begin in specific grades or subjects (e.g., mathematics in grades 6-8). The Hero Team teachers would use the platform, while student heroes would provide feedback and encourage peer adoption.",
                },
                {
                  title: "Role Modeling & Ambassadorship",
                  description:
                    "The Hero Team would act as internal champions, demonstrating best practices, providing peer support, and becoming brand ambassadors for AiEducator within the institution.",
                },
              ].map((step, i) => {
                // Create a ref for each step with staggered delay
                const stepRef = useScrollReveal({ delay: 200 + (i * 150) });
                
                return (
                  <div key={i} ref={stepRef} className="relative z-10 flex items-start gap-8">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm md:ml-12">
                      {i + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Potential Results Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 ref={resultsTitleRef} className="text-3xl font-bold tracking-tight text-center mb-4">Potential Results</h2>
          <p ref={resultsSubtitleRef} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Within one academic year, the institution could potentially experience significant improvements:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Student Achievement",
                description:
                  "A measurable increase in proficiency rates (e.g., potentially 10-15%) in targeted subjects, with notable gains among previously struggling students.",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
              },
              {
                title: "Teacher Efficiency",
                description:
                  "A significant reduction (e.g., potentially 80%+) in time spent by teachers on routine assessment tasks, freeing them for direct instruction and support.",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
              },
              {
                title: "Enhanced Personalization",
                description:
                  "A substantial increase (e.g., potentially 40%+) in the delivery of individualized learning support, enabled by AiEducator's gap analysis and adaptive features.",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
              },
              {
                title: "Increased Engagement",
                description:
                  "A marked rise (e.g., potentially 60%+) in student completion of practice activities, driven by gamification and personalized challenges.",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
              },
              {
                title: "Improved Consistency",
                description:
                  "Reduced variation in educational quality across classrooms and schools, facilitated by shared resources and standardized analytics.",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
              },
              {
                title: "Sustainable Adoption",
                description:
                  "The Hero Team would foster ongoing, effective use of AiEducator, ensuring long-term benefits and continuous improvement driven from within the institution.",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
              },
            ].map((result, i) => {
              // Create a ref for each card with staggered delay
              const cardRef = useScrollReveal({ 
                delay: 200 + (i * 100), 
                direction: i % 2 === 0 ? 'up' : 'left',
                distance: 30
              });
              
              return (
                <Card
                  key={i}
                  ref={cardRef}
                  className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary/10 p-2 w-fit mb-4">{result.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{result.title}</h3>
                    <p className="text-muted-foreground">{result.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <p ref={resultsSummaryRef} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mt-12">
            This scenario illustrates how AiEducator, implemented strategically, could position an educational
            institution as a leader in leveraging AI for tangible learning improvements.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h2 ref={ctaTitleRef} className="text-3xl md:text-4xl font-bold tracking-tight">See AiEducator in Action</h2>
            <p ref={ctaSubtitleRef} className="text-xl text-white/80">Explore the platform that makes these results possible.</p>
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