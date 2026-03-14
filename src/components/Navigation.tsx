"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/studio-3673070449-f277c.firebasestorage.app/o/CleanSweep-Layer%2011%20copy.png?alt=media&token=e060532e-cc86-43f8-8780-76371d95c936"

const cleaningTypes = [
  { name: "One-time Service", href: "/services/one-time" },
  { name: "Regular Service", href: "/services/regular" },
  { name: "Deep Clean Service", href: "/services/deep-clean" },
  { name: "Move-in/Move-out service", href: "/services/move-in-out" },
]

const areasWeClean = [
  { name: "Bathrooms", href: "/areas/bathrooms" },
  { name: "Kitchens", href: "/areas/kitchens" },
  { name: "Living Areas", href: "/areas/living-areas" },
  { name: "Sleeping Areas", href: "/areas/sleeping-areas" },
]

const specialtyCleaning = [
  { name: "Special Event Cleaning", href: "/specialty/special-event" },
  { name: "Cleaning for Seniors", href: "/specialty/seniors" },
  { name: "Post-Renovation Cleaning", href: "/specialty/post-renovation" },
  { name: "Rental Property Cleaning", href: "/specialty/rental-property" },
  { name: "Holiday Cleaning", href: "/specialty/holiday" },
  { name: "Home Sale Prep Cleaning", href: "/specialty/home-sale-prep" },
  { name: "Add-On Cleaning", href: "/specialty/add-on" },
  { name: "Housekeeping", href: "/specialty/housekeeping" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-14 w-56">
            <Image
              src={LOGO_URL}
              alt="CleanSweep Cleaning Company LLC"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors whitespace-nowrap">
                Cleaning Services <ChevronDown className="h-4 w-4" />
              </button>
            </PopoverTrigger>
            <PopoverContent 
              align="start" 
              className="w-[90vw] max-w-5xl p-0 mt-4 border-none shadow-2xl rounded-3xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-10 bg-white">
                <MenuSection title="CLEANING TYPES" items={cleaningTypes} />
                <MenuSection title="AREAS WE CLEAN" items={areasWeClean} />
                <MenuSection title="SPECIALTY CLEANING" items={specialtyCleaning} />
              </div>
              <div className="bg-[#1a6a91] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white">
                  <h4 className="text-2xl font-bold mb-1">Save $75.00</h4>
                  <p className="text-white/80">Get $25.00 off your 1st, 3rd and 5th cleans. New customers only.</p>
                </div>
                <Button className="bg-[#2eb086] hover:bg-[#25916e] text-white px-8 py-6 rounded-xl font-bold text-lg border-none">
                  Redeem Now
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Link href="#about" className="text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap">Why CleanSweep?</Link>
          <Link href="#faq" className="text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap">FAQ</Link>
          <Link href="#locations" className="text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap">Locations</Link>
          
          <div className="flex items-center gap-2 text-primary font-bold shrink-0">
            <Phone className="h-4 w-4" />
            <span className="text-sm">877-624-3776</span>
          </div>

          <Button className="rounded-full px-8 shadow-md hover:shadow-lg transition-all shrink-0" asChild>
            <Link href="#estimate">Get Free Estimate</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b animate-in slide-in-from-top duration-300 shadow-xl">
          <nav className="flex flex-col p-6 gap-6">
            <div className="space-y-4">
              <div className="font-bold text-primary uppercase text-xs tracking-widest px-2">Services</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[...cleaningTypes, ...areasWeClean].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium p-3 hover:bg-muted rounded-xl transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t space-y-4">
              <Link href="#about" className="block text-sm font-semibold px-2 py-2">Why CleanSweep?</Link>
              <Link href="#locations" className="block text-sm font-semibold px-2 py-2">Locations</Link>
              <div className="flex items-center gap-2 text-primary font-bold px-2 py-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">877-624-3776</span>
              </div>
              <Button className="w-full rounded-2xl py-6 text-lg font-bold mt-4" onClick={() => setIsOpen(false)} asChild>
                <Link href="#estimate">Get Free Estimate</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function MenuSection({ title, items }: { title: string, items: { name: string, href: string }[] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-[#1a6a91] font-extrabold text-xs tracking-widest">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href} 
              className="text-[#5ea3c2] hover:text-[#1a6a91] transition-colors text-sm font-semibold block"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
