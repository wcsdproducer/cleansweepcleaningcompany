import { ServicePageTemplate } from "@/components/ServicePageTemplate"

export default function GreenerCleaningPage() {
  return (
    <ServicePageTemplate
      title="Greener Cleaning"
      description="We believe in a clean home and a clean planet. Our Greener Cleaning services use non-toxic, eco-friendly products that are safe for your family, your pets, and the environment."
      imageHint="eco friendly cleaning products"
      features={[
        "Non-Toxic Cleaning Solutions",
        "Safe for Children & Pets",
        "Sustainable Cleaning Practices",
        "Reduced Environmental Impact"
      ]}
    />
  )
}