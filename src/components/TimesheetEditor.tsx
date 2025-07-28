'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DaySection from './DaySection';

type Task = {
  task: string;
  hours: number;
  project: string;
};

type TimesheetData = {
  [day: string]: Task[];
};

type StatusType = 'MISSING' | 'INCOMPLETE' | 'COMPLETED';

const weekDates: Record<string, string> = {
  '1': '1 - 5 January, 2024',
  '2': '8 - 12 January, 2024',
  '3': '15 - 19 January, 2024',
  '4': '22 - 26 January, 2024',
  '5': '28 January - 1 February, 2024',
};

const TimesheetEditor = () => {
  const { weekId } = useParams();
  const [timesheetData, setTimesheetData] = useState<TimesheetData>({});
  const [loading, setLoading] = useState(true);
  const [totalHours, setTotalHours] = useState(0);
  const [status, setStatus] = useState<StatusType>('MISSING');

  const handleAddTask = (day: string, newTask: Task) => {
    setTimesheetData((prev) => {
      const updatedTasks = [...(prev[day] || []), newTask];
      const updatedData = { ...prev, [day]: updatedTasks };

      // Calculate updated total hours
      const newTotalHours = Object.values(updatedData).reduce((sum, tasks) =>
        sum + tasks.reduce((daySum, task) => daySum + task.hours, 0)
      , 0);

      setTotalHours(newTotalHours);
      setStatus(
        newTotalHours === 0
          ? 'MISSING'
          : newTotalHours < 40
          ? 'INCOMPLETE'
          : 'COMPLETED'
      );

      return updatedData;
    });
  };

  useEffect(() => {
    async function fetchTimesheetData() {
      try {
        const res = await fetch(`/api/timesheet-data/${weekId}`);
        const data: TimesheetData = await res.json();
        setTimesheetData(data);

        const total = Object.values(data).reduce((sum, tasks) =>
          sum + tasks.reduce((taskSum, task) => taskSum + task.hours, 0)
        , 0);

        setTotalHours(total);
        setStatus(
          total === 0
            ? 'MISSING'
            : total < 40
            ? 'INCOMPLETE'
            : 'COMPLETED'
        );
      } catch (err) {
        console.error('Failed to fetch timesheet data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchTimesheetData();
  }, [weekId]);

  if (loading) {
    return <div className="p-6 text-gray-600 text-center">Loading timesheet...</div>;
  }

  const statusColor =
    status === 'COMPLETED'
      ? 'text-green-600'
      : status === 'INCOMPLETE'
      ? 'text-yellow-600'
      : 'text-red-600';

  const progress = Math.min((totalHours / 40) * 100, 100);

  return (
    <div className="max-w-6xl mx-auto bg-white px-4 sm:px-6 py-6 rounded-md shadow">
      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-lg font-semibold">This week’s timesheet</h2>
          <div className="text-sm text-gray-500">{weekDates[weekId as string]}</div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <div className="text-sm text-gray-800">{totalHours}/40 hrs</div>
          <div className="w-full sm:w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500" style={{ width: `${progress}%` }}></div>
          </div>
          <div className={`text-sm font-medium ${statusColor}`}>{status}</div>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(timesheetData).map(([day, tasks]) => (
          <DaySection
            key={day}
            day={day}
            tasks={tasks}
            onAddTask={(task) => handleAddTask(day, task)}
          />
        ))}
      </div>
    </div>
  );
};

export default TimesheetEditor;
