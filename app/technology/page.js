"use client"

import { useState } from 'react'

const tech = [
    {
        btn: "1",
        name: "THE TERMINOLOGY…",
        judul: "LAUNCH VEHICLE",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image: "/image/rok1.jpg"
    },
    {
        btn: "2",
        name: "THE TERMINOLOGY…",
        judul: "SPACEPORT",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        image: "/image/rok2.jpg"
    },
    {
        btn: "3",
        name: "THE TERMINOLOGY…",
        judul: "SPACE CAPSULE",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        image: "/image/rok3.jpg"
    }

]




export default function TechnologyPage() {

    const [activeContent, setActiveContent] = useState(0)

    return (
        <section className='bg-[url(/image/bg-Technology.jpg)] min-h-screen bg-cover pt-40 px-5'>
            <div className="container md:max-w-6xl m-auto">
                <div className="page-title text-lg md:text-2xl condensed uppercase tracking-widest text-white pb-20">
                    <p><span className="mr-5 font-bold text-slate-500">03 </span>SPACE LAUNCH 101</p>
                </div>

                <div className="flex flex-col lg:flex-row-reverse justify-center align-center gap-5 text-white pt-10">

                    <div className='flex lg:flex-row'>
                        <img src={tech[activeContent].image} alt="" className="flex flex-1 max-w-[400px] " />
                    </div>


                    <div>
                        <h1 className="text-gray-400">{tech[activeContent].name}</h1>
                        <h1 className="uppercase text-7xl tracking-widest pt-5">{tech[activeContent].judul}</h1>
                        <p className="text-gray-300 pt-5">{tech[activeContent].description}</p>

                    </div>
                    <div>
                        {tech.map((tech, index) => {
                            return (
                                <button className="text-white mt-13 border border-white rounded-full w-10 h-10 hover:bg-white" key={index} onClick={() => setActiveContent(index)}>{tech.btn}</button>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}
