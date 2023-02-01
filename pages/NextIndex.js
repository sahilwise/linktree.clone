import Image from 'next/image'
import Link from 'next/link'
import Bucket from './components/Bucket'
import LinkCard from './components/LinkCard'
import { useRouter } from 'next/router'

export default function NextIndex() {
    const router = useRouter()
        return(
            <div>
        <div className="relative max-w-2xl mx-auto my-3">
        <div className="flex justify-between items-center text-sm sm:mx-5 mx-5">

            <Link href="/">
            <button>
            <span className="inline-flex items-center rounded-full p-2 bg-neutral-100 text-black group transition-all duration-500 focus:ring-2 focus:ring-neutral-100" role="alert" tabindex="0">
            <div className="w-20 h-20 bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: `url(${`/sahillogo.png`})` }}></div>

            <span className="text-gray-100 whitespace-nowrap inline-block group-hover:max-w-screen-2xl group-focus:max-w-screen-2xl max-w-0 scale-80 group-hover:scale-100 overflow-hidden transition-all duration-500 group-hover:px-2 group-focus:px-2">@salnetxyz</span>
            </span>
            </button>
            </Link>

            <Link href="/sal">
            <button className='text-xl font-black textneutral-700'>
                About
            </button>
            </Link>
        </div>

           <div className="grid grid-cols-4 text-xs gap-x-2 my-5 py-1.5 rounded-3xl">
           <button onClick={()=>{router.push('/store')}} className="mx-auto text-black px-5 py-1.5 rounded-3xl">
            About
            </button>
            <button onClick={()=>{router.push('/')}} className="mx-auto text-black decoration-dotted underline underline-offset-8 px-5 py-1.5 rounded-3xl">
            Project
            </button>
            <button onClick={()=>{router.push('/')}} className="mx-auto text-black decoration-dotted underline underline-offset-8 px-5 py-1.5 rounded-3xl">
            Blogs
            </button>
            <button onClick={()=>{router.push('/')}} className="mx-auto text-black decoration-dotted underline underline-offset-8 px-5 py-1.5 rounded-3xl">
            Clicks
            </button>
        </div>

            <h3 className='sm:mx-16 mx-8 text-sm'>
            As a software engineer with an entrepreneurial spirit, I am constantly seeking out new challenges and opportunities to innovate. With a strong background in computer science and a passion for problem-solving, I have developed a versatile skill set that allows me to excel in a variety of projects and industries. 
            <br /><br /><br />
            Whether I'm working on a new app or developing a cutting-edge software solution, I always bring a strong sense of dedication and a desire to exceed expectations. 
            <br /> <br /> <br />
            In addition to my technical expertise, I am also a strong communicator and team player, with a proven track record of collaborating effectively with cross-functional teams to bring products to market. 
            <br /> <br /> <br />
            I am excited to continue growing and learning as a software engineer, and to use my skills and passion to drive positive change and make a meaningful impact through entrepreneurship.
            </h3>

    </div>
            <h4 className='text-center text-xs font-thin pb-16'>Powered by <a href='https://addify.us' className='font-semibold text-neutral-700 text-neutral-800'>&copy; salnet</a></h4>

            </div>
        )

}
