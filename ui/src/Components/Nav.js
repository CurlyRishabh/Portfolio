import React, {useState} from 'react'

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

  return (
		// <nav className="flex px-2 justify-between h-14 items-center fixed top-0 left-0 w-full bg-blue-600">
		// 	<p>RSB</p>
		// 	<div className="flex">
		// 		<div className=" flex flex-col relative right-0 w-10 h-10 ">
		// 			<div>++</div>
		// 			<a href="#about">About</a>
		// 			<a href="#projects">Project</a>
		// 			<a href="#contact">Contact</a>
		// 			<a href="#contact">Resume</a>
		// 		</div>
		// 	</div>
		// </nav>

		<nav className="bg-gray-800 p-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center flex-shrink-0 text-white mr-6" onClick={toggleMenu}>
					<span className="font-semibold text-xl tracking-tight cursor-pointer">Logo</span>
				</div>
				<div className={`w-full block lg:flex lg:items-center lg:w-auto ${showMenu ? "block" : "hidden"}`}>
					<div className="text-sm lg:flex-grow">
						<a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
							About
						</a>
						<a
							href="#projects"
							className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
						>
							Projects
						</a>
						<a
							href="#contact"
							className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
						>
							Contact
						</a>
						<a href="#resume" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
							Resume
						</a>
					</div>
				</div>
			</div>
		</nav>
  );
}
