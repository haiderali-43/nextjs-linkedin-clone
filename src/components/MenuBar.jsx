import { Briefcase, Compass, UserRound, Youtube } from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div className="mt-6 hidden md:block">
      <Menubar className="space-x-7">
        <MenubarMenu>
          <MenubarTrigger className="flex flex-col space-y-2">
            <Compass />
            <p>Discover</p>
          </MenubarTrigger>
          <MenubarTrigger className="flex flex-col space-y-2">
            <UserRound />
            <p>People</p>
          </MenubarTrigger>
          <MenubarTrigger className="flex flex-col space-y-2">
            <Youtube />
            <p>Learning</p>
          </MenubarTrigger>
          <MenubarTrigger className="flex flex-col space-y-2">
            <Briefcase />
            <p>Jobs</p>
          </MenubarTrigger>
          <Separator
            orientation="vertical"
            className="text-extrabold bg-black"
          />
          <div className="flex items-center">
            <MenubarTrigger>
              <Link className="cursor-pointer text-blue-600" href={"/signup"}>
                Join Now
              </Link>
            </MenubarTrigger>
            <MenubarTrigger>
              <Button
                variant="outline"
                className="outline-blue-600 border-2 border-neutral-400 text-blue-600 p-2 rounded-md ml-4"
                
              >
                Sign in
              </Button>
            </MenubarTrigger>
          </div>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MenuBar;
