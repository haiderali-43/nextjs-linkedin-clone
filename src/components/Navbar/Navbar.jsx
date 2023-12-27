import Image from "next/image";
import SearchBar from "./SearchBar";
import MenuIcons from "./MenuIcons";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center w-full h-[50px] p-2 bg-white shadow-md">
      <div className="mt-1 ml-4">
        <Image src={"/FeedPage.png"} alt="logo" width={30} height={30} />
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

export default Navbar;
