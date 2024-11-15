import React, { useState, useEffect } from 'react';
import { Calendar } from './components/Calendar';
import { DateRequestModal } from './components/DateRequestModal';
import { getDateRequests, createDateRequest, acknowledgeDateRequest } from './lib/api';
import { format } from 'date-fns';
import { DateRequest } from '../../server/src/types';
import { LogOut } from 'lucide-react';

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateRequests, setDateRequests] = useState<DateRequest[]>([]);
  const [isAdmin] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).isAdmin : false;
  });

  useEffect(() => {
    loadDateRequests();
  }, []);

  const loadDateRequests = async () => {
    try {
      const requests = await getDateRequests();
      setDateRequests(requests);
    } catch (error) {
      console.error('Failed to load date requests:', error);
    }
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleRequestSubmit = async (status: string) => {
    try {
      if (!selectedDate) return;
      
      await createDateRequest(
        format(selectedDate, 'yyyy-MM-dd'),
        status
      );
      
      await loadDateRequests();
      setSelectedDate(null);
    } catch (error) {
      console.error('Failed to create date request:', error);
    }
  };

  const handleAcknowledge = async (requestId: string) => {
    try {
      await acknowledgeDateRequest(requestId);
      await loadDateRequests();
    } catch (error) {
      console.error('Failed to acknowledge request:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Team Calendar</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <Calendar
          currentDate={currentDate}
          dateRequests={dateRequests}
          onDateSelect={handleDateSelect}
          onMonthChange={setCurrentDate}
        />

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Pending Requests</h2>
          <div className="bg-white rounded-lg shadow divide-y">
            {dateRequests
              .filter(request => !request.acknowledged)
              .map(request => (
                <div key={request.id} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{format(new Date(request.date), 'MMMM d, yyyy')}</p>
                    <p className="text-sm text-gray-500">Status: {request.status}</p>
                  </div>
                  {isAdmin && (
                    <button
                      onClick={() => handleAcknowledge(request.id)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Acknowledge
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {selectedDate && (
        <DateRequestModal
          date={selectedDate}
          onClose={() => setSelectedDate(null)}
          onSubmit={handleRequestSubmit}
        />
      )}
    </div>
  );
}