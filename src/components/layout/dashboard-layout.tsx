import Sidebar from "./sidebar";
import Header from "./header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="p-4 md:p-6">
          <div className="bg-white rounded-2xl shadow-sm min-h-[calc(100vh-7rem)] p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
