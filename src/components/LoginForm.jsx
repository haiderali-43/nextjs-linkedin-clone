"use client";
import React, { useRef, useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const LoginForm = ({ focusEmailInput, buttontitle, forgotpassword }) => {
  const emailRef = useRef(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (focusEmailInput && emailRef.current) {
      emailRef.current.focus();
    }
  }, [focusEmailInput]);

  function togglePasswordVisibility() {
    setPasswordVisible((prev) => !prev);
  }

  const passwordInputType = passwordVisible ? "text" : "password";
  const showPasswordText = passwordVisible ? "Hide" : "Show";

  return (
    <div className="ml-8 mt-14">
      <form className="flex flex-col space-y-3 w-[25rem]">
        <label htmlFor="email">Email or Phone Number</label>
        <input
          type="email"
          id="email"
          placeholder="Email or Phone Number"
          className="border-2 border-black/25 rounded-sm p-3 outline-none"
          ref={emailRef}
        />

        <label htmlFor="password">Password</label>
        <input
          type={passwordInputType}
          placeholder="Password"
          className="border-2 border-black/25 rounded-sm p-3 outline-none"
          id="password"
        />

        <p
          className="cursor-pointer  relative left-[21rem] -top-12 "
          onClick={togglePasswordVisibility}
        >
          {showPasswordText}
        </p>

        <span className="text-blue-400 cursor-pointer hover:underline">
          {forgotpassword}
        </span>

        <Button
          variant="outline"
          className="bg-blue-500 text-white border-2 border-blue-500"
        >
          {buttontitle}
        </Button>

        <span>
          Don&rsquo;t have an account?{" "}
          <Link
            href={"/signup"}
            className="text-blue-500 hover:underline transition-transform duration-75 hover:translate-x-4"
          >
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
