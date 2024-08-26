import { Code2, Database, Laptop } from "lucide-react"

export default function Aboutus() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About This Project</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              This project was built by Ayomide Olaleye, an Industrial Training Student, for the EDP (Electronic and
              Data Processing) unit of the ICTREC FUNAAB (ICT Resource Center FUNAAB).
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The purpose is to create a database of computers brought in for repair, enabling tracking of the repair
              process and assigning computers and accessories to their rightful owners.
            </p>
          </div>
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center space-x-4">
              <Laptop className="w-10 h-10 text-primary" />
              <div>
                <h3 className="font-semibold">Front-end Technologies</h3>
                <p className="text-sm text-muted-foreground">Built with Nextjs, Tailwind CSS, and Shadcn</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Database className="w-10 h-10 text-primary" />
              <div>
                <h3 className="font-semibold">Back-end Service</h3>
                <p className="text-sm text-muted-foreground">Powered by Firebase, a backend service by Google</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Code2 className="w-10 h-10 text-primary" />
              <div>
                <h3 className="font-semibold">Developer</h3>
                <p className="text-sm text-muted-foreground">Ayomide Olaleye, Industrial Training Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}