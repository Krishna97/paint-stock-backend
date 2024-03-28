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