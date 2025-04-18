"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, Edit, FileText, Filter, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"

interface ContentItem {
  id: string
  title: string
  status: "draft" | "published" | "archived"
  score: number
  lastUpdated: string
  type: "blog" | "page" | "social"
}

const contentItems: ContentItem[] = [
  {
    id: "1",
    title: "10 SEO Tips for 2023",
    status: "published",
    score: 92,
    lastUpdated: "2023-04-12",
    type: "blog",
  },
  {
    id: "2",
    title: "Content Marketing Guide",
    status: "published",
    score: 87,
    lastUpdated: "2023-04-10",
    type: "blog",
  },
  {
    id: "3",
    title: "Keyword Research Tutorial",
    status: "draft",
    score: 84,
    lastUpdated: "2023-04-08",
    type: "blog",
  },
  {
    id: "4",
    title: "Link Building Strategies",
    status: "draft",
    score: 79,
    lastUpdated: "2023-04-05",
    type: "page",
  },
  {
    id: "5",
    title: "Social Media Post - Product Launch",
    status: "archived",
    score: 65,
    lastUpdated: "2023-03-28",
    type: "social",
  },
  {
    id: "6",
    title: "About Us Page",
    status: "published",
    score: 88,
    lastUpdated: "2023-03-20",
    type: "page",
  },
]

export default function ContentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredContent = contentItems.filter((item) => {
    // Filter by search query
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Filter by tab
    if (activeTab === "all") return true
    if (activeTab === "published" && item.status === "published") return true
    if (activeTab === "drafts" && item.status === "draft") return true
    if (activeTab === "archived" && item.status === "archived") return true

    return false
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Content</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Content
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search content..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Sort
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <ContentList items={filteredContent} />
        </TabsContent>
        <TabsContent value="published" className="mt-4">
          <ContentList items={filteredContent} />
        </TabsContent>
        <TabsContent value="drafts" className="mt-4">
          <ContentList items={filteredContent} />
        </TabsContent>
        <TabsContent value="archived" className="mt-4">
          <ContentList items={filteredContent} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ContentList({ items }: { items: ContentItem[] }) {
  if (items.length === 0) {
    return (
      <div className="flex h-[300px] w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
        <FileText className="h-10 w-10 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">No content found</h3>
        <p className="mt-2 text-sm text-muted-foreground">Create new content or try a different search.</p>
        <Button className="mt-4">
          <Plus className="mr-2 h-4 w-4" />
          New Content
        </Button>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="line-clamp-1 text-lg">{item.title}</CardTitle>
                <CardDescription className="line-clamp-1 mt-1">Last updated: {item.lastUpdated}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center gap-2">
              <Badge
                variant={item.status === "published" ? "default" : item.status === "draft" ? "outline" : "secondary"}
                className="capitalize"
              >
                {item.status}
              </Badge>
              <Badge variant="outline" className="capitalize">
                {item.type}
              </Badge>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="text-sm font-medium">SEO Score:</div>
              <div className="flex items-center gap-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: "80px",
                    background: `linear-gradient(90deg, ${
                      item.score >= 80 ? "#16a34a" : item.score >= 60 ? "#d97706" : "#dc2626"
                    } ${item.score}%, #e5e7eb ${item.score}%)`,
                  }}
                />
                <span className="text-sm font-medium">{item.score}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button asChild className="w-full">
              <Link href={`/dashboard/content/editor/${item.id}`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit Content
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
