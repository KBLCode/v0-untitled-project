import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, BarChart2, CheckCircle, FileText, Search, Settings, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered SEO Content Optimization for UK Small Businesses
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    ContentRank helps you optimize your content for search engines without requiring technical SEO
                    expertise. Get actionable recommendations to improve your search visibility.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1.5">
                      Start Free Trial
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button size="lg" variant="outline">
                      View Features
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                  <div className="flex h-full flex-col rounded-md border shadow-sm">
                    <div className="flex h-12 items-center border-b px-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <div className="ml-4 text-sm font-medium">ContentRank Dashboard</div>
                    </div>
                    <div className="flex flex-1">
                      <div className="w-2/3 border-r p-4">
                        <div className="mb-4 h-6 w-24 rounded-md bg-muted" />
                        <div className="space-y-2">
                          <div className="h-4 w-full rounded-md bg-muted" />
                          <div className="h-4 w-full rounded-md bg-muted" />
                          <div className="h-4 w-3/4 rounded-md bg-muted" />
                        </div>
                        <div className="mt-6 mb-4 h-6 w-32 rounded-md bg-muted" />
                        <div className="space-y-2">
                          <div className="h-4 w-full rounded-md bg-muted" />
                          <div className="h-4 w-full rounded-md bg-muted" />
                          <div className="h-4 w-2/3 rounded-md bg-muted" />
                        </div>
                      </div>
                      <div className="w-1/3 p-4">
                        <div className="mb-4 h-6 w-full rounded-md bg-primary/10" />
                        <div className="mb-2 h-24 w-full rounded-md bg-primary/5" />
                        <div className="mb-4 h-6 w-full rounded-md bg-primary/10" />
                        <div className="space-y-2">
                          <div className="h-4 w-full rounded-md bg-muted" />
                          <div className="h-4 w-full rounded-md bg-muted" />
                          <div className="h-4 w-full rounded-md bg-muted" />
                          <div className="h-4 w-3/4 rounded-md bg-muted" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y bg-muted/40 py-12 md:py-16">
          <div className="container grid gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by UK Small Businesses</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join hundreds of UK small businesses already improving their search visibility with ContentRank.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold">400+</div>
                <div className="text-sm text-muted-foreground">Active Customers</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold">32%</div>
                <div className="text-sm text-muted-foreground">Avg. Traffic Increase</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold">75%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold">4.8/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 py-4">
              <Image
                src="/placeholder.svg?height=30&width=120"
                alt="Client logo"
                width={120}
                height={30}
                className="opacity-70 grayscale"
              />
              <Image
                src="/placeholder.svg?height=30&width=120"
                alt="Client logo"
                width={120}
                height={30}
                className="opacity-70 grayscale"
              />
              <Image
                src="/placeholder.svg?height=30&width=120"
                alt="Client logo"
                width={120}
                height={30}
                className="opacity-70 grayscale"
              />
              <Image
                src="/placeholder.svg?height=30&width=120"
                alt="Client logo"
                width={120}
                height={30}
                className="opacity-70 grayscale"
              />
              <Image
                src="/placeholder.svg?height=30&width=120"
                alt="Client logo"
                width={120}
                height={30}
                className="opacity-70 grayscale"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to optimize your content
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our AI-powered platform provides comprehensive tools to analyze and improve your content for better
                  search engine rankings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Content Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Analyzes your content using NLP and semantic analysis to identify optimization opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Competitive Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Evaluates top-ranking pages for your target keywords and identifies competitive gaps.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Optimization Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Generates specific, actionable recommendations to improve your content performance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Readability Optimizer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Analyzes and improves content readability for both users and search engines.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Rich Media & Schema</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Identifies opportunities for enhanced search features and generates implementation code.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Performance Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitors content performance improvements and correlates with optimization actions.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="/features">
                <Button size="lg">
                  View All Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Simple process, powerful results
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ContentRank makes SEO content optimization accessible to everyone, regardless of technical expertise.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Import your content</h3>
                    <p className="text-muted-foreground">
                      Paste your content or connect to your website to import existing pages.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Get AI-powered analysis</h3>
                    <p className="text-muted-foreground">
                      Our AI analyzes your content and compares it against top-ranking competitors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Implement recommendations</h3>
                    <p className="text-muted-foreground">
                      Follow our actionable recommendations to improve your content's search performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Track your improvements</h3>
                    <p className="text-muted-foreground">
                      Monitor your content's performance and see the impact of your optimizations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/signup">
                  <Button size="lg">
                    Try It For Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[500px] w-full max-w-[400px] overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                <div className="flex h-full flex-col rounded-md border shadow-sm">
                  <div className="flex h-12 items-center border-b px-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-sm font-medium">Content Analysis</div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-lg font-bold">Content Score</div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-600">
                        72
                      </div>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Keyword Usage</div>
                          <div className="text-sm">8/10</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-4/5 rounded-full bg-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Content Structure</div>
                          <div className="text-sm">6/10</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-3/5 rounded-full bg-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Readability</div>
                          <div className="text-sm">7/10</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-7/10 rounded-full bg-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-lg font-bold">Recommendations</div>
                      <div className="space-y-3">
                        <div className="rounded-lg border bg-amber-50 p-3">
                          <div className="flex items-start gap-2">
                            <div className="rounded-full bg-amber-100 p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-amber-600"
                              >
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                              </svg>
                            </div>
                            <div className="text-sm">Add more headings to structure your content better.</div>
                          </div>
                        </div>
                        <div className="rounded-lg border bg-green-50 p-3">
                          <div className="flex items-start gap-2">
                            <div className="rounded-full bg-green-100 p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-green-600"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                            <div className="text-sm">Good job using your primary keyword in the title.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Trusted by UK small businesses
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. See what our customers have to say about ContentRank.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Sarah Johnson"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="text-lg font-bold">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">Owner, Johnson Digital Marketing</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      "ContentRank has transformed how I approach SEO for my clients. The recommendations are clear and
                      actionable, and we've seen significant improvements in search rankings. It's like having an SEO
                      expert on the team without the hefty price tag."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Mark Thompson"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="text-lg font-bold">Mark Thompson</div>
                      <div className="text-sm text-muted-foreground">Founder, Thompson's Bakery</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      "As a small bakery owner, I never thought I'd be able to compete with larger chains online.
                      ContentRank has helped me optimize my website content, and now we're ranking on the first page for
                      local bakery searches. Our online orders have increased by 45%!"
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Emma Davies"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="text-lg font-bold">Emma Davies</div>
                      <div className="text-sm text-muted-foreground">Marketing Manager, Davies Consulting</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      "I've tried several SEO tools in the past, but they were either too complex or didn't provide
                      actionable insights. ContentRank strikes the perfect balance. It's intuitive to use and the
                      recommendations are specific and easy to implement."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="James Wilson"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="text-lg font-bold">James Wilson</div>
                      <div className="text-sm text-muted-foreground">Owner, Wilson's Plumbing Services</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      "ContentRank has been a game-changer for my plumbing business. I'm not tech-savvy, but their
                      platform is so easy to use. We've seen a 32% increase in website traffic and more importantly, a
                      25% increase in service calls directly from our website."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your business. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For solopreneurs and very small businesses</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">£29.99</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">£35.99 inc. VAT</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>5 content analyses per month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Basic recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Readability analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/signup?plan=starter">
                      <Button className="w-full">Start Free Trial</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <div className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                    Most Popular
                  </div>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For small businesses and freelancers</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">£59.99</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">£71.99 inc. VAT</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>20 content analyses per month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Advanced recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Competitor analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Schema markup generator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Priority email support</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/signup?plan=professional">
                      <Button className="w-full">Start Free Trial</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Agency</CardTitle>
                  <CardDescription>For small agencies and marketing consultancies</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">£149.99</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">£179.99 inc. VAT</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>50 content analyses per month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>All Professional features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>White-label reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Team collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Priority phone support</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/signup?plan=agency">
                      <Button className="w-full">Start Free Trial</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground">
                All plans include a 14-day free trial. No credit card required. Cancel anytime. VAT is included in all
                prices. VAT-registered businesses can reclaim the VAT element.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to improve your content's search performance?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join hundreds of UK small businesses already using ContentRank to optimize their content and improve
                their search visibility.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link href="/signup">
                <Button size="lg" className="gap-1.5">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
