export interface Result {
  id: string;
  resourcePermissionId: string;
  roleId: string;
  createdAt: string;
  updatedAt?: string;
}

export type Results = Result[];
