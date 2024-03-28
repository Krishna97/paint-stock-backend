export enum Role {
  Painter = 'painter',
  Manager = 'manager',
  Viewer = 'viewer',
  Admin = 'admin',
}

type User = {
  id: number;
  userName: string;
  password: string;
  roles: Role[];
};

export interface IAuthenticate {
  readonly user: User;
  readonly token: string;
}
