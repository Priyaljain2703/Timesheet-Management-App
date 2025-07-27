import React from 'react';

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 px-2">
      <div className="bg-white w-full max-w-2xl rounded-lg p-4 md:p-6 shadow-lg relative max-h-[90vh] overflow-y-auto">
      
        <button
          className="absolute top-4 right-4 text-gray-500 text-xl hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Add New Entry</h2>
        <hr className="border-t border-gray-300 mb-4 p-0" />

       
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-medium mb-1">Select Project *</label>
          <select className="w-full border rounded-lg border-gray-300 px-3 py-2 text-gray-500">
            <option>Project Name</option>
          </select>
        </div>

       
        <div className="mb-4">
          <label className="block text-gray-800 text-sm font-medium mb-1">Type of Work *</label>
          <select className="w-full border rounded-lg border-gray-300 px-3 py-2 text-gray-500">
            <option>Bug fixes</option>
          </select>
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-800">Task description *</label>
          <textarea
            className="w-full border border-gray-300  rounded-lg px-3 py-2"
            rows={4}
            placeholder="Write text here ..."
          />
          <p className="text-xs text-gray-500 mt-1">A note for extra info</p>
        </div>

     
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Hours *</label>
          <div className="flex items-center w-32 rounded-md overflow-hidden border border-gray-300">
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center border-r border-gray-300 text-lg text-gray-600 hover:bg-gray-100"
            >
              –
            </button>
            <div className="flex-1 text-center select-none text-sm">12</div>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center border-l border-gray-300 text-lg text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

      
        <hr className="border-t border-gray-200 my-4" />

        
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-full">
            Add entry
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
