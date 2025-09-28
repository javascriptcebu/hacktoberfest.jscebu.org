import { Metadata } from "next";
import { MyProjectsClient } from "./client";
import { getLogtoContext, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My Projects | Hacktoberfest Cebu 2025",
  description: "Manage your submitted open source projects for Hacktoberfest 2025",
};

export default async function MyProjectsPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  const handleSignOut = async () => {
    "use server";
    await signOut(logtoConfig);
    redirect("/");
  };

  return (
    <MyProjectsClient
      isAuthenticated={isAuthenticated}
      userEmail={claims?.email}
      onSignOut={handleSignOut}
    />
  );
}