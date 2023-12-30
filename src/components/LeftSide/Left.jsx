import React from "react";
import ProfileCard from "./Profile Card/ProfileCard";

const Left = () => {
  return (
    <div className="w-[25%] fixed left-0  h-[100vh] overflow-hidden p-4">
      <div className="border border-gray-400 h-[20rem]  rounded-lg">
        <ProfileCard/>
 
      </div>
    </div>
  );
};

export default Left;
