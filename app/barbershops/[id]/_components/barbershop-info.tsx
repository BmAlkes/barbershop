"use client";

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };
  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          size="icon"
          variant="outline"
          className="z-50 absolute top-4 left-4"
          onClick={handleOnClick}
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="z-50 absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop?.name}
          fill
          style={{ objectFit: "cover" }}
          className="opacity-75"
        />
      </div>
      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold py-3">{barbershop?.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <MapPinIcon className="stroke-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarIcon className="stroke-primary" size={18} />
          <p className="text-sm">5,0 (899 avaliation)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
