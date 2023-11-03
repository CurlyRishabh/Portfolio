import React from 'react';
import Contact from '../Components/Contact';
import Type from '../Components/Typewriter';
import Techstack from '../Components/Techstack';
import Projects from '../Components/Projects';

//logo
import logo from "../Media/developer.svg";
import profile from "../Media/profile.svg";
import code from "../Media/code.png"

export default function Home() {
  return (
		<div className="flex flex-wrap w-full space-y-3">
			{/* main */}

			<div className="pt-10 w-1/2 text-blue-800  text-xl md:text-4xl space-y-2 md:space-y-5 justify-center flex flex-col ">
				<h1>Hi!</h1>
				<h1>
					I'M <strong> Rishabh Singh</strong>
				</h1>
				<div className="h-20 md:h-40">
					<Type />
				</div>
			</div>
			<img src={logo} className="w-1/2" />

			{/* Intro */}
			<div className="w-full flex flex-wrap text-sm ">
				<p className="text-2xl text-blue-800 font-semibold pb-2">Introduction</p>

				<p className="w-full text-blue-950">
					<p className="">
						I love creating user-friendly software! I'm skilled in both building the parts you see (the
						front-end) and the behind-the-scenes work (the back-end).
					</p>
					<div>
						<ul>
							<li>
								<h3 className="font-mono text-blue-700 font-semibold">UI/UX Focus:</h3>
								<p>
									Dedicated to creating visually appealing and user-friendly interfaces that elevate the
									user experience.
								</p>
							</li>
							<li>
								<h3 className="font-mono text-blue-700 font-semibold">Problem Solver:</h3>
								<p>Thrive on overcoming technical challenges and architecting scalable solutions.</p>
							</li>
						</ul>
					</div>
				</p>
			</div>
			{/* Skills */}
			<div className="w-full items-center flex flex-col my-2">
				<div className="w-full flex  items-center space-x-4 ">
					<p className="font-semibold text-2xl my-4"> Technology Learnt </p>
					<img src={code} className="w-10" />
				</div>
				<div className="w-1/2">
					<Techstack />
				</div>
			</div>
			{/* Projects */}
			<div className="w-full items-center flex flex-col my-2">
				<div className="w-full   items-center space-x-4 ">
					<p className="font-semibold text-2xl my-4"> My Projects </p>
				</div>
				<Projects />
			</div>

			{/* Contacts */}
			<div className="w-full justify-center text-center">
				<div className="flex justify-center">
					<img src={profile} className="h-72" />
				</div>
				<p className="mt-2 font-semibold  text-blue-800">Find me on</p>
				<div className="w-full justify-center flex">
					<Contact h={"h-10"} />
				</div>
			</div>
		</div>
  );
}
