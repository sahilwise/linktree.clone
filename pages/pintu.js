import Image from 'next/image'
import Link from 'next/link'
import Bucket from './components/Bucket'
import LinkCard from './components/LinkCard'
import { useRouter } from 'next/router'
import AddModal from './components/AddModal'
import Head from 'next/head'

export default function Home() {
    const router = useRouter()
        return(
            <div style={{cursor: 'url(hand.png), auto'}}  className="bg-[#2E79F9]">
                <Head>
                    <title>Salnet</title>
                </Head>
<div className="relative max-w-2xl mx-auto py-3" >
        <div className="flex justify-between items-center text-sm sm:mx-5 mx-6">

            <button style={{cursor: 'url(handler.png), auto'}}>
            <span className="inline-flex items-center rounded-full p-2 bg-neutral-100 text-black group transition-all duration-500 focus:ring-2 focus:ring-neutral-100" role="alert" tabindex="0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
            </svg>
            <span onClick={()=>{router.push('tel:+918170869682')}} className="whitespace-nowrap inline-block group-hover:max-w-screen-2xl group-focus:max-w-screen-2xl max-w-0 scale-80 group-hover:scale-100 overflow-hidden transition-all duration-500 group-hover:px-2 group-focus:px-2">Call now</span>
            </span>
            </button>


            <div>
                <AddModal />
            </div>
            

        </div>
    
        <div className="flex flex-col justify-center items-center my-5">
            <div className="w-24 h-24 bg-cover bg-center border border-black border-b-4 shadow-2xl border-r-4 bg-no-repeat rounded-full" style={{ backgroundImage: `url(${`/pintu.png`})` }}></div>
            <span className="my-3 font-black text-neutral-100 text-xl">
               Pintu Maity
            </span>
            
            {/* <p className="mb-3 text-xs text-neutral-100">Developer</p> */}


            {/* <button className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400">Edit profile</button> */}

        </div>


        <div className="grid grid-cols-3 shadow-sm text-xs gap-x-2 bg-gray-50 border border-black border-b-2 border-l-2 py-1.5 rounded-3xl mx-4">
            <button style={{cursor: 'url(handler.png), auto'}} onClick={()=>{router.push('/pintu')}} className="mx-auto bg-black text-white px-5 py-1.5 rounded-3xl">
                Links
            </button>
            <button style={{cursor: 'url(handler.png), auto'}} onClick={()=>{router.push('/pintu')}} className="mx-auto text-black px-5 py-1.5 rounded-3xl">
                Bucket
            </button>
            <button style={{cursor: 'url(handler.png), auto'}} onClick={()=>{router.push('/pintu')}} className="mx-auto text-black px-5 py-1.5 rounded-3xl">
            Store
            </button>
        </div>

        <div className="grid gap-0.5 mt-5 mx-5 ">
            <LinkCard  Imager="contact" Title="Save my number as a contact" domain="wapp.ink" />
            <LinkCard  Imager="facebook" Title="I'm on facebook" domain="facebook.com" />
            <LinkCard  Imager="messenger" Title="I'm on messenger" domain="youtube.com" />
            <LinkCard  Imager="whatsapp" Title="Chat on whatsapp" domain="wapp.ink" />
            <LinkCard  Imager="youtube" Title="I'm on youtube" domain="youtube.com" />

        </div>

    </div>
            <h3 className='text-center text-neutral-800 font-black pt-16'>
                   {/* salnet */}
            </h3>
            <h4 className='text-center text-white text-xs font-thin pb-16'>Powered by <span className='font-semibold'>addify</span></h4>
            </div>
        )

}
