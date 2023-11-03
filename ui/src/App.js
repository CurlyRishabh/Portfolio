import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';


export default function App() {
  return (
		<div className="bg-indigo-300 w-full">
			{/* <img src={BG} className="fixed h-full w-full top-0 left-0 z-[-1] "></img> */}
			<Nav />
			<div className=" flex w-full px-5 ">
				<Home />
			</div>
			<Footer />
		</div>
  );
}
