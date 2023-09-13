export interface Result {
  id: string;
  name: string;
  email: string;
  password: string;
  roleId: string;
  createdAt: string;
  updatedAt?: string;
}

export type Results = Result[];
