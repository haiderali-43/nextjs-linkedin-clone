"use client";
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import app from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = ({ focusEmailInput, buttontitle, forgotpassword }) => {
  const auth = getAuth(app);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password, auth).then(
        (userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
          router.push("/feed");
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ml-8 mt-14 w-[400px]">
      <form
        onSubmit={handlelogin}
        className="w-[400px] h-[300px] px-4 py-4 flex flex-col justify-between rounded-md"
      >
        <label htmlFor="Email">Email</label> <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[300px] h-[40px] border-2 border-gray-900 outline-none rounded-md px-2"
        />{" "}
        <br />
        <label htmlFor="Password">Password</label> <br />
        <input
          type={passwordInputType}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[300px] h-[40px] border-2 border-gray-900 outline-none rounded-md px-2"
        />
        <span className="cursor-pointer" onClick={togglePasswordVisibility}>
          {showPasswordText}
        </span>{" "}
        <br />
        <button type="submit" className="px-0 py-2 bg-blue-600 rounded-md">
          {buttontitle}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
