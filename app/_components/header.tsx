"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" height={22} width={120} />
        </Link>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>

        {data?.user ? (
          <div className="flex items-center gap-2">
            <h1>{data.user.name}</h1>
            <Button onClick={() => signOut()}>logout</Button>
          </div>
        ) : (
          <Button onClick={handleLoginClick}>Login</Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Header;
