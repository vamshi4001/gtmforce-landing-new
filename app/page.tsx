"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Target,
  Zap,
  Rocket,
  BarChart3,
  TrendingUp,
  Users,
  Cpu,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";
import { useEffect } from "react";

export default function GTMForcePage() {
  useEffect(() => {
    // Apply animations after content loads for better performance
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll(
        ".feature-card, .bento-item, .glow-card"
      );
      cards.forEach((card) => {
        card.classList.add("animate");
      });
    }, 100); // Small delay to ensure content is rendered

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen paper-background">
      <div className="constrained-container">
        <nav className="sticky top-0 z-50 theme-nav">
          <div className="responsive-padding">
            <div className="flex justify-between items-center h-20">
              <div className="flex flex-col items-center">
                <div className="flex items-center my-2">
                  <img
                    src="/gtmforce-logo.png"
                    alt="GTMForce"
                    className="h-8 sm:h-10 w-auto logo-dark"
                  />
                  <img
                    src="/gtm-logo-black.png"
                    alt="GTMForce"
                    className="h-8 sm:h-10 w-auto logo-light"
                  />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Ask • Act • Accelerate
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <ThemeSwitcher />
                <Button className="theme-button text-white text-sm lg:text-base px-4 lg:px-6">
                  Request Demo
                </Button>
              </div>
              <div className="md:hidden flex items-center space-x-2">
                <ThemeSwitcher />
                <Button variant="ghost" size="sm" className="text-foreground">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <section className="section-primary py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-primary/20 text-primary border-primary/30 text-xs sm:text-sm">
              AI-Native Strategy OS
            </Badge>
            <h1 className="responsive-text-hero font-extrabold mb-4 sm:mb-6 text-balance">
              <span className="gradient-text">Accelerate GTM Growth</span>
            </h1>
            <p className="responsive-text-subheading text-muted-foreground mb-3 sm:mb-4 font-light tracking-wide">
              Autonomous. Instant. Efficient.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto text-pretty">
              GTMForce is the only AI-native strategy OS that builds and
              launches multi-channel campaigns in seconds, slashing operational
              costs and unlocking strategic focus.
            </p>
            <Button
              size="lg"
              className="theme-button text-white text-sm lg:text-base px-4 lg:px-6"
            >
              Experience GTMForce
            </Button>
          </div>
        </section>

        <section className="section-textured-secondary py-12 sm:py-16 lg:py-24 responsive-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="responsive-text-heading font-bold mb-4 sm:mb-6 text-balance">
                Is GTM Silos Costing You{" "}
                <span className="gradient-text">Market Opportunities?</span>
              </h2>
            </div>
            {/* Grid Layout matching screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Tools Card - Gradient */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold">Tools</h3>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                </div>
                <p className="text-white/90 text-sm lg:text-base">
                  Fragmented GTM across multiple platforms.
                </p>
              </div>

              {/* Time Card - White */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-purple-600">
                    Time
                  </h3>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm lg:text-base">
                  Execution delaying revenue capture.
                </p>
              </div>

              {/* Central Image Card */}
              <div className="bg-blue-500 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700"></div>
                <div className="relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold mb-2">
                      Stressed Developer
                    </h3>
                    <p className="text-white/90 text-sm lg:text-base">
                      Complex integrations causing delays
                    </p>
                  </div>
                </div>
              </div>

              {/* Traction Card - Gradient */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold">Traction</h3>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                </div>
                <p className="text-white/90 text-sm lg:text-base">
                  Siloed systems hiding pipeline leaks.
                </p>
              </div>
            </div>

            {/* Bottom Row with Quote */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team Card - Gradient */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold">Team</h3>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                </div>
                <p className="text-white/90 text-sm lg:text-base">
                  Campaign feels like a cross-functional project.
                </p>
              </div>

              {/* Central Quote */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col justify-center">
                <blockquote className="text-lg lg:text-xl italic text-gray-800 mb-4 text-center">
                  "Every week feels like we're stitching data instead of
                  building pipeline."
                </blockquote>
                <cite className="text-purple-600 text-sm lg:text-base text-center font-medium">
                  - Growth Lead @ SaaS Startup
                </cite>
              </div>

              {/* Tech Card - White */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-purple-600">
                    Tech
                  </h3>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Cpu className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm lg:text-base">
                  AI stays untapped due to complex integrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="relative overflow-hidden">
          {/* Desktop: Full height with background image */}
          <div
            className="hidden lg:block relative min-h-[100vh] flex items-start justify-center pt-32"
            style={{
              backgroundImage: "url('/gtm-hub.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
              <h2
                className="responsive-text-heading font-bold mb-6 sm:mb-8 text-balance"
                style={{ color: "white" }}
              >
                <span
                  className="gradient-text"
                  style={{
                    background: "linear-gradient(to right, #f472b6, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Unified GTM Solution
                </span>
              </h2>
              <p
                className="text-lg sm:text-xl mb-16 sm:mb-20 max-w-4xl mx-auto text-pretty"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                An AI-native execution engine that unifies GTM teams, shortens
                time-to-market, and automates execution — closing the impact
                loop of go-to-market strategy.
              </p>
            </div>
          </div>

          {/* Mobile: Text above, image below */}
          <div className="lg:hidden">
            {/* Text section */}
            <div className="py-12 sm:py-16 px-4 sm:px-6">
              <div className="text-center">
                <h2 className="responsive-text-heading font-bold mb-6 sm:mb-8 text-balance text-foreground">
                  <span className="gradient-text">Unified GTM Solution</span>
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto text-pretty">
                  An AI-native execution engine that unifies GTM teams, shortens
                  time-to-market, and automates execution — closing the impact
                  loop of go-to-market strategy.
                </p>
              </div>
            </div>

            {/* Image section */}
            <div className="px-4 sm:px-6 pb-12 sm:pb-16">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/gtm-hub.svg"
                  alt="GTM Hub"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="section-secondary py-12 sm:py-16 lg:py-24 "
        >
          <div>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="responsive-text-heading font-bold mb-4 sm:mb-6 text-balance">
                How it works?{" "}
                <span className="gradient-text">
                  Ideas to Insight to Impact
                </span>{" "}
                at a Click.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Go from idea to execution in seconds with our AI-powered
                workflow
              </p>
            </div>
            <div className="bento-grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Ask",
                  description: "Known opportunities surfaced automatically",
                  icon: "/ask.svg",
                },
                {
                  step: "02",
                  title: "Act",
                  description: "Launch campaigns instantly across channels",
                  icon: "/act.svg",
                },
                {
                  step: "03",
                  title: "Accelerate",
                  description: "Close loop, measure, iterate automatically",
                  icon: "/acclerate.svg",
                },
              ].map((item, index) => (
                <div key={index} className="bento-item text-center group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-400 dark:text-primary/40 mb-3 sm:mb-4">
                    {item.step}
                  </div>
                  <div className="responsive-icon-md mx-auto mb-4 sm:mb-6 rounded-3xl bg-gradient-to-br from-pink-100 to-pink-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center icon-glow">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 sm:mt-16">
              <Button
                size="lg"
                className="theme-button text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Unify Your GTM Now
              </Button>
            </div>
          </div>
        </section>

        <section
          id="impact"
          className="section-primary py-12 sm:py-16 lg:py-24 "
        >
          <div>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="responsive-text-heading font-bold mb-4 sm:mb-6 text-balance">
                <span className="gradient-text">Autonomous GTM Quantified</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from companies using GTMForce to accelerate their
                growth
              </p>
            </div>
            <div className="bento-grid grid-cols-1 md:grid-cols-3">
              {[
                {
                  metric: "< 1 min",
                  description: "GTM Cycle time",
                  icon: Clock,
                  color: "text-green-400",
                },
                {
                  metric: "5x",
                  description: "More Campaigns Shipped",
                  icon: Rocket,
                  color: "text-pink-400",
                },
                {
                  metric: "$4K+",
                  description: "Saved per Campaign",
                  icon: DollarSign,
                  color: "text-yellow-400",
                },
              ].map((item, index) => (
                <div key={index} className="bento-item text-center group">
                  <div className="responsive-icon-sm mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center icon-glow">
                    <item.icon
                      className={`h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 ${item.color}`}
                    />
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-3 sm:mb-4">
                    {item.metric}
                  </div>
                  <p className="text-lg sm:text-xl text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-secondary py-12 sm:py-16 lg:py-24 responsive-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance text-foreground">
                    Why GTMForce? Because
                  </h2>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-balance text-foreground">
                    <span className="inline-block px-4 py-2 rounded-2xl bg-white text-purple-600 font-bold">
                      Growth
                    </span>{" "}
                    Shouldn't Be Hard.
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      title: "Unified Platform",
                      description:
                        "Replace 12+ tools. One interface, total control.",
                    },
                    {
                      title: "No-Code No-Hire Scalability",
                      description: "5X revenue volume with zero dependencies.",
                    },
                    {
                      title: "AI That Obeys",
                      description:
                        "It suggests, you approve. You're always in control.",
                    },
                    {
                      title: "Competitive Edge",
                      description:
                        "Increased speed. Reduced operational overhead.",
                    },
                    {
                      title: "Secured Governance",
                      description:
                        "Manage workflows securely with built-in governance.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-base sm:text-lg text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Why GTM Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4">
                  <img
                    src="/why-gtmforce.jpg"
                    alt="Why GTMForce"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-primary py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="responsive-text-heading font-bold mb-4 sm:mb-6 text-balance">
              Built for Leaders who Command{" "}
              <span className="gradient-text">
                Growth with Speed and Certainty
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto text-pretty">
              One platform that turns strategy into revenue at the speed of AI –
              no dependencies, no delays.
            </p>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* CMO Card */}
              <div className="feature-card bg-gradient-to-br from-pink-500/5 to-pink-600/5 border-pink-500/30">
                <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-center py-3 sm:py-4 rounded-t-2xl -m-6 mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold">CMO</h3>
                </div>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                    Full Visibility
                  </h4>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        Drive pipeline
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        Efficiency from single
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        command center
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GTM Executives Card */}
              <div className="feature-card bg-gradient-to-br from-purple-500/5 to-purple-600/5 border-purple-500/30">
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-center py-3 sm:py-4 rounded-t-2xl -m-6 mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold">
                    GTM Executives
                  </h3>
                </div>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                    Autonomous Ops
                  </h4>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        Execute vision instantly
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        End tool & team
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        dependencies.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales Leaders Card */}
              <div className="feature-card bg-gradient-to-br from-rose-500/5 to-rose-600/5 border-rose-500/30">
                <div className="bg-gradient-to-r from-rose-400 to-rose-500 text-white text-center py-3 sm:py-4 rounded-t-2xl -m-6 mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold">
                    Sales Leaders
                  </h3>
                </div>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                    Predictable Growth
                  </h4>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        Accelerate deal velocity
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        Prioritize real-time
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your GTM Brain section */}
        <section className="section-textured-primary py-12 sm:py-16 lg:py-24 responsive-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="responsive-text-heading font-bold mb-4 sm:mb-6 text-balance">
                Your GTM Brain:{" "}
                <span className="gradient-text">
                  Ask Anything, Execute Everything.
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
                5X more goal-driven campaigns-accelerating pipeline, revenue,
                and predictability.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Predictive Insights */}
              <div className="feature-card bg-white/80 border-pink-200 hover:border-pink-400 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm px-8 sm:px-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl ring-2 ring-purple-200 flex-shrink-0">
                      <img
                        src="/predictive.svg"
                        alt="Predictive Insights"
                        className="h-8 w-8 sm:h-10 sm:w-10 filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                      Predictive Insights
                    </h3>
                  </div>
                  <div className="text-right space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      "Where will we miss commit?"
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      "Which accounts are likely to churn?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Campaign Automation */}
              <div className="feature-card bg-white/80 border-pink-200 hover:border-pink-400 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm px-8 sm:px-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl ring-2 ring-purple-200 flex-shrink-0">
                      <img
                        src="/automation.svg"
                        alt="Campaign Automation"
                        className="h-8 w-8 sm:h-10 sm:w-10 filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                      Campaign Automation
                    </h3>
                  </div>
                  <div className="text-right space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      "Which accounts fit our ICP this week?"
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      "Get more sign-ups this month?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Revenue Expansion */}
              <div className="feature-card bg-white/80 border-pink-200 hover:border-pink-400 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm px-8 sm:px-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl ring-2 ring-purple-200 flex-shrink-0">
                      <img
                        src="/revenue.svg"
                        alt="Revenue Expansion"
                        className="h-8 w-8 sm:h-10 sm:w-10 filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                      Revenue Expansion
                    </h3>
                  </div>
                  <div className="text-right space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      "Which free users can we upsell?"
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      "What's driving CAC down?"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 sm:mt-16">
              <Button
                size="lg"
                className="theme-button text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4"
              >
                Join the GTM Revolution
              </Button>
            </div>
          </div>
        </section>

        <section className="section-secondary py-12 sm:py-16 lg:py-24 responsive-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <img
                src="/supercharge.svg"
                alt="Supercharge GTM"
                className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32"
              />
            </div>
            <h2 className="responsive-text-heading font-bold mb-4 sm:mb-6 text-balance">
              Ready to <span className="gradient-text">Supercharge GTM?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 text-pretty">
              Make it your competitive edge. GTMForce brings AI-driven execution
              and predictable pipeline – with zero friction.
            </p>
            <Button
              size="lg"
              className="theme-button text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4"
            >
              Request a Demo
            </Button>
          </div>
        </section>

        <footer className="section-secondary border-t py-8 sm:py-12 responsive-padding">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col items-center">
                <div className="flex items-center my-2">
                  <img
                    src="/gtmforce-logo.png"
                    alt="GTMForce"
                    className="h-8 sm:h-10 w-auto logo-dark"
                  />
                  <img
                    src="/gtm-logo-black.png"
                    alt="GTMForce"
                    className="h-8 sm:h-10 w-auto logo-light"
                  />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Ask • Act • Accelerate
                </div>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm text-center md:text-right">
                © 2025 GTMForce. All rights reserved. Accelerating growth with
                AI.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
