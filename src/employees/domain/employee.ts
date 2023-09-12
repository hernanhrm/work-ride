export interface Employee {
  ID: string;
  Name: string;
  Address: string;
  CreatedAt: string;
  UpdatedAt?: string;
}

export type Employees = Employee[];
