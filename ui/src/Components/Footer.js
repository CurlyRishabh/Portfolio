import React from 'react'
import Contact from './Contact'
export default function Footer() {
  return (
		<div className="flex flex-col md:flex-row md:h-12 mt-10 bg-violet-500 text-white text-md md:text-xl items-center  justify-between md:px-4 w-full">
			<p>Design by Rishabh Singh Bisht</p>
			<p className='inline-block'>Icons by icons8</p>
			<Contact h={"h-8 md:h-10"} />
		</div>
  );
}
