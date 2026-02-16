import Image from "next/image";
import { TimesheetRow } from "@/types";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

interface TimesheetTableProps {
  data: TimesheetRow[];
}

export default function TimesheetTable({ data }: TimesheetTableProps) {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  Employee
                  <ArrowsUpDownIcon className="w-4 h-4" />
                </div>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  Total
                  <ArrowsUpDownIcon className="w-4 h-4" />
                </div>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  Regular
                  <ArrowsUpDownIcon className="w-4 h-4" />
                </div>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  Overtime
                  <ArrowsUpDownIcon className="w-4 h-4" />
                </div>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  OT 2
                  <ArrowsUpDownIcon className="w-4 h-4" />
                </div>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  Holiday
                  <ArrowsUpDownIcon className="w-4 h-4" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={`${row.employeeId}-${index}`}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={row.avatar}
                      alt={row.employeeName}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900">{row.employeeName}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">{row.total}</td>
                <td className="py-3 px-4 text-sm text-gray-900">{row.regular}</td>
                <td className="py-3 px-4 text-sm text-gray-900">{row.overtime}</td>
                <td className="py-3 px-4 text-sm text-gray-900">{row.ot2}</td>
                <td className="py-3 px-4 text-sm text-gray-900">{row.holiday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-6 pt-4">
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
