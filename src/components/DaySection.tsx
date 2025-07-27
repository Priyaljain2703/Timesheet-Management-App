'use client';
import React, { useState } from 'react';
import TaskRow from './TaskRow';
import AddTaskModal from './AddTaskModel';

interface DaySectionProps {
  day: string;
  tasks: { task: string; hours: number; project: string }[];
}

const DaySection: React.FC<DaySectionProps> = ({ day, tasks }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mb-6 flex items-start space-x-4">
      
      <div className="w-20 pt-2">
        <h4 className="font-semibold text-sm text-gray-800">{day}</h4>
      </div>

      
      <div className="flex-1">
        {tasks.map((t, i) => (
          <TaskRow key={i} task={t.task} hours={t.hours} project={t.project} />
        ))}

        <button
          onClick={() => setModalOpen(true)}
          className="text-sm text-blue-500 border border-dashed w-full px-4 py-2 rounded mt-2 hover:bg-[#d2e5fa]"
        >
          + Add new task
        </button>
      </div>

      <AddTaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default DaySection;
