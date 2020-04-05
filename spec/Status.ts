export interface IStatus {
  status: string
}

export class Status implements IStatus {
  status: string;

  constructor(status: string) {
    this.status = status;
  }
}