import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { handleSignIn } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  await handleSignIn(logtoConfig, searchParams);

  // Get and clear the returnTo cookie
  // const cookieStore = await cookies();
  // const returnTo = cookieStore.get("returnTo")?.value || "/";

  // // Clear the cookie after reading
  // cookieStore.delete("returnTo");

  // redirect(returnTo);

  redirect("/");
}
