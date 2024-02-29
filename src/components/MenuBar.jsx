import { Briefcase, Compass, UserRound, Youtube } from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div class="mt-6 flex justify-between px-10">
      <div class="hidden md:block">
        <div class="space-x-7 flex">
          <div class="flex flex-col space-y-2 items-center cursor-pointer">
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12l-6-6v12l6-6z"
              ></path>
            </svg>
            <p class="text-gray-600">Discover</p>
          </div>
          <div class="flex flex-col space-y-2 items-center cursor-pointer">
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6s2-4 6-4 6 4 6 4-2 6-6 6-6-2-6-6zm10 8c0 2.21-1.79 4-4 4s-4-1.79-4-4"
              ></path>
            </svg>
            <p class="text-gray-600">People</p>
          </div>
          <div class="flex flex-col space-y-2 items-center cursor-pointer">
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 19c1.104 0 2-.896 2-2v-7a2 2 0 0 0-2-2h-4l-3-4H8a2 2 0 0 0-2 2v14"
              ></path>
            </svg>
            <p class="text-gray-600">Learning</p>
          </div>
          <div class="flex flex-col space-y-2 items-center cursor-pointer">
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            <p class="text-gray-600">Jobs</p>
          </div>
          <div class="text-extrabold bg-black"></div>
        </div>
      </div>
      <div class="flex items-center -mt-3 space-x-6 absolute right-4 top-5 md:relative md:-top-2 md:left-8">
        <Link href={'/sign-up'} className="text-blue-500">Join Now</Link>
        <button class="outline-blue-600 border-2 border-neutral-400 text-blue-600 p-2 rounded-md ml-4">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
