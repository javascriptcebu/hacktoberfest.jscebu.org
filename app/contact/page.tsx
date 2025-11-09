import { NavWrapper } from "../components/nav-wrapper";
import { Facebook, Github, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import { Footer } from "../components/footer";

const socials = [
	{
		icon: <Facebook size={20} />,
		href: "https://facebook.com/javascriptcebu",
		label: "Facebook",
		handle: "@javascriptcebu",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:hacktoberfest@jscebu.org",
		label: "Email",
		handle: "hacktoberfest@jscebu.org",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/javascriptcebu",
		label: "Github",
		handle: "javascriptcebu",
	},
];

export default function ContactPage() {
	return (
		<div className="relative">
			<NavWrapper />
			<div className="px-6 pt-20 pb-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Contact
					</h2>
					<p className="mt-4 text-zinc-400">
						We&apos;d love to hear from you. Reach out to us on any of our
						social media channels.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link
							href={socials[0].href}
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{socials[0].icon}
							</span>{" "}
							<div className="z-10 flex flex-col items-center">
								<span className="lg:text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
									{socials[0].handle}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{socials[0].label}
								</span>
							</div>
						</Link>
					</Card>
					<Card>
						<Link
							href={socials[1].href}
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{socials[1].icon}
							</span>{" "}
							<div className="z-10 flex flex-col items-center">
								<span className="lg:text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
									{socials[1].handle}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{socials[1].label}
								</span>
							</div>
						</Link>
					</Card>
				</div>

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0">
					<Card>
						<Link
							href={socials[2].href}
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{socials[2].icon}
							</span>{" "}
							<div className="z-10 flex flex-col items-center">
								<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
									{socials[2].handle}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{socials[2].label}
								</span>
							</div>
						</Link>
					</Card>
				</div>
			</div>
			<Footer/>
		</div>
	);
}