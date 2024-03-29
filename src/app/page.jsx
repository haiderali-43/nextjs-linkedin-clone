"use client";
import Image from "next/image";
import MenuBar from "../components/MenuBar";
import { useState } from "react";
import LoginForm from "../components/LoginForm";

const Page = () => {
  const [focusEmailInput, setFocusEmailInput] = useState(false);

  const handleSignInClick = () => {
    setFocusEmailInput(true);
  };

  return (
    <div className="overflow-hidden">
      {/* Nav Page Design */}
      <div className="flex justify-between px-10">
        <div>
          <Image
            src={"/header.png"}
            width={150}
            height={150}
            alt="Header"
            className="hidden md:block"
          />
          <Image
            src={"/header.png"}
            width={80}
            height={80}
            alt="Header"
            className="md:hidden mr-2"
          />
        </div>
        {/* Menubar started */}
        <MenuBar onEmailClick={handleSignInClick} />
        {/* Menubar end */}
      </div>
      {/* login page content */}
      <div>
        <h2 className="text-[#b9978f] text-3xl ml-[2rem] mt-11 md:text-6xl">
          Welcome to your <br /> Professional Community
        </h2>
        <LoginForm
          focusEmailInput={focusEmailInput}
          buttontitle={"Sign in"}
          forgotpassword={"Forgot Password"}
        />
      </div>
      <div>
        {/* large screens */}
        <Image
          src={"/laptop.jpg"}
          width={550}
          height={550}
          alt="Laptop"
          className="float-right absolute top-[20rem] right-0 hidden md:block w-auto h-auto"
        />
        {/* mobile screens */}
        <Image
          src={"/laptop.jpg"}
          width={200}
          height={200}
          alt="Laptop"
          className="absolute bottom-4 left-[3rem] m-auto md:hidden w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Page;
