import { getLogtoContext } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { NavWrapper } from "../components/nav-wrapper";
import { AdminPanel } from "./admin-panel";
import { redirect } from "next/navigation";

// Get admin emails from environment variable (comma-separated)
const ADMIN_EMAILS = process.env.ADMIN_EMAILS 
  ? process.env.ADMIN_EMAILS.split(',').map(email => email.trim())
  : [];

export default async function AdminPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated || !claims?.email || !ADMIN_EMAILS.includes(claims.email)) {
    redirect("/");
  }

  return (
    <div className="relative pb-16">
      <NavWrapper />
      <div className="px-6 pt-20 mx-auto max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-space-white sm:text-4xl">
            Admin Dashboard
          </h1>
          <p className="mt-4 text-space-dust">
            Review and manage submissions for Cebu Hacktoberfest 2025.
          </p>
        </div>

        <AdminPanel />
      </div>
    </div>
  );
}