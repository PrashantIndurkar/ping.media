"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IoMdArrowForward } from "react-icons/io";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const userLoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof userLoginSchema>>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof userLoginSchema>) => {
    const loginData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/feed",
      redirect: true,
    });

    if (loginData?.error) {
      toast.error("Invalid Credentials!");
    } else {
      router.push("/feed");
      toast.success("You successfully logged in!");
    }
  };

  const signInWithGoogle = async () => {
    signIn("google", {
      callbackUrl: "/feed",
      redirect: true,
    });
  };

  return (
    <div className="">
      <Form {...form}>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center  py-4 !text-5xl font-normal font-instrumentSerif">
              Log in
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              disabled={isLoading}
              size="lg"
              variant="outline"
              type="button"
              className="w-full rounded-full text-lg"
              onClick={signInWithGoogle}
            >
              {isLoading ? (
                <LoaderCircle className="mr-2 size-4 animate-spin" />
              ) : (
                <FcGoogle className="mr-2 size-5" />
              )}
              Google
            </Button>
            <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border border-muted-zinc-200 after:h-px after:flex-1 after:bg-border border-muted-zinc-200">
              or continue with email
            </p>
          </CardFooter>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@youremail.com"
                        {...field}
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
                      <Input
                        type="password"
                        placeholder="At least 8 characters."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full text-xl font-semibold"
              >
                Login <IoMdArrowForward className="ml-2 text-xl" />
              </Button>
            </form>

            <p className="text-muted-foreground text-sm text-center !mt-8">
              Don’t have a profile?{" "}
              <Link
                className="font-bold hover:underline hover:text-zinc-200"
                href="/register"
              >
                Join Ping
              </Link>
            </p>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
};

export default Login;
