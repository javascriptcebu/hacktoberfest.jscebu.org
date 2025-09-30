import { signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../../../logto";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    await signOut(logtoConfig);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sign out error:", error);
    return NextResponse.json({ error: "Sign out failed" }, { status: 500 });
  }
}