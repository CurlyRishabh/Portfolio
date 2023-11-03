import React from 'react';
import p1 from "../Media/Projects/E-commerce-M.png";


const LinkButton = ({href, text}) => (

	<a href={href} target="_blank">
		<button className="bg-blue-800 w-20 h-10 hover:bg-blue-950 font-bold text-xl text-white rounded-md">{text}</button>
	</a>
);

function List(props){
    return (
		<div className="flex flex-col md:flex-row gap-6">
			<img className="md:h-56 border-2 bg-slate-800 p-1 border-white rounded-lg" src={props.src} alt="Img" />
			<div className="flex flex-col text-center justify-between py-2">
				<h1 className="text-xl text-blue-600 font-semibold">{props.title}</h1>
				<p className="font-mono text-justify text-blue-950 text-lg">{props.desc}</p>
				<div className="flex justify-center gap-8 ">
					{props.liveref && <LinkButton href={props.liveref} text="Live" />}
					{props.gitref && <LinkButton href={props.gitref} text="Github" />}
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
