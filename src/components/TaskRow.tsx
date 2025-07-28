'use client';
import React, { useState, useRef, useEffect } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

interface TaskRowProps {
  task: string;
  hours: number;
  project: string;
  showActions?: boolean;
}

const TaskRow: React.FC<TaskRowProps> = ({ task, hours, project, showActions = true }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center border rounded-lg border-gray-300 px-4 py-3 mb-2 bg-white shadow-sm gap-2">
     
      <div className="flex-1 text-sm sm:text-base text-gray-800 min-w-[150px]">
        {task}
      </div>

     
      <div className="text-sm text-gray-500 w-20 text-right sm:text-center">
        {hours} hrs
      </div>

     
      <div className="bg-blue-100 text-blue-500 rounded-md px-3 py-1 text-xs sm:text-sm font-semibold whitespace-nowrap">
        {project}
      </div>

     
      {showActions && (
        <div className="ml-auto sm:ml-4 relative" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-600 hover:text-black"
          >
            <HiOutlineDotsHorizontal className="w-5 h-5" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-28 bg-white rounded shadow-lg z-10">
              <button
                onClick={() => {
                  setOpen(false);
                  console.log('Edit clicked');
                }}
                className="block w-full text-left px-4 py-2 text-sm text-blue-500 hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  console.log('Delete clicked');
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskRow;
