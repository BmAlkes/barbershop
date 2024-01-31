import { format } from "date-fns";
import Image from "next/image";
import Search from "./_component/search";
import BookingItem from "./_component/booking-item";

export default function Home() {
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
        <h2 className="text-sm font-bold mb-4">Schedules</h2>
        <BookingItem />
      </div>
    </main>
  );
}
