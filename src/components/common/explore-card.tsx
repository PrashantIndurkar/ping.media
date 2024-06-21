import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ExploreCard = ({ user }: { user: UserType }) => {
  return (
    <Card className="hover:bg-neutral-50 dark:hover:bg-neutral-900 cursor-pointer group transition duration-150 ease-in-out">
      <CardHeader className="flex flex-row items-center justify-between">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile image"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button className="rounded-full">Follow</Button>
      </CardHeader>
      <CardContent className="-mt-2">
        <CardTitle className="group-hover:underline outline-offset-2 text-lg font-medium">
          {user.name}
        </CardTitle>
        <CardDescription className="w-1/2 md:w-3/4">
          Computer Engineering Student @ Universidade Potiguar
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ExploreCard;
