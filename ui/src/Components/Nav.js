import React, {useState} from 'react'
import menu from "../Media/menu.svg";
import dash from "../Media/nav.png";


function Mobile(props){
	return (
		<div className={`md:hidden  flex flex-col  transition-all ease-out duration-1000 ${props.show ? "w-28" : "w-20"}`}>
			<div className=" text-white items-center flex font-mono font-bold justify-between  text-3xl gap-2  ">
				{props.show ? (
					<img className="h-8" src={dash} alt="///" onClick={props.handleClick} />
				) : (
					<img className="h-8" src={menu} alt="///" onClick={props.handleClick} />
				)}
				<p>
					R<span className="font-thin text-white text-2xl pr-1">SB</span>
				</p>
			</div>
			<div
				className={
					" pl-2 text-xl  bg-violet-500  " +
					(props.show ? "flex flex-col h-28 border-t-2 border-violet-600" : "hidden")
				}
			>
				<a
					onClick={props.handleClick}
					href="#about"
					className=" text-white hover:text-gray-400  border-b pr-2 mr-4 pb-2 "
				>
					About
				</a>
				<a
					onClick={props.handleClick}
					href="#projects"
					className=" text-white hover:text-gray-400  border-b pr-2 mr-4 pb-2"
				>
					Projects
				</a>
				<a onClick={props.handleClick} href="#contact" className=" text-white hover:text-gray-400  pr-2 mr-4 ">
					Contact
				</a>
			</div>
		</div>
	);
}

function Desktop(){
	return (
		<div className="hidden md:flex px-3 items-center justify-between">
			<div className="text-white font-mono font-bold  text-4xl">
				R<span className="font-thin text-white text-3xl">SB</span>
			</div>
			<div className="space-x-4 ">
				<a href="#about" className="text-white hover:text-gray-400 ">
					About
				</a>
				<a href="#projects" className="text-white hover:text-gray-400">
					Projects
				</a>
				<a href="#contact" className="text-white hover:text-gray-400 ">
					Contacts
				</a>
				
			</div>
		</div>
	);
}
 

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

  return (
		<nav className="fixed h-10 md:h-12 w-full bg-violet-500 z-20 ">
			<Mobile handleClick={toggleMenu} show={showMenu}/>
			<Desktop />
		</nav>
  );
}
