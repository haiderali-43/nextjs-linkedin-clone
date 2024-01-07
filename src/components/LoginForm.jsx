"use client";
import React, { useRef, useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loginschema } from "@/schemes/login";
import { Input } from "./ui/input";
import { Social } from "./social";

const LoginForm = ({ focusEmailInput, buttontitle, forgotpassword }) => {
  const router = useRouter();
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

  const form = useForm({
    resolver: zodResolver(Loginschema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = () => {
    console.log("jjjjjjjjj");
  };
  return (
    <div className="ml-8 mt-14 w-[400px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@example.com"
                        type="email"
                        ref={emailRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="******" type="password" />
                    </FormControl>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/auth/reset">Forgot password?</Link>
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          </div>
          <Button type="submit" className="w-full">
            {buttontitle}
          </Button>
          <Social />
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
