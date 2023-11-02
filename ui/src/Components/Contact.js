import React from 'react';
import linkedin from "../Media/linkedin.svg"
import instagram from "../Media/instagram.svg";
import gmail from "../Media/gmail.svg";
import github from "../Media/github.svg";

export default function ({h},{s}) {
  return (
		<div className="flex items-center justify-evenly flex-wrap">
			<img src={github} className={h } />
			<img src={instagram} className={h} />
			<img src={gmail} className={h} />

			<img src={linkedin} className={h} />
		</div>
  );
}
