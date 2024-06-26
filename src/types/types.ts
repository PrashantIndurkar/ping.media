type AuthStateType = {
  email?: string;
  name?: string;
  username?: string;
  password?: string;
  // password_confirmation?: string;
};

type AuthErrorType = {
  email?: string;
  name?: string;
  username?: string;
  password?: string;
};

type PostErrorType = {
  content?: string;
};

type PostType = {
  id: number;
  authorId: number;
  content: string;
  imageUrl?: string;
  createdAt: string;
  author: UserType;
  likes: Array<PostLikeType> | [];
  comments: Array<CommentType> | [];
  bookmarks: Array<BookmarkType> | [];
};

type BookmarkType = {
  user: UserType;
  post: PostType;
};

type UserType = {
  id: number;
  name: string;
  email: string;
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

type PostLikeType = {
  id: number;
  post_id: number;
  userId: number;
};

type LikeType = {
  post_id: string;
  toUserId: string;
  status: string;
};
