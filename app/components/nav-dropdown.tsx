import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function PastYearsDropdown() {
  const menuItems = [
    { label: "2025", href: "/projects" },
    { label: "2024", href: "/projects/2024" },
    { label: "2023", href: "/projects/2023" },
    { label: "2021", href: "/projects/2021" },
    { label: "2020", href: "/projects/2020" },
  ];

  return (
    <div className="relative">
      <ChevronDown className="size-6 p-1 transition-transform text-space-dust group-hover:text-melrose duration-200 group-hover:rotate-180" />

      <div className="absolute hidden group-hover:block right-0">
        <div className="bg-void/95 backdrop-blur shadow-lg w-28 text-sm py-1 mt-2 border border-blue-violet/30 rounded-lg">
          {/* <span className="text-[0.7rem] leading-3 px-4 text-space-haze">Previous years</span> */}
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-space-dust block py-2 px-4 hover:text-melrose hover:bg-east-bay/30"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
