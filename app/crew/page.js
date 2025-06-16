"use client"

import { useState } from "react"

const crew = [
    {
        bidang: "COMMANDER",
        nama: "DOUGLAS HURLEY",
        description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: "/image/hurley.png",
        but: ""
    },
    {
        bidang: "MISSION SPECIALIST",
        nama: "MARK SHUTTLEWORTH",
        description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image: "/image/mark.png",
        but: ""
    },
    {
        bidang: "PILOT",
        nama: "VICTOR GLOVER",
        description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        image: "/image/victor.png",
        but: ""
    }
]



export default function CrewPage() {

    const [activeContent, setActiveContent] = useState(0)


    return (
        <section className='bg-[url(/image/bg-crew.jpg)] min-h-screen bg-cover pt-40 px-5'>
            <div className="container md:max-w-6xl m-auto ">
                <div className="page-title text-lg md:text-2xl condensed uppercase tracking-widest text-white pb-20">
                    <p><span className="mr-5 font-bold text-slate-500">02</span>MEET YOUR CREW</p>
                </div>
                <div className="flex flex-col lg:flex-row-reverse gap-5 text-white">
                    <div className="pb-10 " >

                        <img src={crew[activeContent].image} alt="" className="flex flex-1 max-w-[400px] " />

                    </div>
                    <div className="p-10">
                        <h1 className="text-gray-400 pt-5">{crew[activeContent].bidang}</h1>
                        <h1 className="uppercase text-7xl tracking-widest pt-10">{crew[activeContent].nama}</h1>
                        <p className="text-gray-300 pt-5">{crew[activeContent].description}</p>
                        <div className="justify-around pt-5">
                            {crew.map((crew, index) => {
                                return (
                                    <button key={index} onClick={() => setActiveContent(index)} className="w-4 h-4 m-4 bg-white rounded-full hover:bg-gray-200">{crew.but}</button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
