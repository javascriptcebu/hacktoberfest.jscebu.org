import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function PastYearsDropdown() {
  const menuItems = [
    { label: "2024", href: "/projects" },
    { label: "2023", href: "/projects/2023" },
    { label: "2021", href: "/projects/2021" },
    { label: "2020", href: "/projects/2020" },
  ];

  return (
    <div className="relative">
      <ChevronDown className="size-6 p-1 transition-transform text-zinc-400 group-hover:text-zinc-300 duration-200 group-hover:rotate-180" />

      <div className="absolute hidden group-hover:block right-0">
        <div className="bg-zinc-900 shadow-lg w-28 text-sm py-1 mt-2 border border-zinc-800 rounded-lg">
            {/* <span className="text-[0.7rem] leading-3 px-4 text-zinc-600">Previous years</span> */}
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-zinc-400 block py-2 px-4 hover:text-zinc-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

