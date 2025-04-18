import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/logo"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <span className="font-bold">ContentRank</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            AI-powered SEO content optimization for UK small businesses. Make your content work harder.
          </p>
          <div className="flex gap-4">
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h3 className="text-sm font-medium">Product</h3>
          <nav className="grid gap-3 text-sm">
            <Link href="/features" className="text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="/integrations" className="text-muted-foreground hover:text-foreground">
              Integrations
            </Link>
            <Link href="/changelog" className="text-muted-foreground hover:text-foreground">
              Changelog
            </Link>
          </nav>
        </div>
        <div className="grid gap-4">
          <h3 className="text-sm font-medium">Company</h3>
          <nav className="grid gap-3 text-sm">
            <Link href="/careers" className="text-muted-foreground hover:text-foreground">
              Careers
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
        <div className="grid gap-4">
          <h3 className="text-sm font-medium">Subscribe to our newsletter</h3>
          <p className="text-sm text-muted-foreground">
            Get the latest SEO tips and product updates delivered to your inbox.
          </p>
          <form className="flex gap-2">
            <Input placeholder="Email address" type="email" className="max-w-[220px]" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-between gap-4 border-t py-6 md:h-16 md:flex-row md:py-0">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} ContentRank Ltd. All rights reserved.
        </p>
        <nav className="flex gap-4 text-sm">
          <Link href="/terms" className="text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
            Cookies
          </Link>
        </nav>
      </div>
    </footer>
  )
}
