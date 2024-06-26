"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../../ui/use-toast";

export function AlertDeletePost({
  postId,
  noRedirect,
}: {
  postId: string;
  noRedirect?: boolean;
}) {
  const { toast } = useToast();
  const router = useRouter();
  const deletePost = () => {
    axios.delete(`/api/post/${postId}`).then((res) => {
      const response = res.data;
      if (response.status == 200) {
        toast({
          title: "Post Deleted",
          description: response.message,
          className: "bg-red-500 text-white",
        });
        noRedirect && router.push("/feed");
        router.refresh();
      }
    });
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="text-sm w-fit">Delete</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to Remove?
            </AlertDialogTitle>
            <AlertDialogDescription>
              It will be permanently removed and cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={deletePost}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Yes, Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
