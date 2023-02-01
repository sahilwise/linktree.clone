import Link from "next/link";
import Image from "next/image";


const SecondNav = ({sfonter,sfonter1,sfonter2,sfonter3,sfonter4})=>{
    
  const usefonter = sfonter;
  const usefonter1 = sfonter1;
  const usefonter2 = sfonter2;
  const usefonter3 = sfonter3;
  const usefonter4 = sfonter4;

    return(
    <div className="z-50 bg-white pb-2">
  <div>
	<div className="flex justify-around rounded-xl bg-white w-full pt-2">  


  {usefonter4 &&(
        <>
            <div >
    <Link href="/" passHref>
     <div className=" mb-2 bg-sweetgray translate-y-1 rounded-2xl">  
     <div className="flex items-center justify-center p-3">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
      </svg>
      <p className=" text-black text-xs font-black tracking-wider">&nbsp;Dashboard</p>
       </div>
        </div>  
        </Link>
        </div>
        </>
      )}

      {!usefonter4 &&(
        <>
        <div >
<Link href="/" passHref>
 <div className=" mb-2 bg-sweetgray translate-y-1 rounded-full">  
 <div className="flex items-center justify-center p-3">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

   </div>
    </div>  
    </Link>
    </div>
    </>
      )}
      


        {/* {usefonter1 &&(
          <>
                    <div> 
        <Link href="/contact" passHref>
        <div className=" mb-2 bg-cutebrown translate-y-1 rounded-2xl">  
        <div className="flex items-center justify-center p-3">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
        <p className=" text-black text-md font-black tracking-wider">&nbsp;Contacts</p>
            </div>
            </div>  
            </Link>
          </div>

          </>
        )}


        {!usefonter1 &&(
          <>
                    <div> 
        <Link href="/contact" passHref>
        <div className="relative mb-2 pt-2">  
         <div className="flex items-center bg-sweetgray justify-center  p-2 rounded-full">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>

            </div>
            </div>  
            </Link>
          </div>

          </>
        )} */}




        {/* {usefonter2 &&(
          <>
          <div>
          <Link href="/events" passHref>
          <div className=" mb-2 bg-cutebrown translate-y-1 rounded-2xl">  
        <div className="flex items-center justify-center p-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
        <p className=" text-black text-md font-black tracking-wider">&nbsp;Events</p>

            </div>
            </div>  
            </Link>
            </div>
          </>
        )}


        {!usefonter2 &&(
          <>
          <div>
          <Link href="/events" passHref>
          <div className="relative mb-2 pt-2">  
         <div className="flex items-center bg-sweetgray justify-center  p-2 rounded-full">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>

            </div>
            </div>  
            </Link>
            </div>
          </>
        )} */}


        {!usefonter2 &&(
          <>
          <div>
          <Link href="/profile" passHref>
          <div className="relative mb-2 pt-2">  
         <div className="flex items-center bg-sweetgray justify-center  p-2 rounded-full">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>


            </div>
            </div>  
            </Link>
            </div>
          </>
        )}


	        </div>
          </div>   
          </div>
    )
}


export default SecondNav;