import React, { useState, useEffect } from 'react';
import { json, type MetaFunction } from "@remix-run/node";
import { useActionData, useNavigation } from "@remix-run/react";
import { Calendar } from '../../src/components/Calendar';
import { DateRequestModal } from '../../src/components/DateRequestModal';
import { Login } from '../../src/components/Login';
import { getDateRequests, createDateRequest } from '../../src/lib/api';
import toast from "react-hot-toast";

export const meta: MetaFunction = () => {
  return [
    { title: "Team Calendar" },
    { name: "description", content: "Team calendar application for managing availability" },
  ];
};

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const { date, status } = Object.fromEntries(formData);

  try {
    const response = await fetch("http://localhost:3000/api/calendar/requests", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ date, status }),
    });
    const data = await response.json();
    return json(data);
  } catch (error) {
    return json({ error: "Failed to create request" }, { status: 400 });
  }
}

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateRequests, setDateRequests] = useState([]);
  
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadDateRequests();
    }
  }, [isAuthenticated]);

  const loadDateRequests = async () => {
    try {
      const requests = await getDateRequests();
      setDateRequests(requests);
    } catch (error) {
      toast.error('Failed to load date requests');
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleRequestSubmit = async (status: string) => {
    try {
      await createDateRequest(
        selectedDate!.toISOString().split('T')[0],
        status
      );
      await loadDateRequests();
      setSelectedDate(null);
      toast.success('Request created successfully');
    } catch (error) {
      toast.error('Failed to create request');
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Calendar
          currentDate={currentDate}
          dateRequests={dateRequests}
          onDateSelect={handleDateSelect}
          onMonthChange={setCurrentDate}
        />

        {selectedDate && (
          <DateRequestModal
            date={selectedDate}
            onClose={() => setSelectedDate(null)}
            onSubmit={handleRequestSubmit}
          />
        )}
      </div>
    </div>
  );
}