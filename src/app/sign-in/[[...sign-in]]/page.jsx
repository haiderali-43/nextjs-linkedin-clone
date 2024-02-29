import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex items-center justify-center flex-col overflow-hidden">
      <Image src={"/header.png"} alt="Signup Page" width={200} height={200} />
      <p className=" text-3xl md:hidden">
        Make the most of <br /> your professional life
      </p>
      <p className=" text-3xl hidden md:block">
        Make the most of your professional life
      </p>
      <SignIn />
    </div>
  );
};

export default Page;
