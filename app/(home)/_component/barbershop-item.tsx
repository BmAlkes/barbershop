import { Card, CardContent } from "@/app/_components/ui/card";
import React from "react";
import { Barbershop } from "@prisma/client";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-1 py-0">
        <div className="px-1 relative w-full h-[159px]">
          <Image
            src={barbershop.imageUrl}
            className="h-[159px] w-full rounded-2xl object-cover"
            fill
            alt={barbershop.name}
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 text-ellipsis overflow-hidden text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 text-ellipsis overflow-hidden text-nowrap">
            {barbershop.address}
          </p>
          <Button variant="secondary" className="w-full mt-3">
            Reserve
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
