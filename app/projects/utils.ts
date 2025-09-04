import { Redis } from "@upstash/redis";
import { Project } from "contentlayer/generated";

const redis = Redis.fromEnv();

export async function getProjectViews(projects: Project[]) {
	const views = (
		await redis.mget<number[]>(
			...projects.map((p) => ["pageviews", "projects", p.slug].join(":")),
		)
	).reduce((acc, v, i) => {
		acc[projects[i].slug] = v ?? 0;
		return acc;
	}, {} as Record<string, number>);

	return views;
}

export function filterProjectsByYear(projects: Project[], year: number) {
	return projects
		.filter((p) => p.published)
		.filter(
			(project) =>
				new Date(project.date ?? Number.POSITIVE_INFINITY).getFullYear() ===
				year,
		);
}

export function sortProjectsByDate(projects: Project[]) {
	return projects.sort(
		(a, b) =>
			new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
			new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
	);
}

export function getProjectsByYear(projects: Project[], year: number) {
	const filtered = filterProjectsByYear(projects, year);
	return sortProjectsByDate(filtered);
}
