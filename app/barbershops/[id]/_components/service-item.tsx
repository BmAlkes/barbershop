"use client";
import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { Barbershop, Service } from "@prisma/client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useMemo } from "react";
import { generateDayTimeList } from "../hours";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

interface ServicesItemProps {
  service: Service;
  isAutheticated?: boolean;
  barbershop: Barbershop;
}

const ServicesItem = ({
  service,
  isAutheticated,
  barbershop,
}: ServicesItemProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [hour, setHour] = React.useState<String | undefined>();

  const handleBookingClick = () => {
    if (!isAutheticated) {
      return signIn("google");
    }

    //futuro modal de agendamentos
  };
  const timeList = useMemo(() => {
    return date ? generateDayTimeList(date) : [];
  }, [date]);

  const handleDateClick = (date: Date | undefined) => {
    setDate(date);
    setHour(undefined);
  };

  const handleHourClick = (time: string) => {
    setHour(time);
  };

  return (
    <Card>
      <CardContent className="p-3 w-full">
        <div className="flex gap-4 items-center w-full">
          <div className="relative min-h-[110px] max-h-[110px] min-w-[110px] w-[110px]">
            <Image
              className="rounded-lg"
              src={service.imageUrl}
              fill
              style={{ objectFit: "contain" }}
              alt={service.name}
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-bold">{service.name}</h2>
            <p className="text-sm text-gray-400">{service.description}</p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-primary font-bold text-sm">
                {Intl.NumberFormat("he-Il", {
                  style: "currency",
                  currency: "ILS",
                }).format(Number(service.price))}
              </p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary" onClick={handleBookingClick}>
                    Schedule
                  </Button>
                </SheetTrigger>
                <SheetContent className="p-0 ">
                  <SheetHeader className="text-left px-5 py-6 border-b border-solid border-secondary">
                    <SheetTitle>Make a Reservation</SheetTitle>
                  </SheetHeader>
                  <div className="py-6">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={handleDateClick}
                      fromDate={new Date()}
                      className="mt-6"
                      styles={{
                        head_cell: {
                          width: "100%",
                          minWidth: "50px",
                        },
                        cell: {
                          width: "100%",
                        },
                        button: {
                          width: "100%",
                        },
                        nav_button_previous: {
                          width: "32px",
                          height: "32px",
                        },
                        nav_button_next: {
                          width: "32px",
                          height: "32px",
                        },
                        caption: {
                          textTransform: "capitalize",
                        },
                      }}
                    />
                  </div>
                  {/* mostar lista de de horarios apenas se alguma data estiver selecionada */}
                  {date && (
                    <div className="flex  flex-wrap  gap-3 justify-center py-6 px-5 border-y border-solid border-secondary">
                      {timeList.map((time) => (
                        <Button
                          key={time}
                          className="rounded-full"
                          variant={hour === time ? "default" : "outline"}
                          onClick={() => handleHourClick(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  )}
                  <div className="py-6 px-5 border-t border-solid border-secondary">
                    <Card>
                      <CardContent className="p-3">
                        <div className="flex justify-between">
                          <h2 className="font-bold">{service.name}</h2>
                          <h3 className="font-bold text-primary">
                            {Intl.NumberFormat("he-Il", {
                              style: "currency",
                              currency: "ILS",
                            }).format(Number(service.price))}
                          </h3>
                        </div>
                        {date && (
                          <div className="flex justify-between my-2">
                            <p className="text-gray-400 text-sm">Date:</p>
                            <p className="text-gray-400 text-sm">
                              {format(date, "dd 'of' MMMM", {
                                locale: enUS,
                              })}
                            </p>
                          </div>
                        )}
                        {hour && (
                          <div className="flex justify-between my-3">
                            <p className="text-gray-400 text-sm">Hour:</p>
                            <p className="text-gray-400 text-sm">{hour}</p>
                          </div>
                        )}
                        <div className="flex justify-between my-3">
                          <p className="text-gray-400 text-sm">BarberShop</p>
                          <p className="text-gray-400 text-sm">
                            {barbershop.name}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <SheetFooter className="px-5">
                    <Button className="w-full" disabled={!hour || !date}>
                      Confirme Schedule
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesItem;
