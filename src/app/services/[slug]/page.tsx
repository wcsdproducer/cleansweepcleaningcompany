
import { ServicePageTemplate } from "@/components/ServicePageTemplate"
import { notFound } from "next/navigation"

const serviceData: Record<string, any> = {
  "house-cleaning": {
    title: "House Cleaning",
    description: "Our signature professional house cleaning service tailored to your home's unique needs.",
    imageHint: "clean living room",
    features: ["Reliable Weekly Visits", "Trained Professionals", "Flexible Scheduling", "Eco-Friendly Products"]
  },
  "apartment-cleaning": {
    title: "Apartment Cleaning",
    description: "Expert cleaning services optimized for apartment living. Big or small, we clean it all.",
    imageHint: "modern apartment",
    features: ["Space-Efficient Cleaning", "Customized Plans", "Evening & Weekend Availability", "Trusted & Insured"]
  },
  "condo-cleaning": {
    title: "Condo Cleaning",
    description: "Premium cleaning services designed for condominium residents and their specific building requirements.",
    imageHint: "clean kitchen",
    features: ["Building Rule Compliance", "Quick Turnaround", "High-Quality Equipment", "Discreet & Professional"]
  },
  "deep-clean": {
    title: "Deep Clean",
    description: "A comprehensive, corner-to-corner cleaning that refreshes your entire living space.",
    imageHint: "detailed bathroom",
    features: ["Heavy Scrubbing Included", "Inside Appliances", "Wall Washing", "Baseboards & Vents"]
  },
  "maid-service": {
    title: "Maid Service",
    description: "Personalized housekeeping and maid services for ongoing home maintenance.",
    imageHint: "maid cleaning",
    features: ["Assigned Cleaning Pro", "Tidying & Organizing", "Bed Making", "Laundry Options"]
  },
  "commercial-cleaning": {
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices, retail spaces, and commercial properties.",
    imageHint: "clean office",
    features: ["Post-Hours Service", "Safe Sanitization", "Uniformed Professionals", "Reliable Performance"]
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = serviceData[slug]

  if (!data) {
    notFound()
  }

  return <ServicePageTemplate {...data} />
}
