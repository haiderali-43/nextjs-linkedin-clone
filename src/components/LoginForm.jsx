"use client"
import React, { useRef, useEffect } from "react";
import { Button } from "./ui/button";

const LoginForm = ({ focusEmailInput, buttontitle, forgotpassword }) => {
  const emailRef = useRef(null);

  useEffect(() => {
    if (focusEmailInput && emailRef.current) {
      emailRef.current.focus();
    }
  }, [focusEmailInput]);

  return (
    <div className="ml-8 mt-14">
      <form className="flex flex-col space-y-3 w-[25rem]">
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="border-2 border-black/25 rounded-sm p-3 outline-none"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-black/25 rounded-sm p-3 outline-none"
        />
        <span className="text-blue-400 cursor-pointer">{forgotpassword}</span>
        <Button
          variant="outline"
          className="bg-blue-500 text-white border-2 border-blue-500"
        >
          {buttontitle}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
