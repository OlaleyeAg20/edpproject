import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link className="flex items-center gap-2" href="/">
        <Image
          width={40}
          height={40}
          alt="Efix Logo"
          src="/icon/efix.png"
        />
    </Link>
  )
}

export default Logo
