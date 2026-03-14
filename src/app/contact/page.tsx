"use client"

import * as React from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Sparkles, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        <section className="bg-[#1a6a91] text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
            <h1 className="text-5xl font-bold font-headline leading-tight">Get in Touch</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have questions about our services or need a customized quote? Our team is here to help you bring the sparkle back to your home.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </section>

        <section className="container mx-auto px-4 -mt-16 relative z-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {[
                { icon: Phone, title: "Phone", content: "877-624-3776", sub: "Mon-Fri: 8am - 6pm" },
                { icon: Mail, title: "Email", content: "info@cleansweepcleaningcompany.com", sub: "Support 24/7" },
                { icon: MapPin, title: "Main Office", content: "3360 S Richfield Way, Aurora, CO 80013", sub: "Headquarters" }
              ].map((item, idx) => (
                <Card key={idx} className="rounded-3xl shadow-xl border-none">
                  <CardContent className="p-8 flex items-center gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{item.title}</p>
                      <p className="text-xl font-bold text-[#1a6a91] leading-tight">{item.content}</p>
                      <p className="text-sm text-muted-foreground">{item.sub}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="rounded-[40px] shadow-2xl border-none overflow-hidden">
                <CardContent className="p-10 md:p-16">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-lg font-semibold">Full Name</Label>
                        <Input id="name" placeholder="John Doe" className="h-14 rounded-2xl border-muted bg-secondary/5 focus:ring-primary" required />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-lg font-semibold">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="h-14 rounded-2xl border-muted bg-secondary/5 focus:ring-primary" required />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-lg font-semibold">Subject</Label>
                      <Input id="subject" placeholder="General Inquiry" className="h-14 rounded-2xl border-muted bg-secondary/5 focus:ring-primary" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-lg font-semibold">Message</Label>
                      <Textarea id="message" placeholder="How can we help you?" className="min-h-[200px] rounded-[30px] border-muted bg-secondary/5 focus:ring-primary p-6" required />
                    </div>
                    <Button type="submit" className="w-full h-16 rounded-2xl text-xl font-bold bg-[#2eb086] hover:bg-[#25916e] shadow-xl gap-3 transition-all active:scale-[0.98]">
                      Send Message <Send className="h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-24 text-center space-y-8">
          <div className="inline-flex p-3 rounded-2xl bg-primary/10">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold font-headline">Need a quick answer?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out our frequently asked questions for instant help with scheduling, pricing, and service details.
          </p>
          <Button variant="outline" className="rounded-xl border-[#1a6a91] text-[#1a6a91] h-12 px-8 font-bold" asChild>
            <a href="/faq">View FAQs</a>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  )
}
