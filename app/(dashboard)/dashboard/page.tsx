import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, BarChart2, FileText, TrendingUp, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's an overview of your content performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/content/new">
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              New Content
            </Button>
          </Link>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Content Score</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85/100</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500">+5</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">SEO Health</CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92/100</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500">+3</span> from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Traffic Today</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2k</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  <span className="text-green-500">+12%</span> from yesterday
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Pending</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="text-amber-500">4 high priority</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>Your content performance over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full rounded-md bg-muted/20 p-4">
                  <div className="flex h-full flex-col justify-between">
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="flex flex-col space-y-1">
                          <div
                            className="h-32 w-full rounded-md bg-primary"
                            style={{
                              opacity: 0.1 + Math.random() * 0.9,
                              height: `${100 + Math.random() * 100}px`,
                            }}
                          />
                          <span className="text-xs text-muted-foreground text-center">
                            {new Date(Date.now() - (6 - i) * 86400000).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                            })}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">Page Views</span>
                        <span className="text-2xl font-bold">4,289</span>
                        <span className="text-xs text-green-500">+12.4%</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">Avg. Time</span>
                        <span className="text-2xl font-bold">2:45</span>
                        <span className="text-xs text-green-500">+0:15</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">Bounce Rate</span>
                        <span className="text-2xl font-bold">42.3%</span>
                        <span className="text-xs text-green-500">-3.1%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Top Content</CardTitle>
                <CardDescription>Your best performing content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "10 SEO Tips for 2023", score: 92 },
                    { title: "Content Marketing Guide", score: 87 },
                    { title: "Keyword Research Tutorial", score: 84 },
                    { title: "Link Building Strategies", score: 79 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{item.title}</p>
                        <p className="text-sm text-muted-foreground">Score: {item.score}/100</p>
                      </div>
                      <div className="ml-4 flex items-center gap-2">
                        <Progress
                          value={item.score}
                          className="h-2 w-[80px]"
                          style={{
                            background: "#e5e7eb",
                          }}
                          indicatorStyle={{
                            background: `${item.score >= 80 ? "#16a34a" : item.score >= 60 ? "#d97706" : "#dc2626"}`,
                          }}
                        />
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Link href="/content">
                    <Button variant="outline" size="sm">
                      View All Content
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>SEO Recommendations</CardTitle>
                <CardDescription>Latest improvement suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3">
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
                        <p className="text-sm font-medium">Add more headings to your "Content Marketing Guide"</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Improve content structure for better readability and SEO
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
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
                        <p className="text-sm font-medium">Optimize meta description for "SEO Tips" article</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Current description is too short and missing keywords
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <Link href="/dashboard/analysis">
                    <Button variant="outline" size="sm">
                      View All Recommendations
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your Plan</CardTitle>
                <CardDescription>Professional Plan - Monthly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Content Analyses</p>
                      <p className="text-xs text-muted-foreground">12 of 20 used this month</p>
                    </div>
                    <div className="text-sm font-medium">60%</div>
                  </div>
                  <Progress value={60} className="h-2" />

                  <div className="rounded-lg border p-3 bg-muted/10">
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
                        <p className="text-sm font-medium">Next billing date: May 15, 2023</p>
                        <p className="text-xs text-muted-foreground mt-1">£59.99/month (£71.99 inc. VAT)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      Change Plan
                    </Button>
                    <Button variant="default" size="sm">
                      Upgrade to Agency
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics for your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <BarChart2 className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    View detailed analytics about your content performance
                  </p>
                  <Button className="mt-4" variant="outline">
                    <Link href="/dashboard/analytics">Go to Analytics</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Reports Dashboard</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Generate custom reports for your content performance
                  </p>
                  <Button className="mt-4" variant="outline">
                    Generate Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
