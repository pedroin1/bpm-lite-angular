export enum ApprovalStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface Approval {
  id: number;
  processId: number;
  stepId: number;
  assignedTo: number;
  status: ApprovalStatus;
}
