import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 w-full">
      <div className="px-4 max-w-full">
        <div className="flex flex-col items-center text-center space-y-2">
          <p className="text-sm">
            © {currentYear}, Built by{' '}
            <span className="font-semibold">Ayomide Olaleye (ayscript)</span>
          </p>
          <p className="text-sm">
            for{' '}
            <span
              className="text-blue-400 hover:text-blue-300 transition-colors break-words"
            >
              Electronic and Data Processing Department, FUNAAB ICT
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}