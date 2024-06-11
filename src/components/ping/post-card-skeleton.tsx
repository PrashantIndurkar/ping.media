import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";
export default function PostCardSkeleton() {
  return (
    <ul>
      {[...Array(10)].map((movie, index) => (
        <Card className="shadow-none rounded-none border-b border-x-0 border-t-0 dark:hover:bg-zinc-900/50 hover:bg-zinc-50 border-zinc-200 dark:border-zinc-700">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center justify-between w-full gap-x-2">
              <div className="flex items-center flex-row gap-x-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <CardTitle className="text-md font-medium space-y-2">
                  <Skeleton className="h-3 w-48" />
                  <Skeleton className="h-3 w-20" />
                </CardTitle>
              </div>
              <Skeleton className="h-3 w-3" />
            </div>
          </CardHeader>
          <CardContent className="-mt-2 px-[4.5rem]">
            <Skeleton className="h-52 w-full" />
          </CardContent>
          <CardFooter className="-mt-2 px-[4.5rem] flex items-center justify-between">
            <div className="flex items-center justify-between gap-x-10">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-between gap-x-10">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-5 w-5" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </ul>
  );
}
