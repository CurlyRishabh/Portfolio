import React from 'react';
import Contact from '../Components/Contact';
import Type from '../Components/Typewriter';
//logo
import logo from "../Media/developer.svg"

export default function Home() {
  return (
    <div className='flex flex-wrap mt-10 w-full'>
        <div className='pt-20 w-1/2 text-blue-800 bg-blue-300 text-5xl space-y-10'>
            <h1>Hi!</h1>
            <h1>I'M <strong> Rishabh Singh</strong>
            </h1>
    <Type/>
        </div>
        <img src={logo} className='w-1/2 bg-blue-700'/>
        <div className='w-full flex flex-wrap bg-blue-400 '> 
        <p className='w-2/3 bg-rose-200'>Introduction</p>
        <img src={logo} className='w-1/3 bg-rose-300'/>
        </div>
        <div className='w-full justify-center text-center'>
            Find me on
            <div className='w-full justify-center flex'>
            <Contact/>
            </div>
        </div>
    </div>
  )
}
