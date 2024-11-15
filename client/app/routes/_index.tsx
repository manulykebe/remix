import React from "react";
import { json, type MetaFunction } from "@remix-run/node";
import { useActionData, useNavigation, Form } from "@remix-run/react";
import { Send, Server } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export const meta: MetaFunction = () => {
  return [
    { title: "Full-Stack Remix PWA" },
    { name: "description", content: "A full-stack Remix PWA application" },
  ];
};

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const message = formData.get("message");

  try {
    const response = await fetch("http://localhost:3000/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return json(data);
  } catch (error) {
    return json({ error: "Failed to send message" }, { status: 400 });
  }
}

export default function Index() {
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  const isSubmitting = navigation.state === "submitting";

  if (actionData?.success && !isSubmitting) {
    toast.success(actionData.message);
  } else if (actionData?.error && !isSubmitting) {
    toast.error(actionData.error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-center gap-2 mb-8 pt-8">
          <Server className="h-8 w-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">Full-Stack Remix PWA</h1>
        </header>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <Form method="post" className="space-y-4">
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Send a Message to Server
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 
                           px-4 py-2 border"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
                           shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                           focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors duration-200"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </Form>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">API Endpoints:</h2>
            <div className="bg-gray-50 rounded-md p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-mono">GET</span>
                <span className="text-gray-600">/api/health</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-mono">POST</span>
                <span className="text-gray-600">/api/message</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}