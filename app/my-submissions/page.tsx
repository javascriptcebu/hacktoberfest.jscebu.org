import { Metadata } from "next";
import { MySubmissionsClient } from "./client";
import { getLogtoContext, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My Submissions | Hacktoberfest Cebu 2025",
  description: "Manage all your submissions for Hacktoberfest 2025",
};

export default async function MySubmissionsPage() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  const handleSignOut = async () => {
    "use server";
    await signOut(logtoConfig);
    redirect("/");
  };

  return (
    <MySubmissionsClient
      isAuthenticated={isAuthenticated}
      userEmail={claims?.email || undefined}
      userName={claims?.name || undefined}
      onSignOut={handleSignOut}
    />
  );
}