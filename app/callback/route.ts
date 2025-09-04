import { NextRequest } from "next/server";
import { handleSignIn } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  await handleSignIn(logtoConfig, searchParams);

  redirect("/");
}
