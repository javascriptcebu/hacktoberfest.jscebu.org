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

export interface TeamMember {
	name: string;
	email: string;
	github: string;
	role: string;
}

export interface SubmittedProject {
	id: string;
	title: string;
	description: string;
	repository: string;
	url?: string;
	image?: string;
	email: string;
	submittedBy: string;
	submittedAt: string;
	status: "pending" | "approved" | "rejected";
	year: number;
	specialNote?: string;
	projectType?: string;
	category?: string;
	techStack?: string;
	lookingFor?: string;
	teamMembers?: TeamMember[];
	lastUpdatedAt?: string;
}

export async function getApprovedSubmittedProjects(): Promise<SubmittedProject[]> {
	try {
		// Get all approved submission IDs
		const approvedIds = await redis.lrange("approved-submissions", 0, -1) as string[];

		if (approvedIds.length === 0) {
			return [];
		}

		// Fetch all approved submissions
		const approvedProjects = await Promise.all(
			approvedIds.map(async (id) => {
				try {
					const submissionData = await redis.get(`submission:${id}`);
					if (submissionData) {
						const parsed = typeof submissionData === 'string'
							? JSON.parse(submissionData)
							: submissionData;
						return parsed as SubmittedProject;
					}
				} catch (e) {
					console.error(`Error fetching submission ${id}:`, e);
				}
				return null;
			})
		);

		// Filter out nulls and sort by submission date (newest first)
		return approvedProjects
			.filter((p): p is SubmittedProject => p !== null)
			.filter((p) => p.year === 2025) // Only show 2025 projects
			.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
	} catch (error) {
		console.error("Error fetching approved projects:", error);
		return [];
	}
}

export interface ApprovedContribution {
	id: string;
	prUrl: string;
	projectName: string;
	projectUrl: string;
	isLocalProject: boolean;
	contributionType: string;
	description: string;
	email: string;
	submittedBy: string;
	submittedAt: string;
	status: "pending" | "approved" | "rejected";
	year: number;
	points?: number;
}

export async function getApprovedContributions(): Promise<ApprovedContribution[]> {
	try {
		// Get all approved contribution IDs
		const approvedIds = await redis.lrange("approved-contributions", 0, -1) as string[];

		if (approvedIds.length === 0) {
			return [];
		}

		// Fetch all approved contributions
		const approvedContributions = await Promise.all(
			approvedIds.map(async (id) => {
				try {
					const contributionData = await redis.get(`contribution:${id}`);
					if (contributionData) {
						const parsed = typeof contributionData === 'string'
							? JSON.parse(contributionData)
							: contributionData;
						return parsed as ApprovedContribution;
					}
				} catch (e) {
					console.error(`Error fetching contribution ${id}:`, e);
				}
				return null;
			})
		);

		// Filter out nulls and sort by submission date (newest first)
		return approvedContributions
			.filter((c): c is ApprovedContribution => c !== null)
			.filter((c) => c.year === 2025) // Only show 2025 contributions
			.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
	} catch (error) {
		console.error("Error fetching approved contributions:", error);
		return [];
	}
}
