"use client";

import { User, LogOut, FolderOpen, Settings, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface AccountDropdownProps {
  userEmail?: string;
  userName?: string;
  onSignOut?: () => Promise<void>;
}

export default function AccountDropdown({ userEmail, userName, onSignOut }: AccountDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: "My Projects",
      href: "/my-projects",
      icon: FolderOpen
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings
    },
  ];

  const handleSignOut = async () => {
    setIsOpen(false);
    if (onSignOut) {
      await onSignOut();
    }
  };

  // Prioritize: userName (full name) > email prefix > 'Account'
  const displayName = userName || userEmail?.split('@')[0] || 'Account';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg text-space-dust hover:text-melrose hover:bg-east-bay/50 border border-transparent hover:border-blue-violet/30"
        aria-label="Account menu"
      >
        <User className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline">{displayName}</span>
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2">
          <div className="bg-void/95 backdrop-blur shadow-lg min-w-[200px] text-sm py-2 border border-blue-violet/30 rounded-lg">
            {/* User info section */}
            {userEmail && (
              <div className="px-4 py-2 border-b border-blue-violet/20">
                <p className="text-xs text-space-haze">Signed in as</p>
                <p className="text-sm text-melrose font-medium truncate">{userEmail}</p>
              </div>
            )}

            {/* Menu items */}
            <div className="py-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-space-dust py-2 px-4 hover:text-melrose hover:bg-east-bay/30 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Sign out button */}
            {onSignOut && (
              <>
                <div className="border-t border-blue-violet/20 my-1"></div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 w-full text-left text-space-dust py-2 px-4 hover:text-red-400 hover:bg-red-900/20 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}