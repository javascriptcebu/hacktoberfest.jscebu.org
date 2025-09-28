import { Metadata } from "next";
import { MyContributionsClient } from "./client";
import { getLogtoContext, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My Contributions | Hacktoberfest Cebu 2025",
  description: "Track your open source contributions for Hacktoberfest 2025",
};

export default async function MyContributionsPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  const handleSignOut = async () => {
    "use server";
    await signOut(logtoConfig);
    redirect("/");
  };

  return (
    <MyContributionsClient
      isAuthenticated={isAuthenticated}
      userEmail={claims?.email || undefined}
      userName={claims?.name || undefined}
      onSignOut={handleSignOut}
    />
  );
}