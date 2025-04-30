"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import useScrollReveal from "@/hooks/useScrollReveal"
import {
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  BookOpen,
  Brain,
  Lightbulb,
  LineChart,
  Puzzle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Hero section refs
  const heroTitleRef = useScrollReveal({ delay: 0 });
  const heroSubtitleRef = useScrollReveal({ delay: 200 });
  const heroButtonsRef = useScrollReveal({ delay: 400 });
  const heroImageRef = useScrollReveal({ delay: 600 });
  
  // Overview section refs
  const overviewTitleRef = useScrollReveal({ delay: 0 });
  const overviewSubtitleRef = useScrollReveal({ delay: 200 });
  const overviewCardsRef = useScrollReveal({ delay: 400 });
  
  // Benefits section refs
  const benefitsTitleRef = useScrollReveal({ delay: 0 });
  const benefitsSubtitleRef = useScrollReveal({ delay: 200 });
  const benefitsContentRef = useScrollReveal({ delay: 400 });
  const benefitsImageRef = useScrollReveal({ delay: 500 });
  
  // CTA section refs
  const ctaTitleRef = useScrollReveal({ delay: 0 });
  const ctaSubtitleRef = useScrollReveal({ delay: 200 });
  const ctaButtonsRef = useScrollReveal({ delay: 400 });

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and workflows to save time and reduce errors.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights with real-time data visualization and reporting.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with integrated communication tools.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Enterprise Security",
      description: "Keep your data safe with end-to-end encryption and compliance features.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools through our extensive API ecosystem.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team.",
      icon: <Star className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
     
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 md:pt-20 lg:pt-28">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 pb-8">
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                AI-Powered Education
              </Badge>
              <h1 ref={heroTitleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 mb-4">
                Transforming Education with AiEducator
              </h1>
              <p ref={heroSubtitleRef} className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                Leveraging cutting-edge AI to personalize learning, empower educators, and boost student engagement.
              </p>
              <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="rounded-full h-12 px-8 text-base">
                  <Link href="/demo">
                    Try the Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 text-base">
                  <Link href="/features">Explore Features</Link>
                </Button>
              </div>
            </div>

            <div ref={heroImageRef} className="relative mx-auto max-w-5xl mt-12 mb-20">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="/solve.png"
                  width={1280}
                  height={720}
                  alt="AiEducator platform dashboard"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-purple-500/30 to-primary/30 blur-3xl opacity-70"></div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 ref={overviewTitleRef} className="text-3xl md:text-4xl font-bold tracking-tight">
                Unlock Potential with AI-Powered Learning
              </h2>
              <p ref={overviewSubtitleRef} className="text-xl text-muted-foreground max-w-[800px]">
                AiEducator provides adaptable solutions for any curriculum, enhancing learning outcomes and improving
                efficiency for educational institutions worldwide.
              </p>
            </div>

            <div ref={overviewCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  icon: <Brain className="h-10 w-10 text-primary" />,
                  title: "AI-Powered Personalization",
                  description: "Adaptive learning paths tailored to each student's unique needs and pace.",
                },
                {
                  icon: <LineChart className="h-10 w-10 text-primary" />,
                  title: "Comprehensive Analytics",
                  description: "Detailed insights into student performance to guide instructional decisions.",
                },
                {
                  icon: <Puzzle className="h-10 w-10 text-primary" />,
                  title: "Engaging Gamification",
                  description: "Interactive elements that make learning fun and motivate student participation.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Collaborative Implementation",
                  description: "Our Hero Team model ensures successful adoption and sustainable impact.",
                },
              ].map((feature, i) => (
                <Card
                  key={i}
                  className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Key Benefits
              </Badge>
              <h2 ref={benefitsTitleRef} className="text-3xl md:text-4xl font-bold tracking-tight">Transform Your Educational Approach</h2>
              <p ref={benefitsSubtitleRef} className="text-xl text-muted-foreground max-w-[800px]">
                AiEducator delivers measurable improvements across multiple dimensions of the learning experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div ref={benefitsContentRef} className="space-y-8">
                {[
                  {
                    icon: <BookOpen className="h-6 w-6 text-primary" />,
                    title: "For Students",
                    benefits: [
                      "Personalized learning paths based on individual needs",
                      "Immediate feedback on assignments and assessments",
                      "Engaging, gamified learning experiences",
                      "Support for diverse learning styles and paces",
                    ],
                  },
                  {
                    icon: <Lightbulb className="h-6 w-6 text-primary" />,
                    title: "For Educators",
                    benefits: [
                      "Automated assessment creation and grading",
                      "Detailed analytics on student performance",
                      "More time for meaningful student interactions",
                      "Tools to identify and address learning gaps",
                    ],
                  },
                ].map((group, i) => (
                  <div key={i} className="border-l-4 border-primary pl-6">
                    <div className="flex items-center gap-3 mb-4">
                      {group.icon}
                      <h3 className="text-2xl font-bold">{group.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {group.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div ref={benefitsImageRef} className="relative rounded-xl overflow-hidden shadow-lg border border-border/40">
                <Image
                  src="/dashboard.png"
                  width={800}
                  height={600}
                  alt="Students using AiEducator"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 ref={ctaTitleRef} className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Transform Learning?</h2>
              <p ref={ctaSubtitleRef} className="text-xl text-white/80">
                Experience how AiEducator can revolutionize education at your institution.
              </p>
              <div ref={ctaButtonsRef} className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button asChild size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  <Link href="/demo">
                    Try the Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/implementation">Learn About Implementation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}