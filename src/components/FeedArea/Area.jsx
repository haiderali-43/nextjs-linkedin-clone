import { Separator } from "../ui/separator";
import OpenInput from "./OpenInput";
import PostDisplay from "./PostDisplay";
import PostModal from "./PostModal";

const Area = () => {
  return (
    <div className="w-[49%] border-2 border-grey-400 rounded-md mt-3 m-auto p-2 h-[100vh] overflow-hidden">
      <OpenInput />
      <Separator className="mt-5" />
      <PostModal/>

      {/* Post display */}
      <PostDisplay />
    </div>
  );
};

export default Area;
