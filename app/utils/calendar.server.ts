import { db } from "./db.server";
import { startOfMonth, endOfMonth } from "date-fns";

export async function getMonthEvents(date = new Date()) {
  return db.event.findMany({
    where: {
      date: {
        gte: startOfMonth(date),
        lte: endOfMonth(date),
      },
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
}

export async function createEvent(data: {
  date: Date;
  type: string;
  userId: string;
}) {
  return db.event.create({
    data: {
      date: data.date,
      type: data.type as any,
      userId: data.userId,
    },
  });
}

export async function updateEvent(id: string, data: {
  type?: string;
  status?: string;
}) {
  return db.event.update({
    where: { id },
    data: {
      ...(data.type && { type: data.type as any }),
      ...(data.status && { status: data.status as any }),
    },
  });
}

export async function deleteEvent(id: string) {
  return db.event.delete({
    where: { id },
  });
}