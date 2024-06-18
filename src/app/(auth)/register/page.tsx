"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { LuGithub } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [errors, setErrors] = useState<AuthErrorType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
    // password_confirmation: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/auth/register", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;

        if (response.status === 200) {
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
    <div className="grid w-full h-screen grow items-center px-4 sm:justify-center">
      <form onSubmit={onSubmit}>
        <Card className="w-full sm:w-96">
          <CardHeader>
            <CardTitle>Register your account</CardTitle>
            {/* <CardDescription>
              Welcome! Please fill in the details to get started.
            </CardDescription> */}
          </CardHeader>
          <CardContent className="grid gap-y-4">
            <section>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Prashant Indurkar"
                  autoFocus
                  autoComplete="name"
                  onChange={(event) =>
                    setAuthState({ ...authState, name: event.target.value })
                  }
                />
                <span className="text-xs text-zinc-900 dark:text-zinc-400">
                  {errors?.name}
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="flex items-center gap-x-2 relative">
                  <span className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none text-zinc-500 dark:text-zinc-400 border-r ">
                    @
                  </span>
                  <Input
                    type="text"
                    id="username"
                    placeholder="prashantindurkar"
                    className="pl-12"
                    onChange={(event) =>
                      setAuthState({
                        ...authState,
                        username: event.target.value,
                      })
                    }
                  />
                </div>
                <span className="text-xs text-zinc-900 dark:text-zinc-400">
                  {errors.username}
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="example@youremail.com"
                  onChange={(event) =>
                    setAuthState({ ...authState, email: event.target.value })
                  }
                />
                <span className="text-xs text-zinc-900 dark:text-zinc-400">
                  {errors.email}
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="********"
                  onChange={(event) =>
                    setAuthState({ ...authState, password: event.target.value })
                  }
                />
                <span className="text-xs text-zinc-900 dark:text-zinc-400">
                  {errors.password}
                </span>
              </div>
              {/* <div className="mt-5 space-y-2">
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
              </div> */}

              <div>
                <Button className="w-full mt-5" disabled={loading}>
                  {loading ? "Processing..." : "Register"}
                </Button>
              </div>
              <div className="flex items-center justify-center mt-4 text-muted-foreground">
                <Link
                  href="/login"
                  className="text-sm cursor-pointer hover:underline"
                >
                  Already have an profile?{" "}
                  <span className="text-zinc-300">Log in</span>
                </Link>
              </div>

              <footer className="space-y-4 mt-6">
                <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                  Or continue with
                </p>

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

                <p className="text-muted-foreground text-xs text-center !mt-8">
                  By clicking on register, you agree to our Terms of Service and
                  Privacy Policy
                </p>
              </footer>
            </section>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default Register;
