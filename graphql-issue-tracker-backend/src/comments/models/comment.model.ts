import {
  Field,
  ID,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => ID)
  id!: number;

  taskId!: number;

  @Field()
  text!: string;
}