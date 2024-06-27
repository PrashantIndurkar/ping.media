import {
  User,
  Post,
  PostLike,
  Comment,
  Bookmark,
  CommentLike,
} from "@prisma/client";

export type PostType = Post & {
  likes: PostLike;
  comments: Comment;
  bookmark: Bookmark;
  author: User;
};

export type PostLikeType = PostLike & {
  user: User;
};

// ===== old types =====

type UserType = {
  id: number;
  name: string;
  email: string;
  image?: string;
};

type CommentType = {
  id: number;
  authorId: number;
  postId: number;
  content: string;
  createdAt: string;
  author: UserType;
};

type ShowUserType = {
  name: string;
  id: string;
  email: string;
  username: string;
  image: string;
  Post: Array<PostType> | [];
  Comment: Array<CommentType> | [];
  created_at: string;
};

type NotificationType = {
  id: number;
  userId: number;
  toUser_id: number;
  content: string;
  created_at: string;
  user: UserType;
};

// type PostLikeType = {
//   id: number;
//   post_id: number;
//   userId: number;
// };

type LikeType = {
  post_id: string;
  toUserId: string;
  status: string;
};
