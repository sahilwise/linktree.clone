import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from './components/Layout'
import Contributions from './components/Contributions'
import Footer from './components/Footer'
import Projects from './components/Projects'
// Images
import profilImage from "../public/evilcat.png"



export default function Home() {

  const router =  useRouter()
  const [blocker,setBlocker] = useState('')
  const [blocker1,setBlocker1] = useState('none')
  const [social, setSocial] = useState('none')
  
  const socialDisplay = ()=>{
   if(social=="none"){
    setSocial('')
   }else{
    setSocial('none')
   }
  }
	const hiddenDisplay = ()=>{
     setBlocker('block')
     setBlocker1('none')
  }
  const hiddenDisplay2 = ()=>{
    setBlocker('none')
    setBlocker1('block')
  }

  return (
    <Layout>

    
<div className="py-16 bg-zinc-900">
        <div className="container m-auto px-6 sm:px-32">

          
      
         <div className="lg:flex justify-between items-center">
             <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="sm:text-5xl text-4xl text-white font-medium leading-tight mb-5 capitalize">👋 Hi There!</h1>
                <p className="text-xl text-zinc-200"> 
                "Sahil is a software developer with a passion for solo travel and open-source contribution. "


                </p>
    
                <div className="py-5 flex gap-x-4">
                  <a href="mailto:hi@salnet.xyz" className="text-white border px-5 py-2 border-white rounded-lg border-t-2 border-l-2">Contact</a>
                  <a onClick={socialDisplay} className="text-white border px-5 pt-2 border-white rounded-lg border-t-2 border-l-2">Social Links</a>
             </div>  
             <div style={{display :social}} className='flex gap-x-4'>
                <a href='https://twitter.com/salnetxyz'>
                <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                </a>
                <a href='https://instagram.com/salnetxyz'>
                <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                </a>
                <a href='https://github.com/salnetxyz'>
                <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                </a>
              </div>           
              </div>
              <div className="lg:w-4/12 rounded-full scale-100 rounded-lg -translate-y-4">
                <Image alt="sahil logo" width="350" height="350" src={profilImage} />
              </div>
          </div>
      
        </div>
      </div>



     
      <div className='bg-zinc-900'> 
        
      <div style={{display : `${blocker}`}}>
      <h1 className="sm:mx-32 mx-8 text-center mx-6 text-white text-2xl sm:text-5xl pb-10 font-light">My Startups</h1>
      <h2 className="sm:mx-32 mx-8 mx-6 text-white text-lg sm:text-2xl pb-10 font-light"><span className='font-medium text-emerald-400 underline decoration-2 decoration-emerald-500 underline-offset-8' onClick={hiddenDisplay} >Startups</span> | <span className='hover:animate-pulse' onClick={hiddenDisplay2}>Contributions</span></h2>

      <Projects />
      </div>

      <div style={{display : `${blocker1}`}}>
      <h1 className="sm:mx-32 mx-6 text-white text-center text-2xl sm:text-5xl pb-10 font-light">Contributions</h1>
      <h2 className="sm:mx-32 mx-6 text-white text-lg sm:text-2xl pb-10 font-light"><span className='hover:animate-pulse' onClick={hiddenDisplay} >Startups</span> | <span className='font-medium text-emerald-400 underline decoration-2 decoration-emerald-500 underline-offset-8' onClick={hiddenDisplay2}>Contributions</span></h2>

      <Contributions />
      </div>

      <h1 className="sm:mx-8 text-center mx-6 text-white text-2xl sm:text-5xl py-20 font-light">📚 QwikLearn</h1>
        <div className='px-8 sm:px-32'>

         {/* INSIDE */}
    
         <div className='break-inside shadow shadow-xl border border-b-4 border-b-cutebrown border-l-2 border-l-cutebrown border-cutebrown relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 text-black bg-neutral-700'>
       
       <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white'>
           🐍
           </div>
           <span className='text-base text-white font-black'>Qwikpy</span>
       </div>
       <div className="text-neutral-100"> 
       Most easiest and quickest way to learn python. Learn from short intro or just swipe right to learn. And find Cool beginner friendly projects.
       </div>
       <div className='flex justify-between items-center'>
       <button onClick={()=>{router.push('/qwikpy')}} className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 bg-emerald-600 hover:bg-emerald-700 hover:text-white text-white dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
           <span>Learn qwikpy ▲</span>
           </button>
       </div>
       </div>
   {/* INSIDE */}
        </div>


      <Footer />
      
      </div>

    </Layout>
  )
}
