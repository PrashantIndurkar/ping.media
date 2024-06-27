import { getAuthSession } from "@/app/api/auth/[...nextauth]/options";

export const getUserId = async () => {
  const user = await getAuthSession();

  const userId = user?.user?.id;
  if (!userId) {
    throw new Error("You must be signed in to use this feature");
  }
  return userId;
};
