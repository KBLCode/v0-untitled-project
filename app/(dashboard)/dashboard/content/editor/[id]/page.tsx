"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ContentEditor } from "@/components/content/editor"
import { AlertCircle, ArrowLeft, CheckCircle2, Clock, Eye, FileText, Save, Settings } from "lucide-react"

export default function EditorPage({ params }: { params: { id: string } }) {
  const [content, setContent] = useState(
    "<p>This is a sample content. Start editing to see real-time SEO analysis.</p>",
  )
  const [title, setTitle] = useState("10 SEO Tips for 2023")
  const [activeTab, setActiveTab] = useState("editor")

  // Mock analysis data
  const analysisData = {
    score: 78,
    readability: 85,
    keywordDensity: 2.3,
    recommendations: [
      {
        id: "1",
        type: "warning",
        message: "Your content is too short. Aim for at least 300 words for better SEO.",
        priority: "high",
      },
      {
        id: "2",
        type: "success",
        message: "Good job using your primary keyword in the title.",
        priority: "medium",
      },
      {
        id: "3",
        type: "info",
        message: "Consider adding more headings to structure your content.",
        priority: "medium",
      },
      {
        id: "4",
        type: "warning",
        message: "Your meta description is missing.",
        priority: "high",
      },
    ],
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="/dashboard/content">
              <ArrowLeft className="h-4 w-4" />
            </a>
          </Button>
          <h1 className="text-xl font-bold tracking-tight">Edit Content</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Auto-saved 2 minutes ago</span>
          </div>
          <Button variant="outline" size="sm">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="grid flex-1 gap-4 md:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-lg font-medium"
                  />
                </div>
                <Tabs defaultValue="editor" onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="editor">Editor</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="editor" className="mt-4">
                    <ContentEditor content={content} onChange={setContent} />
                  </TabsContent>
                  <TabsContent value="preview" className="mt-4">
                    <div className="rounded-md border p-4">
                      <h1 className="mb-4 text-2xl font-bold">{title}</h1>
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">SEO Score</h3>
                  <Badge
                    variant={
                      analysisData.score >= 80 ? "default" : analysisData.score >= 60 ? "outline" : "destructive"
                    }
                  >
                    {analysisData.score}/100
                  </Badge>
                </div>
                <Progress
                  value={analysisData.score}
                  className="h-2"
                  style={{
                    background: "#e5e7eb",
                  }}
                  indicatorStyle={{
                    background: `${
                      analysisData.score >= 80 ? "#16a34a" : analysisData.score >= 60 ? "#d97706" : "#dc2626"
                    }`,
                  }}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Readability</div>
                    <div className="text-sm text-muted-foreground">{analysisData.readability}/100</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Keyword Density</div>
                    <div className="text-sm text-muted-foreground">{analysisData.keywordDensity}%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <h3 className="font-medium">Recommendations</h3>
                <div className="space-y-3">
                  {analysisData.recommendations.map((recommendation) => (
                    <div key={recommendation.id} className="flex items-start gap-2 rounded-md border p-3">
                      {recommendation.type === "warning" ? (
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                      ) : recommendation.type === "success" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <FileText className="h-5 w-5 text-blue-500" />
                      )}
                      <div className="space-y-1">
                        <p className="text-sm">{recommendation.message}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="capitalize">
                            {recommendation.priority} priority
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
