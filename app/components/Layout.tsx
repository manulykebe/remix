import { Form, Link } from "@remix-run/react";
import { Calendar, LogOut, User } from "lucide-react";
import type { User as UserType } from "@prisma/client";

interface LayoutProps {
  user: UserType;
  children: React.ReactNode;
}

export function Layout({ user, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white border-r">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-semibold">Team Calendar</span>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>

            <Form action="/logout" method="post">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </Form>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}