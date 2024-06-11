type AuthStateType = {
  email?: string;
  name?: string;
  username?: string;
  password?: string;
  password_confirmation?: string;
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
  user_id: number;
  content: string;
  image?: string;
  created_at: string;
  user: UserType;
};

type UserType = {
  id: number;
  username: string;
  name: string;
};
