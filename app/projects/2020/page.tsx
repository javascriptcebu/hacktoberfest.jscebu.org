import { allProjects } from "contentlayer/generated";
import ProjectsList from "../past-projects";
import { getProjectViews, getProjectsByYear } from "../utils";

const YEAR = 2020;

export const revalidate = 60;
export default async function ProjectsPage() {
	const views = await getProjectViews(allProjects);
	const sorted = getProjectsByYear(allProjects, YEAR);

	return <ProjectsList views={views} projects={sorted} year={YEAR} />;
}
