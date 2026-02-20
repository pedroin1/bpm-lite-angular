export interface Process {
  id: number;
  name: string;
  description: string;
  status: string;
  sla: number;
  currentStep: number;
  createdAt: string;
  responsibleId: number;
}
