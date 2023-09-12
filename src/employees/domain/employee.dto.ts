export interface Employee {
  id: string;
  name: string;
  address?: string;
  createdAt: string;
  updatedAt?: string;
}

export type Employees = Employee[];
