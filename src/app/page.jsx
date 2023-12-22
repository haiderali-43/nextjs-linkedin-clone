import {
  Briefcase,
  Compass,
  MoreVertical,
  UserRound,
  UsersRound,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div>
      {/* Nav Page Design */}
      <div className="flex justify-between px-10">
        <div>
          <Image src={"/header.png"} width={150} height={150} alt="Header" />
        </div>
        {/* Menubar started */}
        <div className="mt-6">
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
              <MenubarTrigger>Join Now</MenubarTrigger>
              <MenubarTrigger>
                <Button
                  variant="outline"
                  className="outline-blue-600 text-blue-600 p-6 rounded-[30px] mr-4"
                >
                  Sign in
                </Button>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        {/* Menubar end */}
      </div>
      {/* login page content */}
      <div>
        <h2>Welcome to your Professional Community</h2>
      </div>
    </div>
  );
};

export default page;
