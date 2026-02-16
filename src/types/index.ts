export interface Employee {
  id: string;
  name: string;
  role: string;
  avatar: string;
  departmentTags: string[];
}

export interface TimesheetRow {
  employeeId: string;
  employeeName: string;
  avatar: string;
  total: string;
  regular: string;
  overtime: string;
  ot2: string;
  holiday: string;
}

export interface StatsCard {
  label: string;
  value: number;
  icon: string;
  color: string;
}
