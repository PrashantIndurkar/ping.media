import { Logo } from "@/components/logo";
import { MobileSidebar } from "@/components/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dot } from "lucide-react";
import EmptyCommentsLike from "@/components/comment/empty-comments-like";
import Comments from "@/components/comment/comments";
import CommentFilter from "@/components/comment/comment-filter";
import { getSinglePost } from "@/services/api/getSinglePost";
import { PostCard } from "@/components/post/post-card";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/options";
import { CommentType } from "@/types/types";

const ShowPost = async ({ params }: { params: { id: string } }) => {
  const posts = await getSinglePost(params.id);
  const session = await getAuthSession();

  console.log("posts", posts);
  return (
    <div>
      <header className="h-14 border-b sticky top-0 left-0 right-0 px-4 dark:bg-zinc-900 z-10 flex items-center bg-white justify-between w-full ">
        <div className="flex items-center justify-betweens md:hidden">
          <MobileSidebar />
          <Logo />
        </div>
        {/* <HeaderTitle title={`Post by ${posts.author.name}`} /> */}
      </header>
      <PostCard posts={[posts]} user={session?.user ?? null} />

      <Tabs defaultValue="comments" className="w-full border-none">
        <TabsList className="flex flex-wrap gap-2 bg-transparent rounded-none border-t-0 border-b gap-x-12">
          <TabsTrigger value="comments" className="text-xs">
            COMMENTS <Dot />{" "}
            {/* <span className="text-xs">
              {posts.comments?.length > 0 ? posts.Comment?.length : 0}
            </span> */}
          </TabsTrigger>
          <TabsTrigger value="likes" className="text-xs">
            LIKES <Dot /> <span className="text-xs">3</span>
          </TabsTrigger>
        </TabsList>
        <section className="px-5 ">
          <TabsContent value="comments">
            <CommentFilter />
            {/* {posts.Comment && posts.Comment?.length > 0 ? (
              <>
                {posts.Comment.map((comment: CommentType) => {
                  return <Comments key={comment.id} comment={comment} />;
                })}
                <div className="flex justify-center my-12">
                  <p className="text-xs text-zinc-500">
                    It looks like you've reached the end.
                  </p>
                </div>
              </>
            ) : (
              <EmptyCommentsLike />
            )} */}
          </TabsContent>
          <TabsContent value="likes">
            <EmptyCommentsLike />
          </TabsContent>
        </section>
      </Tabs>
    </div>
  );
};

export default ShowPost;
