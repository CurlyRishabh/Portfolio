import React from 'react'
import Contact from './Contact'
export default function Footer() {
  return (
    <div className="flex mt-10 bg-blue-600 flex-wrap justify-evenly w-full">
        <p>Design and develop by Rishabh Singh Bisht</p>
        <p>Copyright 2023</p>
        <Contact h={"h-6"}/>
    </div>
  )
}
