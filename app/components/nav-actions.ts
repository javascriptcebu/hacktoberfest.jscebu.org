"use server";

import { signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { redirect } from "next/navigation";

export async function handleSignOut() {
  await signOut(logtoConfig);
  redirect("/");
}
