// Page.js
"use client";
import Image from "next/image";
import MenuBar from "@/components/MenuBar";
import LoginForm from "@/components/LoginForm";
import { useState } from "react";

const Page = () => {
  const [focusEmailInput, setFocusEmailInput] = useState(false);

  const handleSignInClick = () => {
    setFocusEmailInput(true);
  };

  return (
    <>
      <div>
        {/* Nav Page Design */}
        <div className="flex justify-between px-10">
          <div>
            <Image src={"/header.png"} width={150} height={150} alt="Header" />
          </div>
          {/* Menubar started */}
          <MenuBar onSignInClick={handleSignInClick} />
          {/* Menubar end */}
        </div>
        {/* login page content */}
        <div>
          <h2 className="text-[#b9978f] text-6xl ml-[2rem] mt-11">
            Welcome to your <br /> Professional Community
          </h2>
          <LoginForm focusEmailInput={focusEmailInput} />
        </div>
        <div>
          <Image
            src={"/laptop.jpg"}
            width={700}
            height={700}
            alt="Laptop"
            className="float-right absolute top-[17rem] right-0"
          />
        </div>
      </div>
    </>
  )
};

export default Page;
