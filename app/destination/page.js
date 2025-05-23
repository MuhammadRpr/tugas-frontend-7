"use client"

import { useState } from "react"

const destinations = [
    {
        planet: "Moon",
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel_time: "3 days",
        image: "/images/Moon.png"
    },
    {
        planet: "Mars",
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. km",
        travel_time: "9 months",
        image: "/images/Mars.png"
    },
    {
        planet: "Europa",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. km",
        travel_time: "3 years",
        image: "/images/Europa.png"
    },
    {
        planet: "Titan",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        travel_time: "7 Years",
        image: "/images/Titan.png"
    },
]


export default function DestinationPage() {

    const [activeContent, setActiveContent] = useState(0)


    return (
        <section className="bg-[url(/image/bg-moon.jpg)] min-h-screen bg-cover pt-40 px-5">
            <div className="container md:max-w-6xl m-auto">
                <div className="page-title text-lg md:text-2xl condensed uppercase tracking-widest text-white pb-20">
                    <p><span className="mr-5 font-bold text-slate-500">01</span>Pick your destination</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <img src={destinations[activeContent].image} alt="" className="flex flex-1 max-w-[500px] " />

                    <div className="bg-amber-200 flex-1" >
                        <div>
                            {destinations.map((destinations, index) => {
                                return (
                                    <button key={index} onClick={() => setActiveContent(index)}>{destinations.planet}</button>
                                )
                            })}
                        </div>

                        <div>
                            <h1 className="uppercase text-7xl tracking-widest ">{destinations[activeContent].planet}</h1>
                            <p>{destinations[activeContent].description}</p>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}
