import React, { useEffect, useState } from "react";
import { SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";

export default function About() {
	const techs = [
		{ Icon: SiReact, color: "text-blue-500", duration: "duration-500" },
		{ Icon: SiTailwindcss, color: "text-blue-300", duration: "duration-700" },
		{ Icon: SiNetlify, color: "text-green-400", duration: "duration-1000" },
	];
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.5">To-Do App Deployment on Kubernetes with CI/CD Pipeline</h1>
			<p className="text-lg mb-3 animate-reveal-0.5">
			Developed and managed a Kubernetes-based CI/CD pipeline for deploying a scalable To-Do web application on Google Cloud Platform, utilizing Docker, GitHub, and Cloud Build for automated workflows
			<a href="https://github.com/ahujasherry/ToDo_Kubernetes.git" className="text-yellow-200 hover:underline"> GitHub Link</a>
			</p>
			<br />
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
			Online Bookstore Web Application
			</h1>
			<p className="text-lg animate-reveal-0.7">
			Developed e-commerce platform using React and Express.js, featuring user authentication, secure payment integration<br />
			<a href="https://github.com/ahujasherry/BookStore_MERN" className="text-yellow-200 hover:underline"> GitHub Link</a>
			</p>
			<br />
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
			Terminal Portfolio 
			</h1>
			<p className="text-lg animate-reveal-0.7">
			Developed terminal portfolio with React.js and Tailwind Css<br />
			<a href="https://github.com/ahujasherry/BookStore_MERN" className="text-yellow-200 hover:underline"> GitHub Link</a>
			</p>
			<br />

			<div className="flex gap-5 text-4xl">
				{techs.map(({ Icon, color, duration }, index) => {
					return (
						<Icon
							key={index}
							className={`${color} ${
								animate ? "scale-100" : "scale-0"
							} transform transition-all ${duration}`}
						/>
					);
				})}
			</div>
		</div>
	);
}
