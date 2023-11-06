import React from "react";

import cssicon from "../Media/Skills/css.svg";
import cppicon from "../Media/Skills/cpp.svg";
import htmlicon from "../Media/Skills/html.svg";
import nodeicon from "../Media/Skills/nodejs.svg";
import reacticon from "../Media/Skills/react.svg";
import npmicon from "../Media/Skills/npm.svg";

import giticon from "../Media/Skills/github.svg";

import tailwindicon from "../Media/Skills/tailwind.svg";
import jsicon from "../Media/Skills/javascript.svg";
import sqlicon from "../Media/Skills/sql.svg";
import mongoicon from "../Media/Skills/mongodb.svg";

function IconPack(props) {
	return (
		<div className="w-1/6 h-12 flex text-xs font-thin md:text-sm md:font-semibold  items-center flex-col">
			<img alt="Th" className="h-6 hover:h-12 md:h-10 " src={props.src} />
			{props.name}
		</div>
	);
}

export default function Techstack() {
	return (
		<div className=" flex flex-wrap items-center justify-evenly gap-y-4 md:gap-y-10 gap-x-2  text-xs pt-2 md:pt-8 ">
			<IconPack  src={htmlicon} name={"HTML"} />
			<IconPack src={cssicon} name={"CSS"} />
			<IconPack src={jsicon} name={"Javascript"} />
			<IconPack src={nodeicon} name={"Node"} />
			<IconPack src={tailwindicon} name={"Tailwind"} />
			<IconPack src={npmicon} name={"NPM"} />
			<IconPack src={reacticon} name={"React"} />
			
			<IconPack src={giticon} name={"Git"} />

			<IconPack src={mongoicon} name={"MongoDB"} />
			<IconPack src={sqlicon} name={"Mysql"} />
			<IconPack src={cppicon} name={"C++"} />
		</div>
	);
}
