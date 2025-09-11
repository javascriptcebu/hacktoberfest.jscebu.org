import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { Navigation } from "../components/nav";
import { SubmissionForm } from "./submission-form";
import { redirect } from "next/navigation";

export default async function SubmitPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Submit Your Project
            </h1>
            <p className="mt-4 text-zinc-400">
              Share your project with the Cebu Hacktoberfest 2025 community. All submissions will be reviewed before being published.
            </p>
          </div>

          <SubmissionForm userEmail={claims?.email || undefined} />
        </div>
      </div>
    </div>
  );
}