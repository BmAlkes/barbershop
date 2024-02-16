import React from "react";
import { Card, CardContent } from "../../_components/ui/card";
import { Badge } from "../../_components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../_components/ui/avatar";
import { Prisma } from "@prisma/client";
import { format, isFuture, isPast } from "date-fns";

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>;
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isBookingConfirm = isFuture(booking.date);
  return (
    <Card>
      <CardContent className="flex  px-0 py-0">
        <div className="flex flex-col gap-2 py-5 pl-5 flex-[3]">
          <Badge
            className="w-fit"
            variant={isBookingConfirm ? "default" : "secondary"}
          >
            {isPast(booking.date) ? "Finish" : "Confirm"}
          </Badge>
          <h2 className="font-bold">{booking.service.name}</h2>
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src={booking.barbershop.imageUrl} />
              <AvatarFallback>Hair cut</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">{booking.barbershop.name}</h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center border-l border-solid border-secondary px-3">
          <p className="text-sm capitalize">{format(booking.date, "MMMM")}</p>
          <p className="text-2xl">{format(booking.date, "dd")}</p>
          <p className="text-sm">{format(booking.date, "HH:mm")}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
