export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface IFilter {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface IUserState {
  users: IUser[];
  loading: boolean;
  error: string | null;
  filters: IFilter;
}

export type FilterNames = 'name' | 'username' | 'email' | 'phone';
