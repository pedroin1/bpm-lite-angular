export enum ApprovalStatusDTO {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface ApprovalDTO {
  id: number;
  processId: number;
  stepId: number;
  assignedTo: number;
  status: ApprovalStatusDTO;
}
