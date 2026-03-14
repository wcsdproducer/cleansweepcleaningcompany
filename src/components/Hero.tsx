"use client"

import * as React from "react"
import Image from "next/image"
import { MapPin, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { useAuth, initiateAnonymousSignIn } from "@/firebase"

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-home")
  const auth = useAuth()

  React.useEffect(() => {
    if (auth) {
      initiateAnonymousSignIn(auth)
    }
  }, [auth])

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ""}
          alt={heroImage?.description || "CleanSweep Clean Home"}
          fill
          className="object-cover opacity-20"
          priority
          data-ai-hint="modern living room"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-primary/20">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-widest">Trust CleanSweep</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold font-headline leading-[1.1] text-foreground">
            Your Home, <br />
            <span className="text-primary italic">Cleaned Your Way.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Professional home cleaning services tailored to your life. From recurring visits to deep cleans, we bring the sparkle back to your space.
          </p>

          <div className="bg-white p-2 rounded-2xl shadow-xl border border-border flex flex-col sm:flex-row gap-2 max-w-md">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Enter Zip Code"
                className="pl-10 border-none bg-transparent h-12 text-lg focus-visible:ring-0"
              />
            </div>
            <Button className="h-12 px-8 rounded-xl font-semibold gap-2 shadow-lg hover:shadow-accent/40 transition-all bg-accent text-accent-foreground hover:bg-accent/90">
              Get Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-background overflow-hidden">
                  <Image src={`https://picsum.photos/seed/${i + 10}/40/40`} alt="User" width={40} height={40} />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              <span className="text-foreground font-bold">1,000+</span> happy homes this month
            </p>
          </div>
        </div>

        <div className="hidden lg:block relative animate-in zoom-in duration-700">
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
            <Image
              src={heroImage?.imageUrl || ""}
              alt="Clean Home"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating cards for trust */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <p className="font-bold">49-Point Checklist</p>
            </div>
            <p className="text-xs text-muted-foreground">Every corner, every time. No spot left behind.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
