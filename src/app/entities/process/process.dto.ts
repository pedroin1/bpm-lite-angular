export enum ProcessStatusDTO {
  IN_APPROVAL = 'IN_APPROVAL',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  FINISHED = 'FINISHED',
}

export interface ProcessDTO {
  id: number;
  name: string;
  description: string;
  status: ProcessStatusDTO;
  sla: number;
  currentStep: number;
  createdAt: Date;
  responsibleId: number;
}
