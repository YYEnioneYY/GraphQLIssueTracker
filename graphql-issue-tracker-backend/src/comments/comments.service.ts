import { Injectable } from '@nestjs/common';
import { Comment } from './models/comment.model';

@Injectable()
export class CommentsService {
  private comments: Comment[] = [
    {
      id: 1,
      taskId: 1,
      text: 'Какой-то текст',
    },
    {
      id: 2,
      taskId: 1,
      text: 'Ещё какой-то текст',
    },
  ];

  findByTaskId(taskId: number): Comment[] {
    return this.comments.filter(
      (comment) => comment.taskId === taskId,
    );
  }

  findAll(): Comment[] {
    return this.comments;
  }
}