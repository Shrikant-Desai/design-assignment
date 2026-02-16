import DashboardLayout from "@/components/layout/dashboard-layout";
import PeopleGrid from "@/modules/people/components/people-grid";
import { employees } from "@/data/employees";

export default function PeoplePage() {
  return (
    <DashboardLayout
      headerContent={<div className="text-xl font-semibold text-gray-900">People</div>}
    >
      <div className="space-y-6">
        {/* People Grid */}
        <PeopleGrid employees={employees} />
      </div>
    </DashboardLayout>
  );
}
