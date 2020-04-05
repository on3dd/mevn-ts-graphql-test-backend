export interface IStatus {
  status: string;
  message?: string;
}

export class Status implements IStatus {
  status: string;
  message?: string;

  constructor(status: string, message?: string) {
    this.status = status;
    this.message = message;
  }
}