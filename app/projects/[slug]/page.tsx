import "./mdx.css";

import { Header } from "./header";
import { Mdx } from "@/app/components/mdx";
import { Metadata } from "next";
import { Redis } from "@upstash/redis";
import { ReportView } from "./view";
import { allProjects } from "contentlayer/generated";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	const headersList = headers();
	const host = headersList.get("host") || "hacktoberfest.jscebu.org";
	const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
	const baseUrl = `${protocol}://${host}`;

	return {
		title: project.title,
		description: project.description,
		openGraph: {
			title: project.title,
			description: project.description,
			type: "article",
			url: `${baseUrl}/projects/${project.slug}`,
			images: [
				{
					url: project?.image
						? `${baseUrl}${project.image}`
						: `${baseUrl}/og.png`,
					width: 1920,
					height: 1080,
					alt: project.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: project.title,
			description: project.description,
			images: project?.image
				? `${baseUrl}${project.image}`
				: `${baseUrl}/og.png`,
		},
	};
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	const views =
		(await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
