
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, CheckCircle2, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Top Hero Section */}
        <section className="relative h-[500px] w-full">
          <Image
            src="https://picsum.photos/seed/about-hero/1600/900"
            alt="Clean Home Interior"
            fill
            className="object-cover"
            priority
            data-ai-hint="modern kitchen"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="container mx-auto px-4 h-full relative flex items-center">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-md border-t-8 border-primary animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-4xl font-bold font-headline mb-4 text-[#1a6a91]">Meet CleanSweep</h1>
              <p className="text-muted-foreground mb-6">Your local home cleaning experts, dedicated to making your life easier.</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Zip/Postal Code" className="pl-9 h-12 rounded-xl" />
                </div>
                <Button className="h-12 px-6 rounded-xl bg-[#2eb086] hover:bg-[#25916e]">Go</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#1a6a91]">The Best Cleaning Company in Your Neighborhood</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We know choice is something that everyone and our home looks treats. If you're preferred cleaning service, you'll feel better for being so for those you can rest assured. We believe that your home deserves a personalized clean. And you'll find it with our history, our hard-hitting quality, trusted professionals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We want to make your life easier so that you can spend more time with your family and doing things you love.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-2" />
                <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://picsum.photos/seed/cleaning-pro/800/1000"
                    alt="Cleaning Professional"
                    fill
                    className="object-cover"
                    data-ai-hint="cleaner professional"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg">
                  <Info className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-[#1a6a91] rounded-3xl p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Info className="h-12 w-12" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">Try CleanSweep and see why cleaning is a big deal to us.</h3>
                <p className="text-white/80">Find Your CleanSweep location today.</p>
              </div>
              <div className="flex gap-2 w-full max-w-md">
                <Input placeholder="Zip/Postal Code" className="bg-white text-foreground h-12 rounded-xl border-none" />
                <Button className="h-12 px-8 rounded-xl bg-[#2eb086] hover:bg-[#25916e] text-white">Go</Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#1a6a91] mb-8">The CleanSweep Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-left">
              <p>
                When CleanSweep founder Mark Anthone started CleanSweep, he knew that he for home he felt she did to see how high the results met. His because he the clean and on their side for him it was a complete and results related to the results.
              </p>
              <p>
                From those humble beginnings, Mark and his team established a new standard for home cleaning. We focus on listening to your needs and delivering results that make a difference in your daily life.
              </p>
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[#1a6a91]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/beliefs/1000/800"
                  alt="Service Experience"
                  fill
                  className="object-cover"
                  data-ai-hint="friendly cleaner"
                />
              </div>
              <div className="text-white space-y-6">
                <h2 className="text-3xl font-bold">Our Beliefs</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  We believe in treating your home with the same care and respect as our own. We value integrity, reliability, and excellence in everything we do. Our team is committed to providing a service that exceeds your expectations.
                </p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary rounded-xl px-8 h-12">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#1a6a91] mb-8">Our Culture</h2>
            <p className="text-muted-foreground leading-relaxed text-left">
              We believe that we can make a difference in the lives of our clients, employees, and community. Our culture is one of collaboration, respect, and continuous improvement. We invest in our people so they can deliver the best possible service to you.
            </p>
          </div>
        </section>

        {/* Big Deal Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-2" />
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://picsum.photos/seed/big-deal/1000/800"
                    alt="Family at Home"
                    fill
                    className="object-cover"
                    data-ai-hint="happy family home"
                  />
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-[#1a6a91]">Cleaning is a big deal to us.</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're in need of regular maintenance or a deep seasonal clean, we handle the details so you don't have to. Our 49-Point Checklist ensures consistent quality every time.
                </p>
                <Link href="/#checklist" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                  View Our 49-Point Checklist <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Teasers */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Cleaning Myth: Vinegar cleans everything", img: "vinegar" },
                { title: "How NOT to Clean with Bleach", img: "bleach" },
                { title: "12 Days of Holiday Cleaning Checklist", img: "holiday" },
                { title: "10 Brilliant Christmas Gifts for the Clean Freak", img: "gifts" }
              ].map((blog, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-all">
                  <div className="relative h-48">
                    <Image src={`https://picsum.photos/seed/blog-${idx}/400/300`} alt={blog.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="font-bold text-[#1a6a91] leading-tight">{blog.title}</h4>
                    <Link href="/blog" className="text-xs font-bold text-primary uppercase tracking-widest hover:underline inline-flex items-center">
                      Continue Reading <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources CTA Section */}
        <section className="py-20 bg-[#1a6a91]/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div className="bg-[#1a6a91] p-12 rounded-3xl text-white space-y-8 relative overflow-hidden shadow-2xl">
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
                    <Link key={res} href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10">
                      <CheckCircle2 className="h-4 w-4 text-[#2eb086]" />
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
