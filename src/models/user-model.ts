export interface UserModel {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface CreateUserResponse {
  id: number;
  token: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  token: string;
}
