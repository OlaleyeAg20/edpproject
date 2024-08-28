import Image from "next/image"


const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5 mx-auto">
      <Image
        width={100}
        height={100}
        alt='Efix Logo'
        src="/icon/efix.png"
      />
      <span>Loading Please Wait...</span>
    </div>
  )
}

export default loading
