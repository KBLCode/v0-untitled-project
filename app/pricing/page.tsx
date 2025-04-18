import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
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
                  Simple, Transparent Pricing for UK Small Businesses
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your business. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="mt-4 text-center text-sm text-muted-foreground">No credit card required</div>
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
                  <div className="mt-4 text-center text-sm text-muted-foreground">No credit card required</div>
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
                  <div className="mt-4 text-center text-sm text-muted-foreground">No credit card required</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Annual Pricing Section */}
        <section className="w-full py-12 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Save with Annual Plans</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">Get 2 months free when you pay annually.</p>
              </div>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter Annual</CardTitle>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">£299.90</span>
                    <span className="ml-1 text-muted-foreground">/year</span>
                  </div>
                  <div className="text-sm text-muted-foreground">£359.88 inc. VAT</div>
                  <div className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
                    Save £59.98
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-6">
                    <Link href="/signup?plan=starter-annual">
                      <Button className="w-full" variant="outline">
                        Start Free Trial
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional Annual</CardTitle>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">£599.90</span>
                    <span className="ml-1 text-muted-foreground">/year</span>
                  </div>
                  <div className="text-sm text-muted-foreground">£719.88 inc. VAT</div>
                  <div className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
                    Save £119.98
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-6">
                    <Link href="/signup?plan=professional-annual">
                      <Button className="w-full" variant="outline">
                        Start Free Trial
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Agency Annual</CardTitle>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">£1,499.90</span>
                    <span className="ml-1 text-muted-foreground">/year</span>
                  </div>
                  <div className="text-sm text-muted-foreground">£1,799.88 inc. VAT</div>
                  <div className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
                    Save £299.98
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-6">
                    <Link href="/signup?plan=agency-annual">
                      <Button className="w-full" variant="outline">
                        Start Free Trial
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Feature Comparison</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Compare features across all plans to find the right fit for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-5xl overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 text-left font-medium">Feature</th>
                    <th className="py-4 text-center font-medium">Starter</th>
                    <th className="py-4 text-center font-medium">Professional</th>
                    <th className="py-4 text-center font-medium">Agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">Content Analyses per Month</td>
                    <td className="py-4 text-center">5</td>
                    <td className="py-4 text-center">20</td>
                    <td className="py-4 text-center">50</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Basic Content Analysis</td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Readability Analysis</td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Competitor Analysis</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Advanced Recommendations</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Schema Markup Generator</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">White-label Reports</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Team Collaboration</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">-</td>
                    <td className="py-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Support</td>
                    <td className="py-4 text-center">Email</td>
                    <td className="py-4 text-center">Priority Email</td>
                    <td className="py-4 text-center">Priority Phone & Email</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Find answers to common questions about ContentRank pricing and features.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all plans include a 14-day free trial. No credit card is required to start your trial, and you
                    can cancel at any time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I change plans later?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be
                    available immediately. If you downgrade, the changes will take effect at the start of your next
                    billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American Express) and direct debit payments via
                    GoCardless for UK customers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is VAT included in the prices?</AccordionTrigger>
                  <AccordionContent>
                    The prices shown exclude VAT. UK VAT at 20% will be added to the final price at checkout.
                    VAT-registered businesses can reclaim the VAT element.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What happens if I exceed my monthly content analyses?</AccordionTrigger>
                  <AccordionContent>
                    If you reach your monthly limit, you won't be able to run additional analyses until your next
                    billing cycle. You can upgrade your plan at any time to increase your monthly limit.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Do you offer discounts for non-profits or educational institutions?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer special pricing for non-profits, educational institutions, and charities. Please
                    contact our sales team for more information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll
                    still have access to ContentRank until the end of your current billing period.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
