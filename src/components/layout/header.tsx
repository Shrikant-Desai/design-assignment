"use client";

import { BellIcon, EnvelopeIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6">
      {/* Breadcrumb or Page Title - will be passed as children */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {/* This will be populated by individual pages */}
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
