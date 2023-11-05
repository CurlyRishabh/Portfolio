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
		<div className="w-1/5 h-12 flex items-center flex-col">
			<img alt="Th" className="h-6 hover:h-12 md:h-10 horizontal-rotate" src={props.src} />
			{props.name}
		</div>
	);
}

export default function Techstack() {
	return (
		<div className=" flex flex-wrap items-center justify-evenly gap-y-3 md:gap-y-4  text-xs pt-2 md:pt-8 ">
			<IconPack  src={htmlicon} name={"HTML"} />
			<IconPack src={cssicon} name={"CSS"} />
			<IconPack src={nodeicon} name={"Node"} />
			<IconPack src={npmicon} name={"NPM"} />
			<IconPack src={reacticon} name={"React"} />
			<IconPack src={cppicon} name={"C++"} />
			
			<IconPack src={giticon} name={"Git"} />

			<IconPack src={tailwindicon} name={"Tailwind"} />
			<IconPack src={sqlicon} name={"Mysql"} />
			<IconPack src={jsicon} name={"Javascript"} />
		</div>
	);
}
