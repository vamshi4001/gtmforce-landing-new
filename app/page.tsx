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

export default function GTMForcePage() {
  return (
    <div className="min-h-screen paper-background">
      <div className="constrained-container">
        <nav className="sticky top-0 z-50 theme-nav">
          <div className="max-w-7xl mx-auto responsive-padding">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <img
                  src="/gtmforce-logo.png"
                  alt="GTMForce"
                  className="h-12 sm:h-14 w-auto logo-dark"
                />
                <img
                  src="/gtm-logo-black.png"
                  alt="GTMForce"
                  className="h-12 sm:h-14 w-auto logo-light"
                />
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

        <section className="section-primary py-12 sm:py-16 lg:py-24 responsive-padding">
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

        <section className="section-secondary py-12 sm:py-16 lg:py-24 responsive-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="responsive-text-heading font-bold mb-4 sm:mb-6 text-balance">
                Is GTM Silos Costing You{" "}
                <span className="gradient-text">Market Opportunities?</span>
              </h2>
            </div>
            <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Tools",
                  description:
                    "Fragmented GTM stack leads to lost opportunities",
                  color: "text-pink-400",
                },
                {
                  icon: Clock,
                  title: "Time",
                  description: "Teams waste days aligning strategy",
                  color: "text-purple-400",
                },
                {
                  icon: TrendingUp,
                  title: "Traction",
                  description: "Missed revenue milestones",
                  color: "text-cyan-400",
                },
                {
                  icon: Users,
                  title: "Team",
                  description: "Everyone feels like they're spinning wheels",
                  color: "text-pink-400",
                },
                {
                  icon: Cpu,
                  title: "Tech",
                  description: "Legacy, siloed tools slow execution",
                  color: "text-purple-400",
                },
                {
                  icon: DollarSign,
                  title: "Cost",
                  description: "Inefficient processes drain resources",
                  color: "text-cyan-400",
                },
              ].map((item, index) => (
                <div key={index} className="bento-item group">
                  <div
                    className={`responsive-icon-sm mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center icon-glow`}
                  >
                    <item.icon
                      className={`h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 ${item.color}`}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground text-center text-pretty">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="solution"
          className="section-primary py-12 sm:py-16 lg:py-24 responsive-padding"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="responsive-text-heading font-bold mb-6 sm:mb-8 text-balance">
                <span className="gradient-text">Unified GTM Solution</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto text-pretty">
                An AI-native execution engine that unifies GTM teams, shortens
                time-to-market, and automates execution — closing the impact
                loop of go-to-market strategy.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              <div className="feature-card">
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: CheckCircle,
                      text: "Seamless integration with existing tools",
                      color: "text-green-400",
                    },
                    {
                      icon: Zap,
                      text: "Real-time strategy optimization",
                      color: "text-yellow-400",
                    },
                    {
                      icon: Rocket,
                      text: "Automated campaign execution",
                      color: "text-pink-400",
                    },
                    {
                      icon: BarChart3,
                      text: "Predictive analytics and insights",
                      color: "text-purple-400",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 sm:space-x-4"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center icon-glow">
                        <feature.icon
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${feature.color}`}
                        />
                      </div>
                      <span className="text-sm sm:text-base text-muted-foreground">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="feature-card border-0 m-0 overflow-hidden rounded-lg"
                style={{ padding: 0 }}
              >
                <img
                  src="/gtm-hub.svg"
                  alt="GTM Hub"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="section-secondary py-12 sm:py-16 lg:py-24 responsive-padding"
        >
          <div className="max-w-7xl mx-auto">
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
          className="section-primary py-12 sm:py-16 lg:py-24 responsive-padding"
        >
          <div className="max-w-7xl mx-auto">
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
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
                    Why GTMForce? Because
                  </h2>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-balance">
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
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-base sm:text-lg text-white/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Generated Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-4">
                  <img
                    src="/placeholder-vsjpr.png"
                    alt="Analytics Dashboard"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-primary py-12 sm:py-16 lg:py-24 responsive-padding">
          <div className="max-w-4xl mx-auto text-center">
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
              <div className="feature-card bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-3 sm:py-4 rounded-t-2xl -m-6 mb-4 sm:mb-6">
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
              <div className="feature-card bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-center py-3 sm:py-4 rounded-t-2xl -m-6 mb-4 sm:mb-6">
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
              <div className="feature-card bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-3 sm:py-4 rounded-t-2xl -m-6 mb-4 sm:mb-6">
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
        <section className="section-secondary py-12 sm:py-16 lg:py-24 responsive-padding">
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
              <div className="feature-card bg-gradient-to-r from-purple-600/20 to-purple-700/20 border-purple-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <img
                        src="/predictive.svg"
                        alt="Predictive Insights"
                        className="h-6 w-6 sm:h-8 sm:w-8"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                      Predictive Insights
                    </h3>
                  </div>
                  <div className="text-right space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      "Where will we miss commit?"
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      "Which accounts are likely to churn?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Campaign Automation */}
              <div className="feature-card bg-gradient-to-r from-purple-600/20 to-purple-700/20 border-purple-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <img
                        src="/automation.svg"
                        alt="Campaign Automation"
                        className="h-6 w-6 sm:h-8 sm:w-8"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                      Campaign Automation
                    </h3>
                  </div>
                  <div className="text-right space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      "Which accounts fit our ICP this week?"
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      "Get more sign-ups this month?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Revenue Expansion */}
              <div className="feature-card bg-gradient-to-r from-purple-600/20 to-purple-700/20 border-purple-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <img
                        src="/revenue.svg"
                        alt="Revenue Expansion"
                        className="h-6 w-6 sm:h-8 sm:w-8"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                      Revenue Expansion
                    </h3>
                  </div>
                  <div className="text-right space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      "Which free users can we upsell?"
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
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
                className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
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
              <img
                src="/gtmforce-logo.png"
                alt="GTMForce"
                className="h-12 sm:h-14 w-auto logo-dark"
              />
              <img
                src="/gtm-logo-black.png"
                alt="GTMForce"
                className="h-12 sm:h-14 w-auto logo-light"
              />
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
