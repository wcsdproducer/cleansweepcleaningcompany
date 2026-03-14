
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

const blogPosts = [
  {
    title: "Cleaning Myth: Vinegar cleans everything",
    excerpt: "Many people swear by vinegar as an all-purpose cleaner thanks to its affordability and natural origins. Made from...",
    image: "https://picsum.photos/seed/vinegar/400/300",
  },
  {
    title: "How NOT to Clean with Bleach",
    excerpt: "CleanSweep offers advice on where not to use bleach and safe cleaning alternatives for different surfaces.",
    image: "https://picsum.photos/seed/bleach/400/300",
  },
  {
    title: "12 Days of Holiday Cleaning Checklist",
    excerpt: "While the holidays are a magical time of year, they can be stressful for many. Here at CleanSweep, while we can't help...",
    image: "https://picsum.photos/seed/holiday/400/300",
  },
  {
    title: "18 Brilliant Christmas Gifts for the Clean Freaks On Your List",
    excerpt: "You are not alone if you feel the pressure to find the perfect gift this holiday season. About 25% of Americans say...",
    image: "https://picsum.photos/seed/gifts/400/300",
  },
  {
    title: "What's the Difference in Maid Service versus Housekeeping?",
    excerpt: "While often used interchangeably, maid services and housekeeping services have several differences. This article...",
    image: "https://picsum.photos/seed/housekeeping/400/300",
  },
  {
    title: "5 Tips for Cleaning Appliances",
    excerpt: "Five easy tips for keeping your appliances clean, include unplugging for safety, cleaning removable parts...",
    image: "https://picsum.photos/seed/appliances/400/300",
  },
  {
    title: "Time-Saving Cleaning Tips",
    excerpt: "Keeping your house clean between CleanSweep cleans is easier than you think. Save time with these 8 time-saving...",
    image: "https://picsum.photos/seed/timesaving/400/300",
  },
  {
    title: "CleanSweep In The News",
    excerpt: "CleanSweep contributes cleaning tips and advice to national publications.",
    image: "https://picsum.photos/seed/news/400/300",
  },
  {
    title: "10 Benefits of Working with Cleaning Services for Regular Light Commercial Cleaning",
    excerpt: "10 Benefits of Working with Cleaning Services for Regular Light Commercial Cleaning Have you ever seen a mess in...",
    image: "https://picsum.photos/seed/commercial/400/300",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Blog Hero */}
        <section className="relative h-[300px] w-full flex items-center overflow-hidden">
          <Image
            src="https://picsum.photos/seed/blog-hero/1600/600"
            alt="CleanSweep Blog"
            fill
            className="object-cover"
            priority
            data-ai-hint="clean room"
          />
          <div className="absolute inset-0 bg-[#1a6a91]/60" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white space-y-4">
              <h1 className="text-4xl font-bold font-headline">CleanSweep Blog</h1>
              <p className="text-lg text-white/90 leading-relaxed">
                With everything from organizational tips to health and wellness to cleaning tricks, our blog gives you what you need to know to keep your home happy, healthy and clean.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-6 group">
                  <div className="relative w-full sm:w-48 h-48 shrink-0 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow space-y-3">
                    <div className="bg-[#1a6a91] text-white px-4 py-2 rounded-t-lg">
                      <h3 className="font-bold text-sm leading-tight">{post.title}</h3>
                    </div>
                    <div className="p-1">
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link href="#" className="inline-block mt-2 text-xs font-bold text-[#1a6a91] hover:underline uppercase tracking-wider">
                        Continue Reading
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex items-center justify-center gap-4">
              <Button variant="outline" size="icon" className="rounded-lg h-10 w-10 border-[#1a6a91] text-[#1a6a91]" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Button className="rounded-lg h-10 w-10 bg-[#1a6a91] text-white">1</Button>
                <span className="text-muted-foreground px-2">...</span>
                <Button variant="outline" className="rounded-lg h-10 w-10 border-[#1a6a91] text-[#1a6a91]">36</Button>
              </div>
              <Button variant="outline" size="icon" className="rounded-lg h-10 w-10 border-[#1a6a91] text-[#1a6a91]">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-[#1a6a91]/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div className="bg-[#1a6a91] p-12 rounded-3xl text-white space-y-8 relative overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <Image src="https://picsum.photos/seed/resource-bg/1000/800" alt="bg" fill className="object-cover" />
                </div>
                <div className="relative z-10 space-y-4">
                  <h2 className="text-4xl font-bold">Get started and see why cleaning is a big deal to us.</h2>
                  <p className="text-white/80 text-lg">Book your clean today!</p>
                  <div className="flex gap-2 max-w-sm pt-4">
                    <Input placeholder="Zip/Postal Code" className="bg-white text-foreground rounded-xl h-12" />
                    <Button className="bg-[#2eb086] hover:bg-[#25916e] rounded-xl px-8 h-12">Go</Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 p-4">
                <h3 className="text-2xl font-bold text-[#1a6a91]">CleanSweep Resources</h3>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    "FAQs", "Employment", "Gift Cards", "Blog", "Press", "Contact", "Service Feedback", "Refer-Friends Get $50"
                  ].map((res) => (
                    <Link key={res} href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10 group">
                      <ChevronRight className="h-4 w-4 text-[#2eb086] group-hover:translate-x-1 transition-transform" />
                      {res}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
