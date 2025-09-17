"use client";

type Props = {
  onSignOut: () => Promise<void>;
};

const SignOut = ({ onSignOut }: Props) => {
  return (
    <button
      className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600"
      onClick={() => {
        onSignOut();
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
