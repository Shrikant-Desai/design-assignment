"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
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
  XMarkIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "Home", href: "/people?s=home", icon: HomeIcon },
  { name: "My Info", href: "/people?s=my-info", icon: UserIcon },
  { name: "People", href: "/people", icon: UsersIcon },
];

const teamManagementItems = [
  { name: "Timesheet", href: "/team-management/timesheet" },
  { name: "Reimbursement", href: "/team-management/timesheet?s=reimbursement" },
];

const bottomMenuItems = [
  { name: "Project Setup", href: "/people?s=project-setup", icon: BriefcaseIcon },
  { name: "Hiring", href: "/people?s=hiring", icon: ClipboardDocumentListIcon },
  { name: "Report", href: "/team-management/timesheet?s=report", icon: ChartBarIcon },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function SidebarContent({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isTeamManagementOpen, setIsTeamManagementOpen] = useState(true);

  const isActive = (href: string) => {
    if (href === "/people?s=settings") {
      return pathname === "/people" && searchParams.get("s") === "settings";
    }

    const [linkPath, linkQuery] = href.split("?");
    const currentPath = pathname;
    const currentQuery = searchParams.toString();

    if (currentPath !== linkPath) return false;

    if (linkQuery) {
      return currentQuery.includes(linkQuery);
    }

    if (searchParams.get("s")) return false;

    return true;
  };

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />}

      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-[#3D3936] text-white flex flex-col z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="text-2xl font-bold tracking-wider">CORE</div>
          <button onClick={onClose} className="ml-auto lg:hidden text-gray-400 hover:text-white">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  active ? "bg-white text-gray-900" : "text-gray-300"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}

          <div>
            <button
              onClick={() => setIsTeamManagementOpen(!isTeamManagementOpen)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/team-management") ? "text-white" : "text-gray-300"
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
                    onClick={handleLinkClick}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive(item.href) ? "bg-white text-gray-900 font-medium" : "text-gray-300"
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
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  active ? "bg-white text-gray-900" : "text-gray-300"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-3">
          <Link
            href="/people?s=settings"
            onClick={handleLinkClick}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              isActive("/people?s=settings")
                ? "bg-white text-gray-900"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Cog6ToothIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default function Sidebar(props: SidebarProps) {
  return (
    <Suspense
      fallback={<div className="fixed left-0 top-0 h-screen w-64 bg-[#3D3936] hidden lg:block" />}
    >
      <SidebarContent {...props} />
    </Suspense>
  );
}
