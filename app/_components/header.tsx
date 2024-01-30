import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image src="/logo.png" alt="logo" height={22} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
