import Image from "next/image";
import { Employee } from "@/types";

interface EmployeeCardProps {
  employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-4">
          <Image
            src={employee.avatar}
            alt={employee.name}
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-white">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-1">{employee.name}</h3>

        <p className="text-sm text-gray-500 mb-4">{employee.role}</p>
        <div className="flex gap-1.5">
          {employee.departmentTags.map((color, index) => (
            <div key={index} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </div>
  );
}
