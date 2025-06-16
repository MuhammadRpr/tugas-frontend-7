import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-[url('/image/bg-home.jpg')] bg-cover bg-center">
      <div className="flex max-w-screen-xl mx-auto md:flex-row flex-col">
        <div className="text-white flex flex-col items-left justify-center h-screen text-left gap-10 px-40">
          <p className="text-2xl tracking-widest uppercase">
            So, you want to travel to
          </p>
          <h1 className="text-8xl">
            SPACE
          </h1>
          <p className="font-light">Let’s face it; if you want to go to space, you might as well genuinely go <br></br> to outer space and not hover kind of on the edge of it. Well sit back,<br></br> and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        {/* <div className="flex justify-end items-end absolute right-90 top-75">
          <div className='relative group grid place-items-center bg-white rounded-full aspect-square size-[300px] cursor-pointer'>
            <Link href='/destination' className='z-1 text-black'>Explore</Link>
            <div className='absolute w-full h-full bg-white rounded-full z-0 group-hover:scale-150 group-hover:opacity-20 transition-all'></div>
          </div> 

        </div>*/}
        <div className="flex justify-center items-center gap-40 pb-15">
          {/* <div className="text-white flex items-center justify-center text-center w-60 h-60 bg-white rounded-full hover:scale-150 group-hover:opacity-20 transition-all">
            <Link href='/destination' className="z-1 text-black">Explore</Link>
          </div> */}
          <div className='relative group grid place-items-center bg-white rounded-full aspect-square size-[300px] cursor-pointer '>
            <Link href='/destination' className='z-1 text-black'>Explore</Link>
            <div className='absolute w-full h-full bg-white rounded-full z-0 group-hover:scale-150 group-hover:opacity-20 transition-all'></div>
          </div>
        </div>
      </div>
    </main>
  );
}