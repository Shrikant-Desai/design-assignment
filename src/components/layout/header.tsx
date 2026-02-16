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
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <div className="text-sm text-gray-600 flex items-center">{children}</div>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <div className="text-xs font-semibold text-gray-700 hidden md:block px-3 py-1.5 border border-gray-200 rounded-full">
          MST
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 hidden sm:flex px-4 py-1.5 border border-gray-200 rounded-full">
          <CalendarIcon className="w-4 h-4 text-gray-500" />
          <span>02:03:02</span>
        </div>

        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors hidden sm:block border border-gray-200 rounded-full hover:bg-gray-50">
          <EnvelopeIcon className="w-5 h-5" />
        </button>

        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors border border-gray-200 rounded-full hover:bg-gray-50">
          <BellIcon className="w-5 h-5" />
        </button>

        <button className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <Image
              src="https://i.pravatar.cc/150?img=5"
              alt="Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
