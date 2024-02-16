"use server";

import { db } from "@/app/_lib/prisma";

interface SaveBookingsService {
  barbershopId: string;
  serviceId: string;
  userId: string;
  date: string;
}

export const saveBooking = async (params: SaveBookingsService) => {
  await db.booking.create({
    data: {
      serviceId: params.serviceId,
      userId: params.userId,
      date: params.date,
      babershopId: params.barbershopId,
    },
  });
};
