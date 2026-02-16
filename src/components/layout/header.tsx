"use client";

import { BellIcon, EnvelopeIcon, CalendarIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface HeaderProps {
  onMenuClick?: () => void;
  children?: React.ReactNode;
}

export default function Header({ onMenuClick, children }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6">
      {/* Left side - Hamburger menu & Breadcrumb */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <div className="text-sm text-gray-600 flex items-center">{children}</div>
      </div>

      {/* Right side - Time, Icons, Profile */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Timezone */}
        <div className="text-sm font-medium text-gray-600 hidden md:block">MST</div>

        {/* Time */}
        <div className="flex items-center gap-2 text-sm text-gray-600 hidden sm:flex">
          <CalendarIcon className="w-5 h-5" />
          <span>02:03:02</span>
        </div>

        {/* Icons */}
        <button className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
          <EnvelopeIcon className="w-5 h-5" />
        </button>

        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          <BellIcon className="w-5 h-5" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
            <Image
              src="https://i.pravatar.cc/150?img=5"
              alt="Profile"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
