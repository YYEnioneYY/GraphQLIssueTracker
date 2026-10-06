import {
  Field,
  ID,
  ObjectType,
} from '@nestjs/graphql';

import { User } from 'src/users/models/user.model';
import { Comment } from 'src/comments/models/comment.model';

@ObjectType()
export class Task {
  @Field(() => ID)
  id!: number;

  @Field()
  title!: string;

  @Field()
  status!: string;

  assigneeId?: number;

  @Field(() => User, {
    nullable: true,
  })
  assignee?: User;

  @Field(() => [Comment])
  comments?: Comment[];
}