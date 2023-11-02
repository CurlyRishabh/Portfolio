import React from 'react'
import Contact from './Contact'
export default function Footer() {
  return (
    <div className="flex justify-evenly bg-blue-600 fixed bottom-0 w-full">
        <p>Design and develop by Rishabh Singh Bisht</p>
        <p>Copyright 2023</p>
        <Contact/>
    </div>
  )
}
