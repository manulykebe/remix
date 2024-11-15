import React from 'react';
import { format } from 'date-fns';
import { X } from 'lucide-react';

interface DateRequestModalProps {
  date: Date;
  onClose: () => void;
  onSubmit: (status: string) => void;
}

const statusOptions = [
  { value: 'unavailable', label: 'Unavailable', color: 'bg-red-500' },
  { value: 'prefer-not', label: 'Prefer Not', color: 'bg-yellow-500' },
  { value: 'request-holiday', label: 'Request Holiday', color: 'bg-blue-500' },
  { value: 'preferred', label: 'Preferred', color: 'bg-green-500' }
];

export function DateRequestModal({ date, onClose, onSubmit }: DateRequestModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {format(date, 'MMMM d, yyyy')}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2">
          {statusOptions.map(option => (
            <button
              key={option.value}
              onClick={() => onSubmit(option.value)}
              className={`
                w-full p-3 rounded-lg text-white font-medium
                transition-colors duration-200
                ${option.color} hover:opacity-90
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}