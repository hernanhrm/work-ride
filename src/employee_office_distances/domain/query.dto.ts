export interface Result {
  id: string;
  employeeId: string;
  officeId: string;
  kilometerDistance: number;
  createdAt: string;
  updatedAt?: string;
}

export type Results = Result[];
