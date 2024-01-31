import { format } from "date-fns";
import Image from "next/image";
import Search from "./_component/search";
import BookingItem from "./_component/booking-item";
import BarbershopItem from "./_component/barbershop-item";
import { db } from "../_lib/prisma";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
  return (
    <main>
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Hello, Bruno!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd'th' MMMM")}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-sm uppercase font-bold mb-4">Schedules</h2>
        <BookingItem />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-sm uppercase font-bold mb-4">Recommended</h2>
        <div className="flex  gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <div className="px-5 mt-6 mb-[6.5rem]">
        <h2 className="text-sm uppercase font-bold mb-4">Popular</h2>
        <div className="flex  gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </main>
  );
}
