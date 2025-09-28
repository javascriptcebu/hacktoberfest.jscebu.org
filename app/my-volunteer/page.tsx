import { Metadata } from "next";
import { MyVolunteerClient } from "./client";
import { getLogtoContext, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My Volunteer Application | Hacktoberfest Cebu 2025",
  description: "Track your volunteer application for Hacktoberfest 2025",
};

export default async function MyVolunteerPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  const handleSignOut = async () => {
    "use server";
    await signOut(logtoConfig);
    redirect("/");
  };

  return (
    <MyVolunteerClient
      isAuthenticated={isAuthenticated}
      userEmail={claims?.email || undefined}
      userName={claims?.name || undefined}
      onSignOut={handleSignOut}
    />
  );
}