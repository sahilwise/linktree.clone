import Link from "next/link";
import Image from "next/image";
const Footer =()=>{
  return(
  <div className="sm:mt-32 mt-20 bg-zinc-800">
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <Image className="rounded-full" src="/evilcat.png" width="40" height="40" />
      </div>

      <p className="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0">
        Crafted with ❤️ by <Link href="https://salnet.xyz"><span className="font-black">salnet</span></Link>
      </p>
    </div>
  </div>
    </div>
  )
}

export default Footer;