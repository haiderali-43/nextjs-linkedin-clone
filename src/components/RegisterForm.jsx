"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import app from "../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const RegisterForm = ({ buttontitle }) => {
  const auth = getAuth(app);
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function togglePasswordVisibility() {
    setPasswordVisible((prev) => !prev);
  }

  const passwordInputType = passwordVisible ? "text" : "password";
  const showPasswordText = passwordVisible ? "Hide" : "Show";

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);

      // Redirect to verifyemail page
      router.push("/verifyemail");

      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  if (email) {
    throw new Error("Email is already registered please sign in");
  }

  return (
    <div className="ml-8 mt-12">
      <form
        onSubmit={handleSignup}
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

export default RegisterForm;
