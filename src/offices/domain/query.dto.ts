export interface Result {
  id: string;
  name: string;
  address?: string;
  createdAt: string;
  updatedAt?: string;
}

export type Results = Result[];
