"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, UserPlus } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  email: string
  role: "owner" | "admin" | "editor" | "viewer"
  avatar?: string
  initials: string
}

export default function TeamPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "owner",
      initials: "JD",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "admin",
      initials: "SJ",
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "editor",
      initials: "MB",
    },
    {
      id: "4",
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      role: "viewer",
      initials: "EW",
    },
    {
      id: "5",
      name: "David Clark",
      email: "david.clark@example.com",
      role: "editor",
      initials: "DC",
    },
  ])

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "editor" as const,
  })

  const handleAddMember = () => {
    const id = Math.random().toString(36).substring(2, 9)
    const initials = newMember.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()

    setTeamMembers([
      ...teamMembers,
      {
        id,
        name: newMember.name,
        email: newMember.email,
        role: newMember.role,
        initials,
      },
    ])

    setNewMember({
      name: "",
      email: "",
      role: "editor",
    })

    setIsDialogOpen(false)
  }

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "owner":
        return "default"
      case "admin":
        return "secondary"
      case "editor":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Team Management</h1>
          <p className="text-muted-foreground">Manage your team members and their access levels</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Team Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>
              <DialogDescription>Add a new team member to your ContentRank account.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  placeholder="Enter full name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newMember.email}
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                  placeholder="Enter email address"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  value={newMember.role}
                  onValueChange={(value: any) => setNewMember({ ...newMember, role: value })}
                >
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddMember}>Add Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members and their permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={getRoleBadgeVariant(member.role)} className="capitalize">
                    {member.role}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Change Role</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Permissions</CardTitle>
          <CardDescription>Understanding team roles and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-medium">Owner</p>
              <p className="text-sm text-muted-foreground mt-1">
                Full access to all features, billing, and team management. Can add and remove team members.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium">Admin</p>
              <p className="text-sm text-muted-foreground mt-1">
                Full access to all features and team management. Cannot access billing or subscription settings.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium">Editor</p>
              <p className="text-sm text-muted-foreground mt-1">
                Can create, edit, and publish content. Cannot access team management or billing settings.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium">Viewer</p>
              <p className="text-sm text-muted-foreground mt-1">
                Can view content and reports. Cannot create or edit content or access settings.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
