export enum UserRoleDTO {
  APPROVER = 'APPROVER',
  REQUESTER = 'REQUESTER',
  ADMIN = 'ADMIN',
}

export interface UserDTO {
  id: number;
  name: string;
  role: UserRoleDTO;
}
