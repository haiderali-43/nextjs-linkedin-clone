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
          <LoginForm focusEmailInput={focusEmailInput} buttontitle={"Sign in"}  forgotpassword={"Forgot Password"}/>
        </div>
        <div>
          <Image
            src={"/laptop.jpg"}
            width={600}
            height={600}
            alt="Laptop"
            className="float-right absolute top-[12rem] right-0"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
