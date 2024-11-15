import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EventModal } from './EventModal';
import type { Event, User } from '@prisma/client';

interface CalendarProps {
  events: Event[];
  user: User;
}

export function Calendar({ events, user }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const getEventForDate = (date: Date) => 
    events.find(event => 
      format(new Date(event.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );

  const getEventColor = (type: string) => {
    const colors = {
      UNAVAILABLE: 'bg-red-200',
      PREFER_NOT: 'bg-yellow-200',
      HOLIDAY_REQUEST: 'bg-blue-200',
      PREFERRED: 'bg-green-200',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-200';
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="bg-gray-50 p-4 text-center text-sm font-semibold">
            {day}
          </div>
        ))}
        
        {days.map(day => {
          const event = getEventForDate(day);
          return (
            <div
              key={day.toISOString()}
              onClick={() => setSelectedDate(day)}
              className={`
                bg-white p-4 min-h-[100px] cursor-pointer
                hover:bg-gray-50 transition-colors
                ${event ? getEventColor(event.type) : ''}
              `}
            >
              <span className="text-sm font-medium">
                {format(day, 'd')}
              </span>
              {event && (
                <div className="mt-1 text-xs">
                  {event.type.toLowerCase().replace('_', ' ')}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <EventModal
          date={selectedDate}
          onClose={() => setSelectedDate(null)}
          user={user}
          existingEvent={getEventForDate(selectedDate)}
        />
      )}
    </div>
  );
}