export enum Role {
  Painter = 'painter',
  Manager = 'manager',
  Viewer = 'viewer',
  Admin = 'admin',
}

type User = {
  id: string;
  userName: string;
  password: string;
  role: Role;
};

export interface IAuthenticate {
  readonly user: User;
  readonly token: string;
}
