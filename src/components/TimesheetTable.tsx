'use client';

import StatusBadge from './StatusBadge';
import Link from 'next/link';

type Timesheet = {
  week: number;
  date: string;
  status: 'COMPLETED' | 'INCOMPLETE' | 'MISSING';
  action: 'View' | 'Update' | 'Create';
};

const timesheets: Timesheet[] = [
  { week: 1, date: '1 - 5 January, 2024', status: 'COMPLETED', action: 'View' },
  { week: 2, date: '8 - 12 January, 2024', status: 'COMPLETED', action: 'View' },
  { week: 3, date: '15 - 19 January, 2024', status: 'INCOMPLETE', action: 'Update' },
  { week: 4, date: '22 - 26 January, 2024', status: 'COMPLETED', action: 'View' },
  { week: 5, date: '28 January - 1 February, 2024', status: 'MISSING', action: 'Create' },
];

export default function TimesheetTable() {
  return (
    <div className="overflow-x-auto bg-white rounded-md shadow-md overflow-y-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-gray-100">
          <tr className="bg-[#ededed]">
            <th className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap">WEEK #</th>
            <th className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap">DATE</th>
            <th className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap">STATUS</th>
            <th className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {timesheets.map((item) => (
            <tr key={item.week} className="border-t border-[#d1d1d1]">
              <td className="px-4 py-3 bg-[#ededed] text-gray-800 whitespace-nowrap">{item.week}</td>
              <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{item.date}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <StatusBadge status={item.status} />
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <Link
                  href={`/List/${item.week}`}
                  className="text-blue-600 hover:underline"
                >
                  {item.action}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
