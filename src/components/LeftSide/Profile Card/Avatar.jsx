import Image from "next/image";

const Avatar = ({ avatarWidth, avatarheight }) => {
  return (
    <div className="relative left-[5.5rem] -top-7">
      <Image
        alt="Avatar"
        className="rounded-full border border-gray-500"
        width={avatarWidth}
        height={avatarheight}
        src={"/profile.png"}
      />
    </div>
  );
};

export default Avatar;
