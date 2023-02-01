import Link from "next/link";
const Domain = ()=>{
    return(
      <>
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 text-center sm:mx-20 gap-x-5 gap-y-5 mb-28">
      
      <Link passHref href="https://tailwindcomponents.com/u/sahilnetic">
      <a>
      <div className="border border-2 border-emerald-800 border-b-4 border-r-4 shadow-lg rounded-lg py-24 text-white">Frontend</div>
      </a>
      </Link>

      <Link passHref href="https://tailwindcomponents.com/u/sahilnetic">
      <a>
      <div className="border border-2 border-emerald-800 border-b-4 border-r-4 shadow-lg rounded-lg py-24 text-white">Backend</div>
      </a>
      </Link>

      <Link passHref href="https://tailwindcomponents.com/u/sahilnetic">
      <a>
      <div className="border border-2 border-emerald-800 border-b-4 border-r-4 shadow-lg rounded-lg py-24 text-white">Cloud</div>
      </a>
      </Link>

      <Link passHref href="https://tailwindcomponents.com/u/sahilnetic">
      <a>
      <div className="border border-2 border-emerald-800 border-b-4 border-r-4 shadow-lg rounded-lg py-24 text-white">Linux</div>
      </a>
      </Link>
  
      <Link passHref href="https://tailwindcomponents.com/u/sahilnetic">
      <a>
      <div className="border border-2 border-emerald-800 border-b-4 border-r-4 shadow-lg rounded-lg py-24 text-white">Database</div>
      </a>
      </Link>

      <Link passHref href="https://tailwindcomponents.com/u/sahilnetic">
      <a>
      <div className="border border-2 border-emerald-800 border-b-4 border-r-4 shadow-lg rounded-lg py-24 text-white">Bash Shell Scripting</div>
      </a>
      </Link>

    </div>
  
      </>
    )
  }
  
  export default Domain;