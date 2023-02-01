import Link from "next/link";
import Image from "next/image";

const AsideNav = ({fonter,fonter1,fonter2, fonter3, fonter4, fonter5, fonter6, AllS3Img, })=>{
    const fontwt = fonter;
    const fontwt1 = fonter1;
    const fontwt2 = fonter2;
    const fontwt3 = fonter3;
    const fontwt4 =  fonter4;
    const fontwt5 = fonter5;
    const fontwt6 = fonter6;
   return(
    <>
        <aside className="ml-[-100%] bg-black fixed z-10 top-0  px-6 w-full flex flex-col justify-between h-screen border-r transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">

            <div>
            <div className="-mx-2 text-white text-xl font-black px-6 pt-4">
            🐍 Qwikpy<sub className="text-xs font-medium">by salnet</sub>
                        </div>

       <ul className="space-y-2 tracking-wide mt- text-xl text-sweetgray font-thinner">
                            <li>
                                <Link href="/">
                                <a  className="px-4 py-2 my-4 flex items-center space-x-4 group rounded-full bg-neutral-700 text-neutral-400">
                                    <span style={{fontWeight:fontwt}} className="text-sm">⭐ Home Page</span>
                                    </a>
                                </Link>
                            </li>



                        </ul>

                        </div>

<a href="/api/auth/logout">
<div className="px-6 -mx-6 pt-4 flex justify-between items-center">
    <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-zinc-700 group">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <p className="text-gray-100">Logout</p>
    </button>
</div>
</a>

</aside>
    </>
   )
}

export default AsideNav;