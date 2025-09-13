"use client";

type Props = {
  onSignIn: () => Promise<void>;
  text?: string;
};

const SignIn = ({ onSignIn, text = "" }: Props) => {
  return (
    <button
      className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
      onClick={() => {
        onSignIn();
      }}
    >
      {text || "Sign In via OneCebby"}
    </button>
  );
};

export default SignIn;
