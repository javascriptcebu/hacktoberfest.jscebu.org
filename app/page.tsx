import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";

import Image from "next/legacy/image";
import Link from "next/link";
import Particles from "./components/particles";
import React from "react";
import SignIn from "./sign-in";
import SignOut from "./sign-out";
import { logtoConfig } from "./logto";

const navigation = [
  { name: "2025 Projects", href: "/projects" },
  { name: "Submit Project", href: "/submit" },
  { name: "Contact", href: "/contact" },
];

export default async function Home() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <SignOut
                onSignOut={async () => {
                  "use server";

                  await signOut(logtoConfig);
                }}
              />
            </li>
          ) : (
            <p>
              <SignIn
                onSignIn={async () => {
                  "use server";

                  await signIn(logtoConfig);
                }}
              />
            </p>
          )}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        <div className="flex justify-center">
          <Image
            src="/images/jscebu.png"
            alt="jscebu"
            width={196}
            height={50}
            className="animate-fade-in"
          />
        </div>
        cebu #hacktoberfest{" "}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          {isAuthenticated ? (
            <Link
              href="/submit"
              className="duration-500 hover:text-zinc-300"
            >
              → Submit your projects here
            </Link>
          ) : (
            <span>
              <SignIn
                onSignIn={async () => {
                  "use server";
                  await signIn(logtoConfig);
                }}
              />{" "}
              to submit your projects
            </span>
          )}
        </h2>
      </div>
    </div>
  );
}
