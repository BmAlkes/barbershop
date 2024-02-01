"use client";

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
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
  );
};

export default BarbershopInfo;
