'use client'


'use client';
import { useState } from 'react';

const contents = [
    {
        title: 'Content 1',
        description: 'This is the first content block.',
    },
    {
        title: 'Content 2',
        description: 'This is the second content block.',
    },
    {
        title: 'Content 3',
        description: 'This is the third content block.',
    },
];

export default function TestPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            {/* <div>
                <h1>{contents[activeIndex].title}</h1>
            </div> */}
            {/* Container with relative positioning for fade transition */}
            <div className="relative w-full max-w-md h-40 bg-slate-500">
                {contents.map((content, index) => (
                    <div
                        key={index}
                        className={`
              absolute top-0 left-0 w-full h-full p-6 text-center border rounded-lg shadow-md transition-opacity duration-500
              ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
            `}
                    >
                        <h2 className="text-xl font-bold mb-2">{content.title}</h2>
                        <p className="text-gray-600">{content.description}</p>
                    </div>
                ))}
            </div>

            {/* Button controls */}
            <div className="flex space-x-2 mt-6">
                {contents.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-10 h-10 rounded-full text-white font-bold transition-colors duration-200 ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-400'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
