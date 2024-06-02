"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const [errors, setErrors] = useState<AuthErrorType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(authState);
    setLoading(true);
    axios
      .post("/api/auth/register", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;

        if (response.status === 200) {
          console.log("Successfully registered");
          router.push(`/login?message=${response.message}`);
        } else if (response.status === 400) {
          setErrors(response.error);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-black py-36">
      <div className=" h-screen w-screen flex justify-center items-center">
        <div className="w-full lg:w-1/3 bg-neutral-900/30 shadow-lg p-6 rounded-lg ">
          <div className="flex justify-center">
            <Image
              src="/images/PingLogo.png"
              width={200}
              height={200}
              alt="Logo"
            />
          </div>
          <form onSubmit={onSubmit}>
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">Register</h1>
                  <p>Welcome to the threads</p>
                </div>
              </div>

              <div className="mt-5">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Type your name.."
                  onChange={(event) =>
                    setAuthState({ ...authState, name: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">{errors.name}</span>
              </div>
              <div className="mt-5">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Type your unique username"
                  onChange={(event) =>
                    setAuthState({ ...authState, username: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">
                  {errors.username}
                </span>
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
                <span className="text-red-400 font-bold">{errors.email}</span>
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
                <span className="text-red-400 font-bold">
                  {errors.password}
                </span>
              </div>
              <div className="mt-5">
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirm_password"
                  placeholder="Confirm password.."
                  onChange={(event) =>
                    setAuthState({
                      ...authState,
                      password_confirmation: event.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-5">
                <Button className="w-full" variant="outline" disabled={loading}>
                  {loading ? "Processing..." : "Register"}
                </Button>
              </div>
              <div className="mt-5 text-white">
                <span>Already Have an account ? </span>
                <Link
                  href="/login"
                  className="text-indigo-500 cursor-pointer font-bold"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
