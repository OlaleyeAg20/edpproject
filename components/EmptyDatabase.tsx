import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function Emptydatabase() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-muted/40 rounded-lg border border-dashed border-muted-foreground/25 p-8">
      <div className="mb-4">
        <svg
          className="w-24 h-24 text-muted-foreground/50"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.9a2 2 0 0 0 1.69-.9L10.88 2a2 2 0 0 1 1.69-.9h2.86a2 2 0 0 1 1.69.9L18.1 5.1a2 2 0 0 0 1.69.9H20Z" />
          <line x1="12" x2="12" y1="13" y2="17" />
          <line x1="10" x2="14" y1="15" y2="15" />
        </svg>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-center">No items in the database</h3>
      <p className="mb-4 text-sm text-center text-muted-foreground">Get started by adding an item to the database.</p>
      <Link href='/addItem' className="inline-flex items-center justify-center px-8 py-2 rounded text-white bg-primary">
        <PlusCircle className="mr-2 h-4 w-4" />
        Add New Item
      </Link>
    </div>
  )
}