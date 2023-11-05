import React from 'react';
import p1 from "../Media/Projects/E-commerce-M.png";
import git from "../Media/github.svg"
import liv from "../Media/rocket.png"


const LinkButton = ({href, text, pic}) => (

	<a href={href}  target="_blank">
		<div className="flex items-center gap-1 bg-blue-800 w-20 md:w-28 justify-center h-10 hover:bg-blue-950 font-bold text-sm md:text-xl text-white rounded-md">
		<img src={pic} alt="j" className='w-7 ' />
			{text}
		</div>
	</a>
);

function List(props){
    return (
		<div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-4 md:pt-10">
			<img className="md:h-56 border-2 bg-slate-800 p-1 border-white rounded-lg" src={props.src} alt="Img" />
			<div className="flex flex-col text-center justify-between py-2">
				<h1 className="text-xl text-blue-600 font-semibold">{props.title}</h1>
				<p className="font-mono text-justify text-blue-950 text-lg">{props.desc}</p>
				<div className="flex justify-center gap-8 ">
					{props.liveref && <LinkButton href={props.liveref} text="Live" pic={liv} />}
					{props.gitref && <LinkButton href={props.gitref} text="Github" pic={git} />}
				</div>
			</div>
		</div>
	);
}

export default function Projects() {
  return (
		<div>
			<List
				title={"Cool Shop"}
				gitref={"https://github.com/CurlyRishabh/E-commerce"}
                liveref={"https://curlyrishabh.github.io/E-commerce"}
				src={p1}
				desc={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem sequi assumenda libero? Doloribus voluptatibus nisi vero hic repellendus error?"
				}
			/>
		</div>
  );
}
