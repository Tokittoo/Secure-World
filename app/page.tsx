"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Shield,
  Users,
  Globe,
  Bot,
  GraduationCap,
  Search,
  Eye,
  Lock,
  Network,
  Code,
  ShoppingCart,
  Sparkles,
  Brain,
  BookOpen,
  Award,
  Clock,
  FileCheck,
  AlertTriangle,
} from "lucide-react"
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

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

  const coreDivisions = [
    {
      icon: Shield,
      title: "Cyber Security Services",
      services: [
        "Penetration Testing & Red Teaming",
        "SOC-as-a-Service (24/7 Monitoring)",
        "MDR (Managed Detection & Response)",
        "Ransomware Readiness",
        "Security Awareness Programs",
      ],
    },
    {
      icon: Globe,
      title: "Website Development",
      services: [
        "Full‑stack website & web app development",
        "Business websites, portfolios, landing pages",
        "E‑commerce development",
        "UI/UX design & optimization",
        "SEO, performance tuning & maintenance",
      ],
    },
    {
      icon: Bot,
      title: "AI Development",
      services: [
        "AI-powered automation tools",
        "Chatbot & LLM integration",
        "AI-based security automation",
        "Predictive analytics & ML solutions",
        "Custom AI model fine-tuning",
      ],
    },
    {
      icon: GraduationCap,
      title: "Proworldz Academy",
      description: "Empowering the next generation of tech professionals.",
      services: [
        "Cyber Security Training (Beginner → Advanced)",
        "Ethical Hacking Course",
        "AI & Machine Learning Training",
        "Full‑stack Web Development",
        "Workshops, internships & certification programs",
      ],
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-12 rounded-full  from-primary to-primary/70 flex items-center justify-center text-primary-foreground overflow-hidden">
              <Image src="/Logo.jpg" alt="Secure Worldz" width={44} height={44} className="rounded-full object-cover" />
            </div>
            <span>Secure Worldz</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How We Work
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button className="rounded-full">
              Start Free Assessment
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#services" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="#how-it-works" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                How We Work
              </Link>
              <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
                <Button className="rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden relative">
          <div className="absolute inset-0 -z-10 mx-4 md:mx-8 lg:mx-16 my-8 md:my-12 lg:my-16 h-[calc(100%-4rem)] md:h-[calc(100%-6rem)] lg:h-[calc(100%-8rem)] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-[3rem] md:rounded-[4rem] lg:rounded-[5rem] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,black_70%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Secure. Build. Evolve.
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Secure Worldz — Secure. Build. Evolve.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto italic">
                Smart solutions for a smarter digital world.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                Short. Simple. Future-ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  Start Free Assessment
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                  Book a Demo
                </Button>
              </div>
            </motion.div>


          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">Trusted by organizations building the future</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                <div className="relative h-12 md:h-16">
                  <Image
                    src="/Proworldz-light.png"
                    alt="Proworldz"
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain dark:hidden"
                  />
                  <Image
                    src="/Proworldz.png"
                    alt="Proworldz"
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain hidden dark:block"
                  />
                </div>
                <Image
                  src="/Amit-University.png"
                  alt="Amit University"
                  width={120}
                  height={60}
                  className="h-12 md:h-16 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                What We Do
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Divisions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Secure Worldz is a multi‑domain tech & security company offering <em>Cyber Security Services</em>, <strong>Website Development</strong>, <strong>AI Development</strong>, and <strong>Proworldz Academy</strong> (our training division).
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2"
            >
              {coreDivisions.map((division, i) => {
                const IconComponent = division.icon
                return (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="size-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                            <IconComponent className="size-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{division.title}</h3>
                            {division.description && (
                              <p className="text-muted-foreground italic mb-3">{division.description}</p>
                            )}
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {division.services.map((service, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Check className="size-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How We Work
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple onboarding, measurable outcomes</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Assess",
                  description: "Comprehensive risk assessment and attack surface review within days.",
                },
                {
                  step: "02",
                  title: "Protect",
                  description: "Prioritized remediation plan, secure configurations, and ongoing monitoring.",
                },
                {
                  step: "03",
                  title: "Detect & Respond",
                  description: "24/7 monitoring, rapid investigations, and guided recovery.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold italic">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why choose Secure Worldz</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Practitioner-led",
                  description: "Teams built from former red teamers, incident responders, and cloud security engineers.",
                  icon: Users,
                },
                {
                  title: "Action-first reporting",
                  description: "Clear, prioritized fixes with repeatable verification steps — not just pages of findings.",
                  icon: FileCheck,
                },
                {
                  title: "Fast time-to-value",
                  description: "Quick onboarding and prioritized remediation so you see impact immediately.",
                  icon: Clock,
                },
                {
                  title: "Transparent pricing",
                  description: "Plans and custom enterprise options — no surprises.",
                  icon: Award,
                },
              ].map((item, i) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                          <IconComponent className="size-5" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 italic">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Testimonials</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  quote:
                    "Secure Worldz transformed our entire security posture. Their team is fast, clear, and extremely professional.",
                  author: "Panchayat Kovalam",
                  role: "",
                  rating: 5,
                },
                {
                  quote:
                    "Their development team delivered a clean, modern website that elevated our brand instantly.",
                  author: "Director & Coach",
                  role: "FC Kovalam",
                  rating: 5,
                },
                {
                  quote:
                    "AI automation from Secure Worldz reduced our manual workload by almost 60% — game changer.",
                  author: "Anas",
                  role: "Student",
                  rating: 5,
                },
                {
                  quote:
                    "Proworldz Academy helped me build real cyber security skills with practical labs and personal guidance.",
                  author: "Ajay",
                  role: "Student",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Plans & Pricing</h2>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    name: "Starter",
                    description: "Security Health Check • Basic pentest • Email support",
                    subtitle: "Ideal for early-stage startups.",
                    features: [],
                    cta: "Contact Sales",
                  },
                  {
                    name: "Professional",
                    description: "Regular pentests • SOC monitoring (MDR lite) • Phishing simulations",
                    subtitle: "For growing teams that need continuous coverage.",
                    features: [],
                    cta: "Contact Sales",
                    popular: true,
                  },
                  {
                    name: "Enterprise",
                    description: "24/7 SOC, dedicated response engineer, custom integrations, compliance support",
                    subtitle: "For organizations with complex needs.",
                    features: [],
                    cta: "Contact Sales",
                  },
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-muted-foreground mb-1">{plan.description}</p>
                        <p className="text-sm text-muted-foreground italic mb-6">{plan.subtitle}</p>
                        <Button
                              className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-black hover:text-white dark:hover:bg-primary/90" : "bg-muted hover:bg-black hover:text-white dark:hover:bg-muted/80"}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                Contact sales for custom pricing and SLA details.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How quickly can I start?",
                    answer:
                      "Most assessments start within 3–7 business days depending on scope.",
                  },
                  {
                    question: "Do you sign NDAs?",
                    answer:
                      "Yes — we sign NDAs and follow strict rules of engagement for testing.",
                  },
                  {
                    question: "What compliance frameworks do you support?",
                    answer:
                      "PCI DSS, SOC2, ISO 27001, and custom audit readiness support.",
                  },
                  {
                    question: "Is my data safe with you?",
                    answer:
                      "Absolutely — we use encrypted storage, strict access controls, and follow industry best practices.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to secure your product and customers?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Start a Free Assessment
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary dark:border-white dark:text-black dark:hover:bg-white dark:hover:text-black dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:transition-all dark:duration-300"
                >
                  Book a Demo
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                Contact: <a href="mailto:info.secureworldz@gmail.com" className="underline">info.secureworldz@gmail.com</a>
              </p>
              
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-10 rounded-full  from-primary to-primary/70 flex items-center justify-center text-primary-foreground overflow-hidden">
                <Image src="/Logo.jpg" alt="Secure Worldz" width={38} height={38} className="rounded-full object-cover" />
              </div>
                <span>Secure Worldz</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Secure Worldz — Building secure futures.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://www.instagram.com/thecyberjai?igsh=MXUwemd1c2xqMWs0eQ==" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="size-5" />
                </Link>
                <Link 
                  href="https://whatsapp.com/channel/0029VaqZV815EjxpSjSrEd1T" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="size-5" />
                </Link>
                <Link 
                  href="https://youtube.com/@jai_tech1?si=q4dc3zup5rfwH-1n" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="size-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    AI Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Proworldz Academy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                    How We Work
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Secure Worldz. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
