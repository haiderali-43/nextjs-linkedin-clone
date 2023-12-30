import Image from "next/image";
import Avatar from "./Avatar";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SaveIcon } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="">
      {/* cover image */}
      <div>
        <Image
          src="/Banner.png"
          alt="Profile Picture"
          width={500}
          height={200}
          className="rounded-lg"
          quality={100}
        />
      </div>
      {/* profile image  */}
      <div className="mx-auto">
        <Avatar avatarWidth={80} avatarheight={80} />
      </div>
      {/* Name and Headline */}
      <div className="flex justify-center flex-col">
        <Link
          href={"/profile"}
          className="hover:underline flex justify-center -mt-3"
        >
          Haider Ali
        </Link>
        <p className="text-[14px] text-center mt-2">
          🚀 Next.js Developer | 📊 Data Science Student | ✨ Passionate about
          Crafting Innovative Solutions | 🌟 Striving for Excellence
        </p>
      </div>
      <Separator className="mt-5" />
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-[14px]">My Saved Items</p>
        <SaveIcon className="font-extralight cursor-pointer" />
      </div>
    </div>
  );
};

export default ProfileCard;
