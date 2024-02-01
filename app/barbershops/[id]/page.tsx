import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import BarbershopInfo from "./_components/barbershop-info";

interface BarbershopDetailsPageProps {
  params: any;
  id?: string;
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    redirect("/");
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!barbershop) {
    return null;
  }
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
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

export default BarbershopDetailsPage;
