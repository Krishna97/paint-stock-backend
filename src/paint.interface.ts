export enum Status {
  available = 'available',
  runningLow = 'runningLow',
  outOfStock = 'outOfStock'
}

type Paint = {
  id: number;
  color: string;
  status: Status;
};

// export interface IAuthenticate {
//   readonly user: User;
//   readonly token: string;
// }
