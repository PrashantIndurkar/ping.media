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
import { useRouter } from "next/navigation";
import { DeletePostSchema } from "@/validations/postSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { deletePost } from "@/services/api/post/delete-post";
import Error from "@/components/error";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";

export function AlertDeletePost({ postId }: { postId: string }) {
  const router = useRouter();

  const form = useForm<z.infer<typeof DeletePostSchema>>({
    resolver: zodResolver(DeletePostSchema),
    defaultValues: {
      id: postId,
    },
  });

  const onSubmit = async (data: z.infer<typeof DeletePostSchema>) => {
    const res = await deletePost(data);
    if (res) {
      toast.error(<Error res={res} />);
    } else {
      toast.success("Post deleted successfully!");
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="text-sm text-center w-full">Delete</button>
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <AlertDialogAction
                  type="submit"
                  asChild
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  <button type="submit">Yes, Remove</button>
                </AlertDialogAction>
              </form>
            </Form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
