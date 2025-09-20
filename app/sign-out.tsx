"use client";

type Props = {
  onSignOut: () => Promise<void>;
};

const SignOut = ({ onSignOut }: Props) => {
  return (
    <button
      className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-blue-violet/30 hover:border-lavender/50"
      onClick={() => {
        onSignOut();
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
