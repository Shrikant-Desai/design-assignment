"use client";

import { Employee } from "@/types";
import EmployeeCard from "./employee-card";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  Squares2X2Icon,
  ListBulletIcon,
  ChartBarIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

interface PeopleGridProps {
  employees: Employee[];
}

export default function PeopleGrid({ employees }: PeopleGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:flex-1 max-w-md relative">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Employee Name or Number"
            className="w-full pl-11 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          <button className="p-2 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors shrink-0">
            <ArrowDownTrayIcon className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors shrink-0">
            <FunnelIcon className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 bg-[#3D3936] hover:bg-[#2d2926] text-white rounded-xl transition-colors shrink-0">
            <PlusIcon className="w-5 h-5" />
          </button>
          <button className="p-2 bg-[#3D3936] hover:bg-[#2d2926] text-white rounded-xl transition-colors shrink-0">
            <Squares2X2Icon className="w-5 h-5" />
          </button>
          <button className="p-2 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors shrink-0">
            <ListBulletIcon className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors shrink-0">
            <ChartBarIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>

      <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Rows per page:</span>
          <select className="border-none bg-transparent font-medium focus:outline-none cursor-pointer">
            <option>100</option>
            <option>50</option>
            <option>25</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">1-100 of 500</span>
          <div className="flex gap-1">
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
