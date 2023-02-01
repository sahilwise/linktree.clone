import Image from "next/image";
import Link from "next/link";

const Nav = ()=>{
   return(
    <div className="bg-zinc-900">

         <div className="rounded-full flex justify-between">
            <div className="pl-4">
               <h1 className="text-white py-5 font-medium text-2xl">🍭Salnet</h1>
            </div>
          <Link passHref href="https://twitter.com/salnetxyz">
            <a><h4 className="text-white pt-5 pr-5">
            <Image alt="github fork" width={25} height={25} src="/twitter.png" />
            </h4>
            </a>
            </Link>
          </div>
        <hr />
    </div>
   )
}

export default Nav;
