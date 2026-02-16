interface StatsCardProps {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  bgColor: string;
}

export default function StatsCard({ label, value, icon, bgColor }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      <div className="flex items-start justify-between mb-2">
        <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-1">{label}</div>
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
    </div>
  );
}
