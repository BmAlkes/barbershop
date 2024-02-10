"use client";
import React from "react";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";

import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

const SideMenu = () => {
  const { data } = useSession();
  const handleLoginClick = async () => {
    await signIn("google");
  };
  return (
    <>
      <SheetHeader>
        <SheetTitle className="text-left border-b border-solid border-secondary p-5">
          <h1>Menu</h1>
        </SheetTitle>
      </SheetHeader>
      {data?.user ? (
        <div className="flex justify-between items-center px-5 py-6">
          <div className="flex items-center gap-3 ">
            <Avatar>
              <AvatarImage
                src={data.user?.image ?? ""}
                alt={data?.user?.name ?? ""}
              />
            </Avatar>
            <h2 className="font-bold">{data.user.name}</h2>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              signOut();
            }}
          >
            <LogOutIcon />
          </Button>
        </div>
      ) : (
        <div className="px-5 py-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 ">
            <UserIcon size={32} />
            <h2>Hello. Do your login</h2>
          </div>
          <Button
            className="w-full justify-start"
            variant="secondary"
            onClick={handleLoginClick}
          >
            <LogInIcon className="mr-2" />
            Login
          </Button>
        </div>
      )}
      <div className="flex flex-col gap-3 px-5">
        <Button variant="outline" className="justify-start" asChild>
          <Link href="/">
            <HomeIcon size={18} className="mr-2" />
            Start
          </Link>
        </Button>
        {data?.user && (
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/bookings">
              <CalendarIcon size={18} className="mr-2" />
              Schedule
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
