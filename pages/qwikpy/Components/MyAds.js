import Link from "next/link";
import Image from "next/image";

const Myads = ()=>{
   return(
    <>
            <div className="fixed right-0 w-4/12 hidden lg:block h-screen pt-4 border-zinc-200 border-l">   
           
     
 
            <h1 className="mb-4 px-8 text-xl font-medium text-white">Follow me</h1>
            {/* <Ads /> */}
               {/* ANOTHER AD */}


   <div className="mx-8 rounded-b-xl mt-1">
     <a 
        className="relative block overflow-hidden transition duration-300 transform group">
       
        <div className="relative flex items-center justify-between p-1 border-neutral-300">
        <div className="flex items-center justify-center">
        <div className="flex flex-col justify-between h-full text-white">
            <Image className="rounded-2xl" alt="image" src="/twitter.png" width={50} height={50} />
            </div>
            </div>
        
            <div className="pr-4">
            <h6 className="font-semibold text-white font-black leading-5">
                    salnetxyz
                </h6>
                <p className="text-xs text-white font-thin">
                @salnetxyz
                </p>
            </div>
            <div className="flex text-xs text-black items-center justify-center p-4">
            <Link href="https://twitter.com/salnetxyz">
                <div className="bg-white font-black px-4 py-1.5 rounded-3xl">
                    Follow
                </div>
                </Link>
            </div>
        </div>
    </a>
   </div>
   {/* ANOTHER AD */}

   <div className="mx-8 rounded-b-xl mt-1">
     <a 
        className="relative block overflow-hidden transition duration-300 transform group">
       
        <div className="relative flex items-center justify-between p-1 border-neutral-300">
        <div className="flex items-center justify-center">
        <div className="flex flex-col justify-between h-full text-white">
            <Image className="rounded-2xl" alt="image" src="/instagram.png" width={50} height={50} />
            </div>
            </div>
        
            <div className="pr-4">
                <h6 className="font-semibold text-white font-black leading-5">
                    salnetxyz
                </h6>
                <p className="text-xs text-white font-thin">
                @salnetxyz
                </p>
            </div>
            <div className="flex text-xs text-black items-center justify-center p-4">
               <Link href="https://instagram.com/salnetxyz">
                <div className="bg-white font-black px-4 py-1.5 rounded-3xl">
                    Follow
                </div>
                </Link>
            </div>
        </div>
    </a>
   </div>
            {/* ADS */}
               <div className="px-8 mt-4">
                   <h1 className="mb-4 text-sm font-medium text-zinc-100">Sponsored*</h1>
                   <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg">
                       <ul className="-mx-4">
                   

                           <li className="flex items-center mt-6">
                            <p>
                               <span  className="text-gray-700 text-sm font-medium "> Advertise</span>
                               </p>
                           </li>



                       </ul>
                   </div>
               </div>


           </div>

    </>
   )
}

export default Myads;