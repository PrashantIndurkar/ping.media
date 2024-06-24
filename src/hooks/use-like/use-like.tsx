import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLike = () => {
  const queryClient = useQueryClient();
  // need to write 4 functions to like and dislike with mutation respectively

  // Like function
  async function OptimisticAddLike() {}

  //   const handleLike = useMutation(
  //     mutationFn: likeService,
  //   );
};
