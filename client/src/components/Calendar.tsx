import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';
import { DateRequest } from '../../server/src/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  currentDate: Date;
  dateRequests: DateRequest[];
  onDateSelect: (date: Date) => void;
  onMonthChange: (date: Date) => void;
}

const statusColors = {
  'unavailable': 'bg-red-100 text-red-800',
  'prefer-not': 'bg-yellow-100 text-yellow-800',
  'request-holiday': 'bg-blue-100 text-blue-800',
  'preferred': 'bg-green-100 text-green-800'
};

export function Calendar({ currentDate, dateRequests, onDateSelect, onMonthChange }: CalendarProps) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getDateStatus = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return dateRequests.find(request => request.date === dateStr);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => onMonthChange(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => onMonthChange(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
        
        {days.map(day => {
          const status = getDateStatus(day);
          return (
            <button
              key={day.toString()}
              onClick={() => onDateSelect(day)}
              className={`
                p-2 text-sm rounded-lg hover:bg-gray-50
                ${!isSameMonth(day, currentDate) ? 'text-gray-300' : ''}
                ${status ? statusColors[status.status] : ''}
              `}
            >
              <span className="font-medium">{format(day, 'd')}</span>
              {status && (
                <div className="text-xs mt-1">
                  {status.acknowledged ? '✓' : '•'}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}