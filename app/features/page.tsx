import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features for Effective SEO Content Optimization
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  ContentRank provides all the tools you need to optimize your content for search engines without
                  requiring technical SEO expertise.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1.5">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Analysis Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Feature 1
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Content Analysis Engine</h2>
              <p className="text-muted-foreground md:text-xl">
                Our advanced content analysis engine uses NLP and semantic analysis to evaluate your content's SEO
                effectiveness.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Semantic content analysis using vector embeddings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Keyword density and placement analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Content structure evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Entity recognition and relationship mapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>UK English language optimization</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
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
                          <div className="text-sm font-medium">Semantic Richness</div>
                          <div className="text-sm">7/10</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-7/10 rounded-full bg-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-bold">Key Findings</div>
                      <div className="rounded-lg border bg-muted/20 p-3 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Primary keyword appears in title and first paragraph</li>
                          <li>Content structure needs improvement with more headings</li>
                          <li>Good use of related terms and semantic entities</li>
                          <li>Content length is below competitor average (1,200 words)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Intelligence Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                <div className="flex h-full flex-col rounded-md border shadow-sm">
                  <div className="flex h-12 items-center border-b px-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-sm font-medium">Competitive Intelligence</div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="mb-4">
                      <div className="text-lg font-bold">Top Competitors for "UK Small Business Accounting"</div>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Competitor 1</div>
                          <div className="text-sm text-muted-foreground">Position #1</div>
                        </div>
                        <div className="mt-2 space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <div>Content Length</div>
                            <div>2,450 words</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>Keyword Density</div>
                            <div>2.3%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>Headings</div>
                            <div>8 (H2: 5, H3: 3)</div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Competitor 2</div>
                          <div className="text-sm text-muted-foreground">Position #2</div>
                        </div>
                        <div className="mt-2 space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <div>Content Length</div>
                            <div>1,850 words</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>Keyword Density</div>
                            <div>1.8%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>Headings</div>
                            <div>6 (H2: 4, H3: 2)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-bold">Content Gap Analysis</div>
                      <div className="rounded-lg border bg-muted/20 p-3 text-sm">
                        <div className="font-medium mb-1">Missing Topics:</div>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>UK Tax Compliance for Small Businesses</li>
                          <li>Making Tax Digital Requirements</li>
                          <li>Small Business Accounting Software Comparison</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Feature 2
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Competitive Intelligence</h2>
              <p className="text-muted-foreground md:text-xl">
                Evaluate top-ranking pages for your target keywords and identify competitive gaps to improve your
                content strategy.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>SERP analysis for UK search results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Content gap identification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Semantic richness comparison</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Content length benchmarking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Featured snippet opportunity detection</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization Recommendations Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Feature 3
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Optimization Recommendation Engine</h2>
              <p className="text-muted-foreground md:text-xl">
                Generate specific, actionable recommendations to improve your content performance without guesswork.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Title tag optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Meta description enhancement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Header structure recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Content enhancement suggestions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Internal linking suggestions</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                <div className="flex h-full flex-col rounded-md border shadow-sm">
                  <div className="flex h-12 items-center border-b px-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-sm font-medium">Optimization Recommendations</div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="mb-4">
                      <div className="text-lg font-bold">Priority Recommendations</div>
                    </div>
                    <div className="space-y-4">
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
                          <div>
                            <div className="font-medium">Improve Title Tag</div>
                            <div className="text-sm">
                              Current: "Small Business Accounting Tips"
                              <br />
                              Suggested: "10 Essential UK Small Business Accounting Tips for 2023"
                            </div>
                          </div>
                        </div>
                      </div>
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
                          <div>
                            <div className="font-medium">Add More Headings</div>
                            <div className="text-sm">
                              Add 3-4 more H2 headings to structure your content better. Suggested headings:
                              <ul className="list-disc pl-5 mt-1">
                                <li>UK Tax Compliance for Small Businesses</li>
                                <li>Making Tax Digital Requirements</li>
                                <li>Choosing the Right Accounting Software</li>
                              </ul>
                            </div>
                          </div>
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
                          <div>
                            <div className="font-medium">Good Keyword Usage</div>
                            <div className="text-sm">
                              Your primary keyword appears in the first paragraph and throughout the content at a good
                              density (1.8%).
                            </div>
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

        {/* Readability Optimizer Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                <div className="flex h-full flex-col rounded-md border shadow-sm">
                  <div className="flex h-12 items-center border-b px-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-sm font-medium">Readability Optimizer</div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-lg font-bold">Readability Score</div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-600">
                        68
                      </div>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Sentence Length</div>
                          <div className="text-sm">6/10</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-3/5 rounded-full bg-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Paragraph Structure</div>
                          <div className="text-sm">7/10</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-7/10 rounded-full bg-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Active Voice Usage</div>
                          <div className="text-sm">5/10</div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-1/2 rounded-full bg-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-bold">Readability Suggestions</div>
                      <div className="rounded-lg border bg-muted/20 p-3 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Shorten sentences in paragraphs 2 and 5</li>
                          <li>Convert passive voice to active in section 3</li>
                          <li>Break up paragraph 4 into smaller chunks</li>
                          <li>Add more transition words between paragraphs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Feature 4
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Readability Optimizer</h2>
              <p className="text-muted-foreground md:text-xl">
                Analyze and improve your content's readability for both users and search engines to enhance engagement
                metrics.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>UK readability scoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Sentence structure analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Paragraph length optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Active voice enhancement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Mobile readability assessment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rich Media & Schema Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Feature 5
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Rich Media & Schema Recommendations</h2>
              <p className="text-muted-foreground md:text-xl">
                Identify opportunities for enhanced search features and generate implementation code without technical
                expertise.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Image opportunity identification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Video content recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Schema markup generator (JSON-LD)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Rich result opportunity analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Alternative text optimization</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                <div className="flex h-full flex-col rounded-md border shadow-sm">
                  <div className="flex h-12 items-center border-b px-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-sm font-medium">Schema Generator</div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="mb-4">
                      <div className="text-lg font-bold">Schema Markup Generator</div>
                    </div>
                    <div className="mb-4 space-y-2">
                      <div className="text-sm font-medium">Schema Type</div>
                      <div className="rounded-md border p-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-primary"></div>
                          <span>Article</span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 space-y-2">
                      <div className="text-sm font-medium">Generated Schema</div>
                      <div className="rounded-md border bg-muted/20 p-2 text-xs font-mono overflow-auto">
                        {`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "10 Essential UK Small Business Accounting Tips for 2023",
  "author": {
    "@type": "Person",
    "name": "Jane Smith"
  },
  "datePublished": "2023-04-15",
  "dateModified": "2023-04-15",
  "publisher": {
    "@type": "Organization",
    "name": "Your Business Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourbusiness.com/logo.png"
    }
  },
  "description": "Learn essential accounting tips for UK small businesses in 2023, including tax compliance and software recommendations."
}
</script>`}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Rich Result Preview</div>
                      <div className="rounded-md border p-3 text-sm">
                        <div className="text-blue-600 hover:underline cursor-pointer font-medium">
                          10 Essential UK Small Business Accounting Tips for 2023
                        </div>
                        <div className="text-green-700 text-xs">https://yourbusiness.com/accounting-tips</div>
                        <div className="text-sm text-gray-700 mt-1">
                          15 Apr 2023 — Learn essential accounting tips for UK small businesses in 2023, including tax
                          compliance and software recommendations.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Tracking Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-4 shadow-xl">
                <div className="flex h-full flex-col rounded-md border shadow-sm">
                  <div className="flex h-12 items-center border-b px-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-sm font-medium">Performance Tracking</div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="mb-4">
                      <div className="text-lg font-bold">Content Performance</div>
                    </div>
                    <div className="mb-6">
                      <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                        Performance Chart Placeholder
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Keyword: "UK Small Business Accounting"</div>
                        </div>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div>Initial Position</div>
                            <div>Not Ranking</div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div>Current Position</div>
                            <div className="text-green-600 font-medium">Position #8</div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div>Impressions (30 days)</div>
                            <div>1,245</div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div>Clicks (30 days)</div>
                            <div>187</div>
                          </div>
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
                          <div>
                            <div className="font-medium">Optimization Impact</div>
                            <div className="text-sm">
                              Your content optimizations have improved your ranking by 8+ positions and increased
                              traffic by 32%.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Feature 6
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">UK SEO Performance Tracking</h2>
              <p className="text-muted-foreground md:text-xl">
                Monitor your content performance improvements and correlate with optimization actions to demonstrate
                ROI.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Content health score tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Before/after comparison</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>UK keyword position monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Performance prediction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Optimization impact analysis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to optimize your content?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Start your 14-day free trial today and see how ContentRank can help improve your search visibility.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1.5">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
