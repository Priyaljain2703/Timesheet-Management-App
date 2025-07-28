'use client';

import { useEffect, useState } from 'react';
import StatusBadge from './StatusBadge';
import Link from 'next/link';

type Timesheet = {
  week: number;
  date: string;
  status: 'COMPLETED' | 'INCOMPLETE' | 'MISSING';
  action: 'View' | 'Update' | 'Create';
};

export default function TimesheetTable() {
  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimesheets = async () => {
      try {
        const res = await fetch('/api/timesheets');
        const data = await res.json();
        setTimesheets(data);
      } catch (error) {
        console.error('Error fetching timesheets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTimesheets();
  }, []);

  if (loading) {
    return <div className="p-4 text-gray-600 text-center">Loading timesheets...</div>;
  }

  return (
   <div className="overflow-x-auto bg-white rounded-md shadow-md">

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
