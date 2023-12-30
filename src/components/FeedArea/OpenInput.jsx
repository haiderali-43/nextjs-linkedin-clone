import React from "react";
import Avatar from "../LeftSide/Profile Card/Avatar";
import { CalendarDays, ImageDown, Newspaper } from "lucide-react";

const OpenInput = () => {
  return (
    <div className=" ">
      <div className="border rounded-lg border-gray-300">
        <div className="flex items-center p-4">
          <div className="flex-shrink-0 relative top-6 right-[5.5rem]">
            <Avatar avatarWidth={50} avatarheight={50} />
          </div>
          <div className="ml-4 flex-grow">
            <input
              type="text"
              placeholder="Start a post"
              className="w-full h-10 py-2 rounded-full px-4 mt-[-25px] text-sm font-semibold text-gray-700 bg-white border-2 border-gray-400 outline-none cursor-pointer"
            />
          </div>
        </div>
        {/*  */}
        <div className="flex justify-around">
          <div className="text-center flex space-x-2 cursor-pointer">
            <div className=" text-[#4788ca] mb-2">
              <ImageDown />
            </div>
            <p className="text-gray-700 font-semibold">Media</p>
          </div>
          <div className="text-center flex space-x-2 cursor-pointer">
            <div className=" text-[#d4ab6e]">
              <CalendarDays />
            </div>
            <p className="text-gray-700 font-semibold">Events</p>
          </div>
          <div className="text-center flex space-x-2 cursor-pointer">
            <div className=" text-grey-700 mb-2">
              <Newspaper />
            </div>
            <p className="text-gray-700 font-semibold">Write article</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenInput;
