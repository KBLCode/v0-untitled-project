"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ContentEditor } from "@/components/content/editor"
import { ArrowLeft, Eye, Save, Settings } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function NewContentPage() {
  const router = useRouter()
  const [content, setContent] = useState("<p>Start writing your content here...</p>")
  const [title, setTitle] = useState("")
  const [activeTab, setActiveTab] = useState("editor")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSave() {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would save the content to your backend
    // For demo purposes, we'll just redirect to the content list
    router.push("/dashboard/content")
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
          <h1 className="text-xl font-bold tracking-tight">Create New Content</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button size="sm" onClick={handleSave} disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save"}
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
                    placeholder="Enter a title for your content"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="content-type">Content Type</Label>
                    <Select>
                      <SelectTrigger id="content-type">
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blog">Blog Post</SelectItem>
                        <SelectItem value="page">Web Page</SelectItem>
                        <SelectItem value="article">Article</SelectItem>
                        <SelectItem value="product">Product Description</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="primary-keyword">Primary Keyword</Label>
                    <Input id="primary-keyword" placeholder="e.g. SEO optimization" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea
                    id="meta-description"
                    placeholder="Enter a meta description for SEO (150-160 characters recommended)"
                    className="resize-none h-20"
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
                      <h1 className="mb-4 text-2xl font-bold">{title || "Untitled Content"}</h1>
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
                <h3 className="font-medium">SEO Tips</h3>
                <div className="space-y-3 text-sm">
                  <div className="rounded-lg border p-3">
                    <p className="font-medium">Title Best Practices</p>
                    <ul className="mt-1 list-disc pl-4 text-muted-foreground">
                      <li>Include your primary keyword</li>
                      <li>Keep it under 60 characters</li>
                      <li>Make it compelling and descriptive</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-3">
                    <p className="font-medium">Content Structure</p>
                    <ul className="mt-1 list-disc pl-4 text-muted-foreground">
                      <li>Use H2 and H3 headings to organize content</li>
                      <li>Include your keyword in at least one heading</li>
                      <li>Keep paragraphs short (3-4 sentences)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-3">
                    <p className="font-medium">Meta Description</p>
                    <ul className="mt-1 list-disc pl-4 text-muted-foreground">
                      <li>Include your primary keyword</li>
                      <li>Keep it between 150-160 characters</li>
                      <li>Make it compelling to increase click-through rate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <h3 className="font-medium">Keyword Research</h3>
                <div className="text-sm text-muted-foreground">
                  <p>
                    Need help finding the right keywords? Use our keyword research tool to discover high-value keywords
                    for your content.
                  </p>
                  <Button className="mt-3 w-full" variant="outline" size="sm">
                    Open Keyword Research Tool
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
