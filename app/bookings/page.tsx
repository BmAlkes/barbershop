import Header from "../_components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";
import BookingItem from "../(home)/_component/booking-item";
import { isFuture, isPast } from "date-fns";

const BookingsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/");
  }

  const bookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
    },
    include: {
      service: true,
      barbershop: true,
    },
  });
  const confirmedBookings = bookings.filter((booking) =>
    isFuture(booking.date)
  );
  const finishBookings = bookings.filter((booking) => isPast(booking.date));
  return (
    <>
      <Header />

      <div className="px-5 py-6">
        <h1 className="text-xl font-bold">Reservation</h1>

        <h2 className="mt-6 mb-3 text-gray-400 font-bold text-sm">Confirmed</h2>
        <div className="flex flex-col gap-3 ">
          {confirmedBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>
        <h2 className="mt-6 mb-3 text-gray-400 font-bold text-sm">Finished</h2>
        <div className="flex flex-col gap-3 ">
          {finishBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingsPage;
