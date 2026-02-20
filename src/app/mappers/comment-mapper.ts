import { Comment } from '@entities/comment/comment';
import { CommentDTO } from '@entities/comment/comment.dto';
import { formatDate } from '@utils/date-utils';

export const commentMapper = (commentDTO: CommentDTO): Comment => {
  return {
    id: commentDTO.id,
    processId: commentDTO.processId,
    authorId: commentDTO.authorId,
    message: commentDTO.message,
    createdAt: formatDate(commentDTO.createdAt),
  };
};

export const commentMapperArray = (commentDTOs: CommentDTO[]): Comment[] => {
  return commentDTOs.map(commentMapper);
};
