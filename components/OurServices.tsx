import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Smartphone, PenTool, BarChart, ShieldCheck, Headphones } from "lucide-react"

export default function Ourservices() {
  const services = [
    {
      icon: Laptop,
      title: "Web Development",
      description: "Custom websites tailored to your business needs, from simple landing pages to complex web applications."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android, delivering seamless user experiences."
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability and create visually appealing interfaces."
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Transforming raw data into actionable insights to drive informed business decisions."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure data integrity."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support to keep your systems running smoothly and resolve issues promptly."
    }
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white dark:bg-gray-900 overflow-hidden">
              <CardHeader className="flex flex-row items-center space-x-4 p-4">
                <div className="flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}