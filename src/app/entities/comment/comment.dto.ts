export interface CommentDTO {
  id: number;
  processId: number;
  authorId: number;
  message: string;
  createdAt: Date;
}
