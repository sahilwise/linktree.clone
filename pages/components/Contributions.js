
import Link from "next/link";
import Image from "next/image";
const Contributions = ()=>{

    return(
  <div>
      <div className="grid sm:grid-cols-3 px-8 sm:px-32 bg-transparent gap-y-8 sm:gap-x-8">


         {/* INSIDE */}
    
         <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 text-black bg-neutral-700'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
                <Image 
                src="/appmojo.png"
                width={40}
                height={40}
                className="rounded-full"
                
                />
           </div>
           <span className='text-base text-white font-black'>Tailwind Components</span>
       </div>
       <div className="text-neutral-700"> 
       Convert your website to a mobile app.
       Convert your website to a mobile app.
       Convert your website to a mobile app.
       Convert your website to a mobile app.
       Convert your website to a mobile app.
       </div>
       <div className='flex justify-between items-center'>
       <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-emerald-600 hover:bg-emerald-700 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
           <span>Learn more ▲</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}



            {/* INSIDE */}
    
            <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 text-black bg-neutral-700'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
                <Image 
                src="/appmojo.png"
                width={40}
                height={40}
                className="rounded-full"
                
                />
           </div>
           <span className='text-base text-white font-black'>Kolkata99</span>
       </div>
       <div className="text-neutral-700"> 
       Convert your website to a mobile app.
       Convert your website to a mobile app.
       Convert your website to a mobile app.
       Convert your website to a mobile app.
       Convert your website to a mobile app.
       </div>
       <div className='flex justify-between items-center'>
       <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-emerald-600 hover:bg-emerald-700 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
           <span>Learn more ▲</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}
    
          </div>
  
      </div>
    )
  }
  
  export default Contributions;