import ThemeToggleBtn from "@/components/common/ThemeToggleBtn";
import { Button } from "@/components/ui/button";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Home() {
  // TODO why need to pass authOptions here?
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Button>Login</Button>
      <ThemeToggleBtn />
      {session && JSON.stringify(session)}
    </div>
  );
}
