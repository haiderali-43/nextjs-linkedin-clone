"use client";
import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import { Button } from "../../components/ui/button";

import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-center justify-center flex-col overflow-hidden md:overflow-scroll">
      <Image src={"/header.png"} alt="Signup Page" width={200} height={200} />
      <p className=" text-3xl md:hidden">
        Make the most of <br /> your professional life
      </p>
      <p className=" text-3xl hidden md:block">
        Make the most of your professional life
      </p>
      <LoginForm buttontitle="Accept and register" />
      <div className="mt-4">OR</div>

      <div className="mt-4">
        Already have an account?{" "}
        <Link
          href={"/"}
          className="text-blue-500 hover:underline transform-300"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Page;
