import React from 'react';

type StatusType = 'COMPLETED' | 'INCOMPLETE' | 'MISSING';

interface Props {
  status: StatusType;
}

const statusStyles: Record<StatusType, string> = {
  COMPLETED: 'bg-green-100 text-green-700',
  INCOMPLETE: 'bg-yellow-100 text-yellow-700',
  MISSING: 'bg-pink-200 text-pink-700',
};

const StatusBadge: React.FC<Props> = ({ status }) => {
  return (
    <span
      className={`inline-block rounded-md px-3 py-1 text-xs font-semibold  ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
