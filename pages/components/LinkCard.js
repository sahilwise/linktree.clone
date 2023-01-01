import Link from "next/link"
import Image from "next/image";

const LinkCard = ({Title, domain, Imager})=>{
    return(
        <>

                <Link href={`https://${domain}`}>
                <div className="my-2 flex h-20 items-center justify-between rounded-3xl border-2 border-b-4 border-l-4 border-black px-4 shadow-2xl">
                <div className="flex items-center">
                <img alt="photo" className="w-10 rounded-full" src={`${Imager}.png`} />
                <div className="ml-2">
                <div className="text-sm font-semibold">{Title}</div>
                <div className="flex text-xs font-light text-gray-600">
                {domain}<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
                </div>
                </div>
                </div>
                <div>
                </div>
                </div>
                </Link>

        </>
    )
}


export default LinkCard;