"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

// This wraps the whole app in a session provider to get the session
// client side components can't have
// import { getServerSession } from "next-auth"; so we need to wrap the whole app in a session provider using next-auth/react

export function CustomProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
