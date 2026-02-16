import DashboardLayout from "@/components/layout/dashboard-layout";
import PeopleGrid from "@/modules/people/components/people-grid";
import { employees } from "@/data/employees";

export default function PeoplePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">People</h1>
        </div>

        {/* People Grid */}
        <PeopleGrid employees={employees} />
      </div>
    </DashboardLayout>
  );
}
