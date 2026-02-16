import DashboardLayout from "@/components/layout/dashboard-layout";
import StatsCard from "@/modules/timesheet/components/stats-card";
import TimesheetTable from "@/modules/timesheet/components/timesheet-table";
import { timesheetData } from "@/data/timesheet";
import {
  MagnifyingGlassIcon,
  CalendarIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function TimesheetPage() {
  return (
    <DashboardLayout
      headerContent={
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Team Management</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-medium">Timesheet</span>
        </div>
      }
    >
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Employee Name or Number"
              className="w-full pl-11 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-1 md:pb-0">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-sm whitespace-nowrap bg-white">
              <CalendarIcon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Nov 6, 2025 - Nov 6, 2025</span>
            </button>
            <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors bg-white shrink-0">
              <FunnelIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors bg-white shrink-0">
              <ArrowDownTrayIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatsCard
            label="Total"
            value={169}
            icon={<ClockIcon className="w-5 h-5 text-gray-600" />}
            bgColor="bg-gray-100"
          />
          <StatsCard
            label="Regular"
            value={7}
            icon={<ClockIcon className="w-5 h-5 text-gray-600" />}
            bgColor="bg-gray-100"
          />
          <StatsCard
            label="Overtime"
            value={320}
            icon={<ClockIcon className="w-5 h-5 text-orange-600" />}
            bgColor="bg-orange-50"
          />
          <StatsCard
            label="OT2"
            value={20}
            icon={<ClockIcon className="w-5 h-5 text-gray-600" />}
            bgColor="bg-gray-100"
          />
          <StatsCard
            label="Holiday"
            value={8}
            icon={<ClockIcon className="w-5 h-5 text-blue-600" />}
            bgColor="bg-blue-50"
          />
          <StatsCard
            label="Anomalies"
            value={3}
            icon={<ExclamationTriangleIcon className="w-5 h-5 text-red-600" />}
            bgColor="bg-red-50"
          />
        </div>

        <TimesheetTable data={timesheetData} />
      </div>
    </DashboardLayout>
  );
}
