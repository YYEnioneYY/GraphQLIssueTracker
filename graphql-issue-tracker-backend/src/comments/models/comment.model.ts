import {
  Field,
  ID,
  ObjectType,
} from '@nestjs/graphql';

import { User } from 'src/users/models/user.model';

@ObjectType()
export class Comment {
  @Field(() => ID)
  id!: number;

  taskId!: number;

  @Field()
  text!: string;

  authorId?: number;

  @Field(() => User, {
    nullable: true,
  })
  author?: User;
}