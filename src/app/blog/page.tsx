import { ServicePageTemplate } from "@/components/ServicePageTemplate"

export default function BlogPage() {
  return (
    <ServicePageTemplate
      title="Cleaning Tips & Blog"
      description="Explore our latest articles on home organization, cleaning hacks, and lifestyle tips. Stay informed with CleanSweep's expert advice."
      imageHint="tidy home desk"
      features={[
        "Expert Cleaning Hacks",
        "Home Organization Strategies",
        "Seasonal Maintenance Guides",
        "Lifestyle & Wellness Tips"
      ]}
    />
  )
}