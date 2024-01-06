//feed page

import Area from "@/components/FeedArea/Area";
import Left from "@/components/LeftSide/Left";
import Navbar from "@/components/Navbar/Navbar";
import Right from "@/components/RightSide/Right";

const page = () => {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="flex justify-between mt-14">
        <Left />
        <Area />
        <Right />
      </div>
    </div>
  );
};

export default page;
