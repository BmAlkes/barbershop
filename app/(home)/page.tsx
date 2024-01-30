import { format } from "date-fns";
import Image from "next/image";
import Search from "./_component/search";

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
    </main>
  );
}
