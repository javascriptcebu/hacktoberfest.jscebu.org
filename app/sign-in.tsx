"use client";

type Props = {
  onSignIn: () => Promise<void>;
};

const SignIn = ({ onSignIn }: Props) => {
  return (
    <button
      className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
      onClick={() => {
        onSignIn();
      }}
    >
      Sign In via OneCebby
    </button>
  );
};

export default SignIn;
