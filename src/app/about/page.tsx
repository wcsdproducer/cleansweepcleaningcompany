import { ServicePageTemplate } from "@/components/ServicePageTemplate"

export default function AboutPage() {
  return (
    <ServicePageTemplate
      title="About CleanSweep"
      description="Locally owned and operated, CleanSweep is dedicated to giving you back the time you deserve. Our professional cleaning teams are committed to excellence and your complete satisfaction."
      imageHint="professional cleaning team"
      features={[
        "Locally Owned & Operated",
        "Expertly Trained Staff",
        "Bonded & Insured Protection",
        "24-Hour Satisfaction Guarantee"
      ]}
    />
  )
}