import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, BarChart2, CheckCircle2, FileText, Search, TrendingUp } from "lucide-react"

export default function AnalysisPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Content Analysis</h1>
        <Button>
          <Search className="mr-2 h-4 w-4" />
          Analyze New Content
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Content Score</CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78/100</div>
                <Progress value={78} className="mt-2 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Readability Score</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85/100</div>
                <Progress value={85} className="mt-2 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Keyword Optimization</CardTitle>
                <Search className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72/100</div>
                <Progress value={72} className="mt-2 h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Traffic Growth</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12.5%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
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
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center text-muted-foreground">
                  Performance Chart Placeholder
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Top Recommendations</CardTitle>
                <CardDescription>Actionable insights to improve your content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-2 rounded-md border p-3">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <div className="space-y-1">
                      <p className="text-sm">Your content is too short. Aim for at least 300 words for better SEO.</p>
                      <Badge variant="outline">High priority</Badge>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-md border p-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <div className="space-y-1">
                      <p className="text-sm">Good job using your primary keyword in the title.</p>
                      <Badge variant="outline">Medium priority</Badge>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-md border p-3">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <div className="space-y-1">
                      <p className="text-sm">Consider adding more headings to structure your content.</p>
                      <Badge variant="outline">Medium priority</Badge>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-md border p-3">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <div className="space-y-1">
                      <p className="text-sm">Your meta description is missing.</p>
                      <Badge variant="outline">High priority</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Analysis</CardTitle>
              <CardDescription>Track your keyword performance and optimization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center text-muted-foreground">
                Keyword Analysis Dashboard Placeholder
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Competitor Analysis</CardTitle>
              <CardDescription>Compare your content with competitors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center text-muted-foreground">
                Competitor Analysis Dashboard Placeholder
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Track your content's performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center text-muted-foreground">
                Performance Metrics Dashboard Placeholder
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
