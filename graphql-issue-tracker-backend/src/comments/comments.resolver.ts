import {
  Parent,
  ResolveField,
  Resolver,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';

import { Comment } from './models/comment.model';
import { CommentsService } from './comments.service';

import { User } from '../users/models/user.model';
import { UsersService } from '../users/users.service';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly commentsService: CommentsService,
  ) {}

  @ResolveField(() => User,
    {
      nullable: true,
    },
  )
  author(
    @Parent()
    comment: Comment,
  ): User | undefined {
    if (!comment.authorId) {
      return undefined;
    }

    return this.usersService.findOne(
      comment.authorId,
    );
  }

  @Mutation(() => Comment)
  createComment(
    @Args('taskId', { type: () => Int })
    taskId: number,

    @Args('authorId', { type: () => Int })
    authorId: number,

    @Args('text')
    text: string,    
  ): Comment {
    return this.commentsService.create(
      taskId,
      authorId,
      text,
    );
  }
}