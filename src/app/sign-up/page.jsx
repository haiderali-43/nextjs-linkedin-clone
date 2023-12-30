import LoginForm from "../../components/LoginForm";
import { Button } from "../../components/ui/button";

import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Image src={"/header.png"} alt="Signup Page" width={200} height={200} />
      <p className=" text-3xl md:hidden">
        Make the most of <br /> your professional life
      </p>
      <p className=" text-3xl hidden md:block">
        Make the most of your professional life
      </p>
      <LoginForm buttontitle="Accept and register" className="ml-[4rem]" />
      <div className="mt-4">OR</div>
      <div>
        <Button
          variant="outline"
          className="px-4 py-4 mt-4 ml-7 w-[25rem] border-2 border-blue-600 text-blue-500"
        >
          Sign up with Google
        </Button>
      </div>
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

export default page;
