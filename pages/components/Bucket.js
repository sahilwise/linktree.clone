import Image from "next/image";
const Bucket = ()=>{
        return(
            <>
                        {/* INSIDE */}
                        <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl  p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
                        <div className='flex flex-row items-center space-x-3'>
                        <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-white text-white'>
                        <Image 
                        className="rounded-full"
                        width={50}
                        height={50}
                        src="/B.png"
                        />
                        </div>
                        <span className='text-base font-black'>Css Flexbox</span>
                        </div>
                        <div> Manage your amazon business store like a pro.</div>
                        <div className='flex justify-between items-center'>
                        <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-emerald-600 hover:bg-emerald-500 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                        <span>$ 0</span>
                        </button>
                        <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-sky-400 hover:bg-sky-500 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                        <span>Get this</span>
                        </button>
                        </div>
                        </div>
                        {/* INSIDE */}



            </>
        )
}


export default Bucket;