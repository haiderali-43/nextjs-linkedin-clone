import Link from "next/link";

const LoginForm = ({ buttontitle }) => {
  return (
    <div className="ml-8  w-[400px]">
      <Link href={"/sign-in"}>
        <button
          type="submit"
          className="px-0 py-2 bg-blue-600 rounded-lg w-[400px] mt-7 ml-3 "
        >
          {buttontitle}
        </button>
      </Link>
    </div>
  );
};

export default LoginForm;
