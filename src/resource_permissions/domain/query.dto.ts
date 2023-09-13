export interface Result {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt?: string;
}

export type Results = Result[];
