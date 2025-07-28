'use client';

import React, { useState, useEffect } from 'react';

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: { project: string; task: string; hours: number }) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [project, setProject] = useState('');
  const [task, setTask] = useState('');
  const [hours, setHours] = useState(1);

  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
      setProject('');
      setTask('');
      setHours(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 px-2">
      <div className="bg-white w-full max-w-2xl rounded-lg p-4 md:p-6 shadow-lg relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 text-xl hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
        <hr className="border-t border-gray-300 mb-4" />

        {/* Project Field */}
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-medium mb-1">Select Project *</label>
          <select
            className="w-full border rounded-lg border-gray-300 px-3 py-2 text-gray-700"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            <option value="">Select Project</option>
            <option value="Marketing Website">Marketing Website</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Analytics Dashboard">Analytics Dashboard</option>
            <option value="Admin Panel">Admin Panel</option>
            <option value="Internal">Internal</option>
          </select>
        </div>

        {/* Task Field */}
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-medium mb-1">Task Description *</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            rows={3}
            placeholder="Describe the task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        {/* Hours Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-gray-800">Hours *</label>
          <div className="flex items-center w-32 rounded-md overflow-hidden border border-gray-300">
            <button
              type="button"
              onClick={() => setHours((prev) => Math.max(1, prev - 1))}
              className="w-10 h-10 flex items-center justify-center border-r border-gray-300 text-lg text-gray-600 hover:bg-gray-100"
            >
              –
            </button>
            <div className="flex-1 text-center select-none text-sm">{hours}</div>
            <button
              type="button"
              onClick={() => setHours((prev) => Math.min(24, prev + 1))}
              className="w-10 h-10 flex items-center justify-center border-l border-gray-300 text-lg text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-4" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <button
            onClick={() => {
              if (!project || !task || hours <= 0) {
                alert('Please fill all fields correctly.');
                return;
              }
              onSubmit({ project, task, hours });
              onClose();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-full"
          >
            Add Task
          </button>
          <button
            onClick={onClose}
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
