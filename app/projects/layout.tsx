export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-void via-space-haze/10 to-void ">
			{children}
		</div>
	);
}
