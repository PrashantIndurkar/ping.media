"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(authState);
  };
  return (
    <div className="bg-black">
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className="w-full mx-2 md:w-1/3 md:mx-0 bg-neutral-900/30 shadow-lg p-6 rounded-lg">
          <div className="flex justify-center mt-10">
            <Image
              src="/images/PingLogo.png"
              width={200}
              height={200}
              alt="Logo"
            />
          </div>
          {/* {params.get("message") ? (
            <div className="bg-green-300 p-5 rounded-lg font-bold my-4 text-black">
              <strong>Success!</strong> {params.get("message")}
            </div>
          ) : (
            <></>
          )} */}
          {/* TODO: add React hook for form validation with zod */}
          <form onSubmit={onSubmit}>
            <div className="mt-5">
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-2xl font-bold text-white">Login</h1>
                <p className="inline-block text-neutral-400">Welcome back</p>
              </div>

              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Type your email.."
                  onChange={(event) =>
                    setAuthState({ ...authState, email: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">
                  {/* {errors?.email} */}
                  Error**
                </span>
              </div>
              <div className="mt-5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Type your password.."
                  onChange={(event) =>
                    setAuthState({ ...authState, password: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">Error**</span>
              </div>
              <div className="mt-5">
                <Button
                  className="w-full"
                  variant="outline"
                  // disabled={loading}
                >
                  {/* {loading ? "Processing ..." : "Login"} */}
                  Login
                </Button>
              </div>
              <div className="mt-5 text-white">
                <span>Don't Have an account ? </span>
                <Link
                  href="/register"
                  className="text-indigo-500 cursor-pointer font-bold"
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
