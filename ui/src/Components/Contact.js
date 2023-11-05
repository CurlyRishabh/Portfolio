import React from 'react';
import linkedin from "../Media/linkedin.svg"
import instagram from "../Media/instagram.svg";
import gmail from "../Media/gmail.svg";
import github from "../Media/github.svg";

function Contact ({h}) {
  return (
		<div className="flex items-center space-x-2 justify-evenly flex-wrap">
			<a className='relative hover:-top-1' href="https://www.linkedin.com/in/rishabhsingh940/" target="_blank" rel="noreferrer">
				<img src={linkedin} className={h} alt="Li"/>
			</a>
			<a className='relative hover:-top-1'  href="mailto:rissag906@gmail.com" target="_blank" rel="noreferrer">
				<img src={gmail} className={h} alt="mail" />
			</a>
			<a className='relative hover:-top-1' href="https://github.com/CurlyRishabh" target="_blank" rel="noreferrer">
				<img src={github} className={h} alt="Git"/>
			</a>

			<a className='relative hover:-top-1'  href="https://www.instagram.com/curly_rishabh/"  target="_blank" rel="noreferrer">
				<img src={instagram} className={h}  alt="Mes"/>
			</a>
		</div>
  );
}

export default Contact;