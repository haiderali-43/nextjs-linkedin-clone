import { Briefcase, Compass, UserRound, Youtube } from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div className="mt-6 flex justify-between px-10 ">
      <div className="hidden md:block">
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
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex items-center -mt-3 space-x-6  absolute right-4 top-5 md:relative md:-top-2 md:left-8  ">
        <Link className="cursor-pointer text-blue-600" href={"/signup"}>
          Join Now
        </Link>

        <Button
          variant="secondary"
          className="outline-blue-600 border-2 border-neutral-400 text-blue-600 p-2 rounded-md ml-4"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default MenuBar;
