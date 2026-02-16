"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  BriefcaseIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "My Info", href: "/my-info", icon: UserIcon },
  { name: "People", href: "/people", icon: UsersIcon },
];

const teamManagementItems = [
  { name: "Timesheet", href: "/team-management/timesheet" },
  { name: "Reimbursement", href: "/team-management/reimbursement" },
];

const bottomMenuItems = [
  { name: "Project Setup", href: "/project-setup", icon: BriefcaseIcon },
  { name: "Hiring", href: "/hiring", icon: ClipboardDocumentListIcon },
  { name: "Report", href: "/report", icon: ChartBarIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isTeamManagementOpen, setIsTeamManagementOpen] = useState(true);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#2c2c2c] text-white flex flex-col hidden lg:flex z-40">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="text-2xl font-bold tracking-wider">CORE</div>
        <button className="ml-auto text-gray-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive(item.href) ? "bg-white text-gray-900" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}

        {/* Team Management Expandable */}
        <div>
          <button
            onClick={() => setIsTeamManagementOpen(!isTeamManagementOpen)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              pathname.startsWith("/team-management")
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <UsersIcon className="w-5 h-5" />
            <span className="text-sm font-medium flex-1 text-left">Team Management</span>
            {isTeamManagementOpen ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>

          {isTeamManagementOpen && (
            <div className="ml-8 mt-1 space-y-1">
              {teamManagementItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(item.href)
                      ? "bg-white text-gray-900 font-medium"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {bottomMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive(item.href) ? "bg-white text-gray-900" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Settings at bottom */}
      <div className="p-3">
        <Link
          href="/settings"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
            isActive("/settings") ? "bg-white text-gray-900" : "text-gray-300 hover:bg-gray-700"
          }`}
        >
          <Cog6ToothIcon className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </div>
    </aside>
  );
}
