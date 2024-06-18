"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuGithub } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const Login = () => {
  const { status } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [errors, setErrors] = useState<AuthErrorType>({});

  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/auth/login", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status === 200) {
          signIn("credentials", {
            email: authState.email,
            password: authState.password,
            callbackUrl: "/feed",
            redirect: true,
          });
        } else if (response.status === 400) {
          setErrors(response.error);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/feed");
    }
  }, [status, router]);

  return (
    <div className="grid w-full h-screen grow items-center px-4 sm:justify-center">
      <form onSubmit={onSubmit}>
        <Card className="w-full sm:w-96">
          <CardHeader>
            <CardTitle>Login in to Ping.media</CardTitle>
            <CardDescription>
              Welcome back! Please sign in to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-y-4">
            <div className="grid grid-cols-2 gap-x-4">
              <Button className="cursor-not-allowed" type="button">
                <FcGoogle className="mr-2 size-4" />
                Google
              </Button>
              <Button className="cursor-not-allowed" type="button">
                <LuGithub className="mr-2 size-4" />
                Github
              </Button>
            </div>
            <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
              or
            </p>

            <section>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="example@youremail.com"
                  autoComplete="email"
                  autoFocus
                  onChange={(event) =>
                    setAuthState({ ...authState, email: event.target.value })
                  }
                />
                <span className="text-xs text-zinc-900 dark:text-zinc-400">
                  {errors?.email}
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="********"
                  onChange={(event) =>
                    setAuthState({
                      ...authState,
                      password: event.target.value,
                    })
                  }
                />
                <span className="text-xs text-zinc-900 dark:text-zinc-400">
                  {errors?.password}
                </span>
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full mt-5"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Continue"}
                </Button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <Link
                  href="/register"
                  className="text-sm cursor-pointer hover:underline"
                >
                  Don't have an account? Register
                </Link>
              </div>
            </section>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default Login;
