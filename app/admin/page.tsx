import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { Navigation } from "../components/nav";
import { AdminPanel } from "./admin-panel";
import { redirect } from "next/navigation";

// Define admin emails - in production, this should come from environment variables
const ADMIN_EMAILS = [
  "dorelljames@gmail.com", // Add actual admin emails here
];

export default async function AdminPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated || !claims?.email || !ADMIN_EMAILS.includes(claims.email)) {
    redirect("/");
  }

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Project Submissions Admin
          </h1>
          <p className="mt-4 text-zinc-400">
            Review and manage project submissions for Cebu Hacktoberfest 2025.
          </p>
        </div>

        <AdminPanel />
      </div>
    </div>
  );
}