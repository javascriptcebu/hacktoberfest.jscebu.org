import { getLogtoContext, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { redirect } from "next/navigation";
import { Navigation } from "./nav";

// Get admin emails from environment variable (comma-separated)
const ADMIN_EMAILS = process.env.ADMIN_EMAILS
  ? process.env.ADMIN_EMAILS.split(',').map(email => email.trim())
  : [];

interface NavWrapperProps {
  isHomepage?: boolean;
}

/**
 * Server component wrapper for Navigation that automatically handles authentication.
 * This component fetches the authentication context and passes it to the Navigation component.
 * Use this instead of Navigation directly to ensure auth state is always available.
 */
export async function NavWrapper({ isHomepage = false }: NavWrapperProps = {}) {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  // Check if user is admin
  const isAdmin = claims?.email && ADMIN_EMAILS.includes(claims.email) || false;

  const handleSignOut = async () => {
    "use server";
    await signOut(logtoConfig);
    redirect("/");
  };

  return (
    <Navigation
      isHomepage={isHomepage}
      isAuthenticated={isAuthenticated}
      userEmail={claims?.email || undefined}
      userName={claims?.name || undefined}
      isAdmin={isAdmin}
      onSignOut={handleSignOut}
    />
  );
}