import { getLogtoContext, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { redirect } from "next/navigation";
import { Navigation } from "./nav";

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
      onSignOut={handleSignOut}
    />
  );
}