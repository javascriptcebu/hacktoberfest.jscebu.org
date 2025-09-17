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
            <span className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
              Cebu Hacktoberfest 2025
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              SUBMIT YOUR OPEN-SOURCE PROJECT
            </h1>
            <p className="mt-6 text-lg text-zinc-400">
              Get your projects contributed on. We prioritize our very own local projects...
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
              <span>→</span>
              <span className="font-mono tracking-wide">HF.CEBUTECHCOMMUNITIES.ORG/SUBMIT</span>
            </div>
          </div>

          <SubmissionForm userEmail={claims?.email || undefined} />
        </div>
      </div>
    </div>
  );
}