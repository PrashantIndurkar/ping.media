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
  userId: number;
  content: string;
  image?: string;
  created_at: string;
  comment_count: number;
  likes_count: number;
  user: UserType;
  Likes: Array<PostLikeType> | [];
};

type UserType = {
  id: number;
  username: string;
  name: string;
};

type CommentType = {
  id: number;
  userId: number;
  post_id: number;
  content: string;
  created_at: string;
  user: UserType;
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
