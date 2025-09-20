"use client";

type Props = {
  onSignIn: () => Promise<void>;
  text?: string;
  variant?: "default" | "inline";
};

const SignIn = ({ onSignIn, text = "", variant = "default" }: Props) => {
  const className = variant === "inline"
    ? "text-space-dust hover:text-melrose underline underline-offset-2 transition-colors duration-300"
    : "inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg bg-lavender text-void hover:bg-melrose border border-lavender";

  return (
    <button
      className={className}
      onClick={() => {
        onSignIn();
      }}
    >
      {text || "Sign In via OneCebby"}
    </button>
  );
};

export default SignIn;
