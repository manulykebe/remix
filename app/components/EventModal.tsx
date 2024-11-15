import { Form } from "@remix-run/react";
import { X } from "lucide-react";
import { format } from "date-fns";
import type { Event, User } from "@prisma/client";

interface EventModalProps {
  date: Date;
  onClose: () => void;
  user: User;
  existingEvent?: Event;
}

export function EventModal({ date, onClose, user, existingEvent }: EventModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {format(date, 'MMMM d, yyyy')}
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <Form method="post" className="space-y-4">
          <input type="hidden" name="date" value={date.toISOString()} />
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Type
            </label>
            <select
              name="type"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              defaultValue={existingEvent?.type || ''}
            >
              <option value="UNAVAILABLE">Unavailable</option>
              <option value="PREFER_NOT">Prefer Not</option>
              <option value="HOLIDAY_REQUEST">Holiday Request</option>
              <option value="PREFERRED">Preferred</option>
            </select>
          </div>

          {existingEvent && user.role === 'ADMIN' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                defaultValue={existingEvent.status}
              >
                <option value="PENDING">Pending</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
              </select>
            </div>
          )}

          <div className="flex justify-end gap-3">
            {existingEvent && (
              <button
                type="submit"
                name="_action"
                value="delete"
                className="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200"
              >
                Delete
              </button>
            )}
            <button
              type="submit"
              name="_action"
              value={existingEvent ? 'update' : 'create'}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              {existingEvent ? 'Update' : 'Create'} Event
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}