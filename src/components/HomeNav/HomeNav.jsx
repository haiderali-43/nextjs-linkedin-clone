import Image from "next/image";
import SearchBar from "./SearchBar";
import MenuIcons from "./MenuIcons";

const HomeNav = () => {
  return (
    <div className="flex justify-between w-full h-[50px] p-2">
      <div className="mt-1 ml-4">
        <Image src={"/FeedPage.png"} alt="logo" width={40} height={40} />
      </div>
      <div className="mt-[-26px] mr-[2rem]">
        <SearchBar />
      </div>
      <div className="mr-9 mt-1.5">
        <MenuIcons />
      </div>
    </div>
  );
};

export default HomeNav;
