import React from "react";
import { Card, CardContent } from "../../_components/ui/card";
import { Badge } from "../../_components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../_components/ui/avatar";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between py-0">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="bg-[#221c3d] text-primary hover:bg-[#22qc3d] w-fit">
            Confirm
          </Badge>
          <h2 className="font-bold">Hair Cut</h2>
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png" />
              <AvatarFallback>Hair cut</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">Vintage Barber</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-3">
          <p className="text-sm">January</p>
          <p className="text-2xl">06</p>
          <p className="text-sm">09:35</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
