"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import PastYearsDropdown from "./nav-dropdown";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-void/0 border-transparent"
						: "bg-void/90 border-space-haze/30"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-4 mx-auto">
					<div className="flex flex-wrap items-center gap-2 sm:gap-4">
						<div className="flex gap-0.5 items-center group">
							<Link
								href="/projects"
								className="inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
							>
								Projects
							</Link>
							<PastYearsDropdown />
						</div>

						<Link
							href="/events"
							className="inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
						>
							Events
						</Link>

						<Link
							href="/join"
							className="inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
						>
							Join
						</Link>

						<Link
							href="/submit"
							className="inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
						>
							Submit
						</Link>

						<Link
							href="/sponsor"
							className="inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
						>
							Sponsor
						</Link>

						<Link
							href="/volunteer"
							className="inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
						>
							Volunteer
						</Link>

						<Link
							href="/showcase"
							className="inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
						>
							Showcase
						</Link>

						<Link
							href="/contact"
							className="inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="inline-flex items-center justify-center p-2 transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
					>
						<ArrowLeft className="w-5 h-5" />
					</Link>
				</div>
			</div>
		</header>
	);
};
