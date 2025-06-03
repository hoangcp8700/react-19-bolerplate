export interface AuthProvider<T = unknown, U = unknown> {
  initialize(): Promise<void>;
  signIn(options?: T): Promise<U>;
  signOut(): Promise<void>;
}

export type User = {
  id: number;
  email: string;
  fullName: string;
  mobile: string;
  roleId: number;
  roleName: string;
  statusId: number;
  statusName: string;
  token: string;
  userKey: string;
  username: string;
};
