"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner";

const userRegisterSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const Register = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof userRegisterSchema>>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof userRegisterSchema>) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    });
    const result = await response.json();

    if (result.status === 201) {
      router.push("/login");
      toast.success("You successfully registered!");
    } else if (result.status === 400) {
      toast.error(result.message);
    }
  };
  return (
    <div className="grid w-full h-screen grow items-center px-4 sm:justify-center">
      <Form {...form}>
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Prashant Indurkar"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                Join Ping <IoMdArrowForward className="ml-2 text-xl" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border border-muted-zinc-200 after:h-px after:flex-1 after:bg-border border-muted-zinc-200">
              Or continue with
            </p>

            <Button
              size="lg"
              type="button"
              className="cursor-not-allowed w-full"
            >
              <FcGoogle className="mr-2 size-4" />
              Google
            </Button>

            <p className="text-muted-foreground text-xs text-center !mt-8">
              By clicking "Join Ping media you agree to our Code of Conduct,
              Terms of Service and Privacy Policy.
            </p>
            <p className="text-muted-foreground text-sm text-center !mt-8">
              Already have a profile? <Link href="/login">Login</Link>
            </p>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
};

export default Register;
