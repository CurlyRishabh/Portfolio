import React from 'react';
import Contact from '../Components/Contact';
import Type from '../Components/Typewriter';
import Techstack from '../Components/Techstack';
import Projects from '../Components/Projects';
import GitCalender from '../Components/GitCalender';
//logo
import logo from "../Media/developer.svg";
import profile from "../Media/profile.svg";
import cloud from "../Media/sun.svg"

export default function Home() {
  return (
		<div className="flex flex-wrap w-full space-y-3 md:px-20">
			{/* main */}

			<div className="pt-10 w-1/2 text-blue-800 relative text-xl md:text-4xl space-y-2 md:space-y-5 justify-center flex flex-col ">
				<h1>Hi!</h1>
				<h1>
					I'M <strong> Rishabh Singh Bisht</strong>
				</h1>
				<div className="h-20 md:h-40">
					<Type />
				</div>
			</div>
			<div className="relative w-1/2 ">
				<img src={logo} alt="Img" className="mt-10  " />
				<img
					src={cloud}
					alt="Img"
					className="absolute w-1/2 md:w-1/3  -right-4 md:-right-20 top-6 horizontal-rotate"
				/>
			</div>

			{/* Intro */}
			<section id="about" className="w-full flex flex-wrap text-sm md:text-lg md:pt-10">
				<h1 className="text-2xl md:text-4xl w-full text-blue-800 font-semibold pb-2 text-center ">Introduction</h1>

				<div className="w-full text-blue-950">
					<p className="">
						I love creating user-friendly software! I'm skilled in both building the parts you see (front-end)
						and the behind-the-scenes work (back-end).
					</p>
					<div>
						<h3 className="font-mono text-blue-700 font-semibold">UI/UX Focus:</h3>
						<p>
							Dedicated to creating visually appealing and user-friendly interfaces that elevate the user
							experience.
						</p>

						<h3 className="font-mono text-blue-700 font-semibold">Problem Solver:</h3>
						<p>Thrive on overcoming technical challenges and architecting scalable solutions.</p>
					</div>
				</div>
			</section>
			{/* Skills */}
			<div className="w-full items-center flex flex-col pt-4 md:pt-10">
				<h1 className="w-full text-2xl md:text-4xl  text-blue-800 font-semibold pb-2 text-center ">
					Technology Learnt
				</h1>
				<div className="w-5/6">
					<Techstack />
				</div>
			</div>
			{/* Projects */}
			<section id="projects" className=" w-full items-center flex flex-col pt-4 md:pt-10 ">
				<h1 className="w-full text-2xl md:text-4xl text-blue-800 font-semibold pb-2 text-center">My Projects</h1>
				<Projects />
			</section>
			{/* github */}
			<section className="w-full  flex flex-col pt-4 md:pt-10 relative">
				<h1 className="w-full text-2xl md:text-4xl text-blue-800 font-semibold pb-2 text-center">Days I <strong>Code</strong></h1>
				<GitCalender />
			</section>

			{/* Contacts */}
			<section id="contact" className="w-full justify-center text-center pt-10 ">
				<div className="flex justify-center">
					<img src={profile} alt="IMG" className="h-72" />
				</div>
				<p className="mt-2 text-2xl md:text-3xl font-semibold  text-blue-800">Find me on</p>
				<div className="w-full justify-center flex">
					<Contact h={"h-12"} />
				</div>
			</section>
		</div>
  );
}
