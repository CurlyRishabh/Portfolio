import React from 'react'

export default function Nav() {
  return (
		<div className="flex px-2 justify-between fixed top-0 left-0 w-full bg-blue-600">
			<p>RSB</p>

			<a href="">Home</a>

			
			<a href="#about">About</a>
			<a href="#projects">Project</a>
			<a href="#contact">Contact</a>

			

			<div>Resume</div>
		</div>
  );
}
