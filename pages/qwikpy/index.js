import AsideNav from "./Components/AsideNav";
import SecondNav from "./Components/SecondNav";
import Image from "next/image";
import Link from "next/link";
import Myads from "./Components/MyAds";


const AfterAuth = ({AllS3Img, username, email, avatar})=>{
    return(
        <>
        
    
            <AsideNav avatar={avatar} fonter={'bold'} AllS3Img={AllS3Img} />

    
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] ">
    
    <div>
    <div className="flex bg-black justify-between container mx-auto">
    <div className="w-full h-screen lg:w-7/12  bg-black">
    
    <div className="px-3 bg-black py-5 grid grid-cols-2 text-white sticky top-0 z-50 text-lg font-medium">
    <Link href="/"><button className="text-center border-black border-b-2">🐍 Learn python</button></Link>
    <Link href="/launched"><button className="text-center font-medium ">&nbsp;&nbsp; ️😻 Support us &nbsp;&nbsp;</button></Link>
    </div>
    
    
    
    <div>
    
    






    
        
              <div className="grid sm:grid-cols-4 grid-cols-3 gap-x-4 gap-y-5 mx-3 px-3">


                {/* INSIDE */}
    
         <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between text-sm rounded-xl mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
      
       <div className='flex justify-end items-left'>
       <button className='flex items-left text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-emerald-700 text-neutral-100'>
           <span>Basic learn</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}


                   {/* INSIDE */}
    
                   <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between text-sm rounded-xl mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>

       <div className='flex justify-between items-center'>
       <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-black text-neutral-100'>
           <span>Swipe</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}


    {/* INSIDE */}
    
                      <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between text-sm rounded-xl mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>

    <div className='flex justify-between items-center'>
    <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-black text-neutral-100'>
    <span>Games</span>
    </button>
    </div>
    </div>
    {/* INSIDE */}


              </div>
        














    
    {/* <div className="mx-7 text-lg font-medium pt-2 sm:my-0 my-5 text-neutral-900">Explore</div> */}
    <h4 className="px-7 py-4 mt-2 text-black text-lg"> All Apps
              <button type="button" className="text-xs text-neutral-50 px-3 py-1.5 rounded-full font-medium bg-black -translate-y-1 float-right">Subscriptions</button>
               {/* <button onClick={() => setShowModal(true)} type="button" className="text-sm text-neutral-50 px-3 py-1 rounded-md font-medium bg-neutral-900 -translate-y-1 float-right">create</button> */}
              </h4>
    

    <div className=" mx-3 px-3">
    
         {/* INSIDE */}
    
         <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl  p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
                1
           </div>
           <span className='text-base font-black'>Overview</span>
       </div>
       <div className="text-white"> Convert your website to a mobile app.</div>
       <div className='flex justify-between items-center'>
       <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-neutral-800 hover:bg-neutral-900 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
           <span>See more</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}


        {/* INSIDE */}
    
        <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl  p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
               2
           </div>
           <span className='text-base font-black'>Wapp</span>
       </div>
       <div> Grow your whatsapp business with wapp.</div>
       <div className='flex justify-between items-center'>
       <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-sky-400 hover:bg-sky-500 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
       <span>See more</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}
   

              {/* INSIDE */}
    
              <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl  p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
                3
           </div>
           <span className='text-base font-black'>Ytube</span>
       </div>
       <div> Grow your youtube channel with ytube link.</div>
       <div className='flex justify-between items-center'>
       <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-sky-400 hover:bg-sky-500 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
       <span>See more</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}




           {/* INSIDE */}
    


           {/* <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
                <Image 
                src="/ecommerce.png"
                width={40}
                height={40}
                className="rounded-full"
                
                />
           </div>
           <span className='text-base font-black'>Ecommerce Store</span>
       </div>
       <div> Get upto 30% of on your online store Subscription</div>
       <div className='flex justify-between items-center'>
           <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-sky-400 hover:bg-sky-500 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
           <span>Use App</span>
           </button>
       </div>
       </div> */}



   {/* INSIDE */}

              {/* INSIDE */}
    
              <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl  p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-white text-white'>
              4
           </div>
           <span className='text-base font-black'>Addify Space</span>
       </div>
       <div> Create Your Qr Code For Free.</div>
       <div className='flex justify-between items-center'>
           <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-sky-400 hover:bg-sky-500 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
           <span>See more</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}





           {/* INSIDE */}
    
           <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl  p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-white text-white'>
               5
           </div>
           <span className='text-base font-black'>Digital Business Card</span>
       </div>
       <div> Create your digital and physical business card.</div>
       <div className='flex justify-between items-center'>
           <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-sky-400 hover:bg-sky-500 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
           <span>See more</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}



           {/* INSIDE */}
    
           <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl  p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-white text-white'>
               6
           </div>
           <span className='text-base font-black'>Qr Code</span>
       </div>
       <div> Create awesome QR codes that generate leads</div>
       <div className='flex justify-between items-center'>
           <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-sky-400 hover:bg-sky-500 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
           <span>See more</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}


           {/* INSIDE */}
    
           <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl  p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-white text-white'>
                7
           </div>
           <span className='text-base font-black'>Amazon affiliate</span>
       </div>
       <div> Manage your amazon business store like a pro.</div>
       <div className='flex justify-between items-center'>
           <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-sky-400 hover:bg-sky-500 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
           <span>See more</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}


    </div>
    <br />
    <br /><br /> 
    </div>


    {/* Inside The Feed ENd */}
    <div className="container px-6 py-3 mx-auto">
        <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
       
        
        
        </div>
    </div>
    {/* INSIDE THE FEED */}


    </div>
    
    <div className="hidden sm:block">
            <Myads />
    
    </div>
    </div>
    </div>
    </div>
    {/* END OF BODY */}
        </>
       )
}

export default AfterAuth;