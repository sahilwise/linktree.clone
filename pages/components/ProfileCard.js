const ProfileCard = ()=>{
    return(
        <>

<div className="flex items-center justify-center">
<div className="bg-neutral-900 transition duration-700 ease-in-out hover:-skew-x-3 hover:skew-y-3 hover:translate-y-6 shadow-lg hover:shadow-2xl sm:hover:scale-150 hover:scale-100 scale-90 font-semibold text-center rounded-3xl border p-10 max-w-xs">
 <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="/sahilnetic.gif" alt="product designer" />
 <h1 className="text-lg text-neutral-100"> Salnet Xyz </h1>
 <h3 className="text-xs font-thin tracking-wide text-zinc-200 "> Developer </h3>

 <div class="my-3 grid grid-cols-2 items-center gap-4 px-4">

                    <a className='text-right' href="https://twitter.com/salnetxyz">
                    <button class="fixed sticky h-5 w-5 transform rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:text-white">
                    <img className="w-6" alt="profile pic" src="/twitter.png" />
                    </button>
                    </a>

                    <a className='text-left' href="https://instagram.com/salnetxyz">
                    <button class="fixed sticky h-5 w-5 transform rounded-full bg-transparent text-2xl duration-500 hover:-translate-y-3 hover:text-white">
                    <img className="w-6" alt="profile pic" src="/instagram.png" />
                    </button>
                    </a>

</div>

 <p className="text-xs text-neutral-200 mt-4 font-thin border p-6 rounded-xl border-neutral-700 border-l-4 border-b-4">" Hey amigo, this is Sal. Creator of addify. Ok cool, this is my addify id"</p>
 <div className="space-x-2">
 <button className="bg-neutral-900 text-xs px-4 py-2 mt-8 rounded-l-sm rounded-3xl text-gray-100 font-semibold Capitalize tracking-wide">🍉 View Profile</button>

 </div>
 </div>
</div>
      
        
        </>
    )
}

export default ProfileCard