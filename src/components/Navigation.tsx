
"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Sparkles, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const cleaningTypes = [
  { name: "House Cleaning", href: "/services/house-cleaning" },
  { name: "Apartment Cleaning", href: "/services/apartment-cleaning" },
  { name: "Condo Cleaning", href: "/services/condo-cleaning" },
  { name: "Deep Clean", href: "/services/deep-clean" },
  { name: "Maid Service", href: "/services/maid-service" },
  { name: "Commercial Cleaning", href: "/services/commercial-cleaning" },
]

const areasWeClean = [
  { name: "Bathrooms", href: "/areas/bathrooms" },
  { name: "Kitchens", href: "/areas/kitchens" },
  { name: "Living Areas", href: "/areas/living-areas" },
  { name: "Sleeping Areas", href: "/areas/sleeping-areas" },
]

const cleaningSchedules = [
  { name: "Recurring Cleaning", href: "/schedules/recurring-cleaning" },
  { name: "Move In/Move Out", href: "/schedules/move-in-out" },
  { name: "One-Time Cleaning", href: "/schedules/one-time" },
  { name: "Customized Cleaning", href: "/schedules/customized" },
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
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary font-headline">
            Sparkle<span className="text-accent-foreground/70">Pro</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors">
                Cleaning Services <ChevronDown className="h-4 w-4" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[100vw] max-w-5xl p-0 mt-4 border-none shadow-2xl rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-10 bg-white">
                <MenuSection title="CLEANING TYPES" items={cleaningTypes} />
                <MenuSection title="AREAS WE CLEAN" items={areasWeClean} />
                <MenuSection title="CLEANING SCHEDULES" items={cleaningSchedules} />
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

          <Link href="#about" className="text-sm font-semibold hover:text-primary transition-colors">Why Sparkle Pro?</Link>
          <Link href="#faq" className="text-sm font-semibold hover:text-primary transition-colors">FAQ</Link>
          <Link href="#locations" className="text-sm font-semibold hover:text-primary transition-colors">Locations</Link>
          
          <div className="flex items-center gap-2 text-primary font-bold">
            <Phone className="h-4 w-4" />
            <span className="text-sm">877-624-3776</span>
          </div>

          <Button className="rounded-full px-6 shadow-md hover:shadow-lg transition-all" asChild>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-4 gap-4">
            <div className="font-bold text-primary px-2">Services</div>
            {[...cleaningTypes, ...areasWeClean].slice(0, 6).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full rounded-full" onClick={() => setIsOpen(false)} asChild>
              <Link href="#estimate">Get Free Estimate</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function MenuSection({ title, items }: { title: string, items: { name: string, href: string }[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-[#1a6a91] font-extrabold text-sm tracking-wider">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href} 
              className="text-[#5ea3c2] hover:text-[#1a6a91] transition-colors text-sm font-medium block py-0.5"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
