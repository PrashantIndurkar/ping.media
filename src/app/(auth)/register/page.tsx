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
import { FaGithub, FaGoogle } from "react-icons/fa";

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
    <div className="grid w-full h-screen grow items-center px-4 sm:justify-center">
      <form onSubmit={onSubmit}>
        <Card className="w-full sm:w-96">
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>
              Welcome! Please fill in the details to get started.
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
              <div className="mt-5 space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Type your name.."
                  autoFocus
                  autoComplete="name"
                  onChange={(event) =>
                    setAuthState({ ...authState, name: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">{errors?.name}</span>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  autoComplete="username"
                  placeholder="Type your unique username"
                  onChange={(event) =>
                    setAuthState({ ...authState, username: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">
                  {errors.username}
                </span>
              </div>
              <div className="mt-5 space-y-2">
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
                    setAuthState({ ...authState, password: event.target.value })
                  }
                />
                <span className="text-red-400 font-bold">
                  {errors.password}
                </span>
              </div>
              <div className="mt-5 space-y-2">
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

              <div>
                <Button className="w-full mt-5" disabled={loading}>
                  {loading ? "Processing..." : "Continue"}
                </Button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <Link
                  href="/login"
                  className="text-sm cursor-pointer hover:underline"
                >
                  Don't have an account? Log in
                </Link>
              </div>
            </section>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default Register;
