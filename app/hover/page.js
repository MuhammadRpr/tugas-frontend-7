import React from 'react'
import Link from 'next/link'

export default function HoverPage() {
    return (
        <div className='bg-slate-800 h-screen pt-32 rounded-full'>


            <Link href="/">
                <div className='relative group grid place-items-center bg-white rounded-full aspect-square size-[300px]'>
                    <p className='z-1 text-black'>Explore</p>
                    <div className='absolute w-full h-full bg-white rounded-full z-0 group-hover:scale-150 group-hover:opacity-20 transition-all'>x</div>
                </div>
            </Link>
        </div>
    )
}
