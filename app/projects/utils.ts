import { Redis } from "@upstash/redis";
import { Project } from "contentlayer/generated";

// Lazy initialization of Redis to avoid client-side errors
let redis: Redis | null = null;

function getRedis(): Redis {
	if (!redis) {
		redis = Redis.fromEnv();
	}
	return redis;
}

export async function getProjectViews(projects: Project[]) {
	const views = (
		await getRedis().mget<number[]>(
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
	videoUrl?: string;
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
	awards?: string[]; // Array of award names won by this project
	slug?: string; // URL-friendly slug generated from title
	winnerPhoto?: string; // Team photo URL for award winners
}

// Generate a URL-friendly slug from a project title
export function generateSlug(title: string): string {
	return title
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '') // Remove special characters
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
		.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Get a submitted project by its slug
export async function getSubmittedProjectBySlug(slug: string): Promise<SubmittedProject | null> {
	try {
		// Get all approved submission IDs
		const approvedIds = await getRedis().lrange("approved-submissions", 0, -1) as string[];

		if (approvedIds.length === 0) {
			return null;
		}

		// Search through approved submissions to find matching slug
		for (const id of approvedIds) {
			try {
				const submissionData = await getRedis().get(`submission:${id}`);
				if (submissionData) {
					const parsed = typeof submissionData === 'string'
						? JSON.parse(submissionData)
						: submissionData;
					
					const project = parsed as SubmittedProject;
					
					// Generate slug if not present
					const projectSlug = project.slug || generateSlug(project.title);
					
					// Check if slug matches
					if (projectSlug === slug && project.status === 'approved') {
						// Add slug to project object if not present
						if (!project.slug) {
							project.slug = projectSlug;
						}
						return project;
					}
				}
			} catch (e) {
				console.error(`Error fetching submission ${id}:`, e);
			}
		}

		return null;
	} catch (error) {
		console.error("Error fetching project by slug:", error);
		return null;
	}
}

export async function getApprovedSubmittedProjects(): Promise<SubmittedProject[]> {
	try {
		// Get all approved submission IDs
		const approvedIds = await getRedis().lrange("approved-submissions", 0, -1) as string[];

		if (approvedIds.length === 0) {
			return [];
		}

		// Fetch all approved submissions
		const approvedProjects = await Promise.all(
			approvedIds.map(async (id) => {
				try {
					const submissionData = await getRedis().get(`submission:${id}`);
					if (submissionData) {
						const parsed = typeof submissionData === 'string'
							? JSON.parse(submissionData)
							: submissionData;
						const project = parsed as SubmittedProject;
						
						// Generate slug if not present
						if (!project.slug) {
							project.slug = generateSlug(project.title);
						}
						
						return project;
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
		const approvedIds = await getRedis().lrange("approved-contributions", 0, -1) as string[];

		if (approvedIds.length === 0) {
			return [];
		}

		// Fetch all approved contributions
		const approvedContributions = await Promise.all(
			approvedIds.map(async (id) => {
				try {
					const contributionData = await getRedis().get(`contribution:${id}`);
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

// Contribution Winner Interface
export interface ContributionWinner {
	name: string;
	github: string;
	contribution: string;
	prUrl: string;
	prTitle: string;
	description: string;
	submittedAt: string;
	photo?: string;
}

// Contribution Winners Data by Year
export const CONTRIBUTION_WINNERS_BY_YEAR: Record<number, ContributionWinner[]> = {
	2025: [
		{
			name: "Yurii Yankin (Represented by Proxy)",
			github: "yonken4405",
			contribution: "javascriptcebu/hacktoberfest.jscebu.org",
			prUrl: "https://github.com/javascriptcebu/hacktoberfest.jscebu.org/pull/31",
			prTitle: "Added Criteria Page with Interactive Tables",
			description: "Added a new Criteria page that displays both Contribute and Create evaluation tables side-by-side with an interactive focus/tab system. This enhancement improved the user experience by making evaluation criteria easily accessible and visually organized.",
			submittedAt: "2025-10-24",
			photo: "/images/winners/2025/yurii.png",
		},
		{
			name: "Neil Vallecer",
			github: "Neil-urk12",
			contribution: "dotnize/prompt-ui",
			prUrl: "https://github.com/dotnize/prompt-ui/pull/2",
			prTitle: "Fix Textarea Validation for Custom Toast Messages",
			description: "Removed required and minLength attributes from the textarea to allow custom toast validation messages to display correctly instead of native browser validation. This fix improved the error handling and user feedback in the form component.",
			submittedAt: "2025-10-11",
			photo: "/images/winners/2025/neil.jpg",
		},
	],
};

// Helper to get contribution winners by year
export function getContributionWinnersByYear(year: number): ContributionWinner[] {
	return CONTRIBUTION_WINNERS_BY_YEAR[year] || [];
}
