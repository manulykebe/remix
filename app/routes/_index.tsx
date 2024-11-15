import React from "react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Calendar } from "../components/Calendar";
import { requireUser } from "../utils/auth.server";
import { getMonthEvents } from "../utils/calendar.server";
import { Layout } from "../components/Layout";

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireUser(request);
  const events = await getMonthEvents();
  return json({ user, events });
}

export default function Index() {
  const { user, events } = useLoaderData<typeof loader>();

  return (
    <Layout user={user}>
      <Calendar events={events} user={user} />
    </Layout>
  );
}