import Image from 'next/image'
import Link from 'next/link'
import LinkCard from './components/LinkCard'

export default function Home() {
        return(
            <>
<div className="relative max-w-2xl mx-auto my-3">
        <div className="flex justify-between items-center text-sm sm:mx-5 mx-6">

            <Link href="https://addify.us/sal"> 
            <button>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>

            </button>
            </Link>


            <Link href="mailto:hi@salnet.xyz">
            <div>
                <button className='bg-neutral-100 text-sm text-black px-5 border py-2 rounded-full'>
                    Subscribe
                </button>
            </div>
            </Link>
            

        </div>
    
        <div className="flex flex-col justify-center items-center my-5">
            <div className="w-24 h-24 bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: `url(${`/sahillogo.png`})` }}></div>
            <span className="my-3">@salnetxyz</span>
            <p className="mb-3 text-xs">Developer</p>


            {/* <button className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400">Edit profile</button> */}

        </div>


        <div className="grid grid-cols-3 shadow-sm text-xs gap-x-2 bg-gray-50 border border-black border-b-2 border-l-2 py-1.5 rounded-3xl mx-4">
            <button className="mx-auto bg-black text-white px-5 py-1.5 rounded-3xl">
                Links
            </button>
            <button className="mx-auto text-black px-5 py-1.5 rounded-3xl">
                Store
            </button>
            <button className="mx-auto text-black px-5 py-1.5 rounded-3xl">
                Bucket
            </button>
        </div>

        <div className="grid gap-0.5 mt-2 px-5">
            <LinkCard Imager="B" Title="Create your addify id" domain="addify.us" />
            <LinkCard Imager="ytubelogo" Title="Create your ytube link" domain="ytube.click" />
            <LinkCard Imager="wapp" Title="Create your wapp link" domain="wapp.ink" />
            <LinkCard Imager="pinterest" Title="Pinterest" domain="pinterest.ca/salnetxyz" />
        </div>

    </div>
            <h3 className='text-center font-black py-12'>
                    &copy; salnet
            </h3>
            </>
        )

}
