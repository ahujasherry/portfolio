import { GoVerified } from "react-icons/go";
import { SiGithub,SiLeetcode,SiLinkedin } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/ahujasherry",
			text: "@ahujasherry",
		},
		{
			title: "LeetCode",
			Icon: SiLeetcode,
			href: "https://leetcode.com/ahujasherry",
			text: "@ahujasherry",
		},
		{
			title: "Linkedin",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/sherryahuja/",
			text: "@ahujasherry",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/72737856?v=4"
					alt="Sherry Ahuja"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Sherry Ahuja</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join me.</p>
				</div>
			</div>
			<p>
			Hi there, I am experienced senior software developer with over 4 years of expertise. Specializing in Cloud SaaS development, with notable roles including SDE-2 at PayPal and SDE at Samsung R&D. Proficient in full-stack web development and holds a Masters degree from Western University, Canada.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
