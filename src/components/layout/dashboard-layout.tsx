"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
}

export default function DashboardLayout({ children, headerContent }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="lg:ml-64">
        <Header onMenuClick={() => setIsSidebarOpen(true)}>{headerContent}</Header>
        <main className="p-4 md:p-6">
          <div className="bg-white rounded-2xl shadow-sm min-h-[calc(100vh-7rem)] p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
