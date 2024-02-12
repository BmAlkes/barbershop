import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { redirect } from "next/navigation";
import BarbershopInfo from "./_components/barbershop-info";
import ServicesItem from "./_components/service-item";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/auth";

export interface BarbershopDetailsPageProps {
  params: any;
  id?: string;
}

export const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  const session = await getServerSession(authOptions);
  if (!params.id) {
    redirect("/");
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });
  if (!barbershop) {
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      <div className="px-5 flex flex-col gap-3 py-6 ">
        <div className="flex gap-3">
          <Button>Services</Button>
          <Button variant="secondary">Information</Button>
        </div>
        {barbershop.services.map((service) => (
          <ServicesItem
            barbershop={barbershop}
            key={service.id}
            service={service}
            isAutheticated={!!session?.user}
          />
        ))}
      </div>
    </div>
  );
};
