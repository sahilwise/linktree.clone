import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import LinkCard from "./LinkCard";



export default function Modal({Text, Path}) {

  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter()

  return (
    <>
          
      <button style={{cursor: 'url(handler.png), auto'}} onClick={() => setShowModal(true)} type="button"  className='bg-neutral-100 text-sm text-black px-4 border py-2 rounded-full'>
      🖤 Thanks
      </button>
      {showModal ? (
        <div className="shadow-xl">

          <div
            className="justify-center shadow-xl items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
    <div className="bg-white sticky mx-4 rounded-3xl ">
      <div className="text-right">
        <button style={{cursor: 'url(handler.png), auto'}} onClick={() => setShowModal(false)} className="text-right text-cutebrown rounded-xl px-3 my-4 mx-4 bg-cutegreen">close</button>
      </div>
      <hr />
      <div className="px-5 bg-white  bottom-0">
      
      <div className="flex flex-col items-center my-5">
            <div className="w-16 h-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${`/support.png`})` }}></div>
            <span className="my-3 font-black text-xl">
               Send Money to Pintu Maity
            </span>
            
            <div className="grid grid-cols-1 gap-x-4 pb-32  ">
                {/* <div style={{cursor: 'url(handler.png), auto'}} onClick={()=>{location.assign('https://www.paypal.com/paypalme/jsthil99')}} className="bg-black text-white px-5 py-2 rounded-full text-center">Paypal</div> */}
                <div style={{cursor: 'url(handler.png), auto'}} onClick={()=>{location.assign('upi://pay?pa=iamsahil@pingpay&pn=Salnet&cu=INR&am=0')}} className="bg-black text-white px-12 py-2 rounded-full text-center">Send Via Upi</div>
            </div>

            <span className="text-xs text-white text-center">LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
            LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
            </span>

            <div className="text-xs text-center">
            0% commission</div>
        </div>


      </div>
      </div>  
            </div>
          <div className="opacity-30 blur-xl fixed inset-0 z-40 bg-neutral-500"></div>
        </div>
      ) : null}
    </>
  );
}