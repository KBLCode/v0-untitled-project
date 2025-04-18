import { Search } from "lucide-react"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Search className="text-primary" />
      <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
    </div>
  )
}
