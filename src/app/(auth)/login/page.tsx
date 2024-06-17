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
import { FaGithub, FaGoogle } from "react-icons/fa";

import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const Login = () => {
  const params = useSearchParams();
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
          setErrors(response.errors as AuthErrorType);
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
    <Suspense>
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
                <Button>
                  <FaGithub className="mr-2 size-4" />
                  Github
                </Button>
                <Button>
                  <FaGithub className="mr-2 size-4" />
                  Github
                </Button>
              </div>
              <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                or
              </p>

              <section>
                <div className="space-y-2">
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
                <div className="mt-5 space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Type your password.."
                    onChange={(event) =>
                      setAuthState({
                        ...authState,
                        password: event.target.value,
                      })
                    }
                  />
                  <span className="text-red-400 font-bold">
                    {errors.password}
                  </span>
                </div>
                <div>
                  <Button className="w-full mt-5" disabled={loading}>
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
    </Suspense>
  );
};

export default Login;
