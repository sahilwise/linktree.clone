import Link from "next/link";
const Certification = ()=>{
  return(
    <>
  <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 mb-28">
    
    <Link passHref href="https://tailwindcomponents.com/u/sahilnetic">
    <a>
    <div className="border border-2 shadow-lg rounded-lg py-20 text-white">Meta</div>
    </a>
    </Link>
      
  </div>

    </>
  )
}

export default Certification;