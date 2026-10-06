import {
  Args,
  Int,
  Query,
  Resolver,
  Mutation,
  Parent,
  ResolveField,
} from '@nestjs/graphql';

import { Task } from './models/task.model';
import { TasksService } from './tasks.service';

import { User } from '../users/models/user.model';
import { UsersService } from '../users/users.service';

import { Comment } from 'src/comments/models/comment.model';
import { CommentsService } from 'src/comments/comments.service';

@Resolver(() => Task)
export class TasksResolver {
  constructor(
    private readonly tasksService: TasksService,
    private readonly usersService: UsersService,
    private readonly commentsService: CommentsService,
  ) {}

  @Query(() => [Task])
  tasks(): Task[] {
    return this.tasksService.findAll();
  }

  @Query(() => Task, { nullable: true })
  task(
    @Args('id', { type: () => Int })
    id: number,
  ): Task | undefined {
    return this.tasksService.findOne(id);
  }

  @Mutation(() => Task)
  createTask(
    @Args('title')
    title: string,
  ): Task {
    return this.tasksService.create(title);
  }

  @ResolveField(() => User,
    {
      nullable: true,
    },
  )
  assignee(
    @Parent()
    task: Task,
  ): User | undefined {
    if (!task.assigneeId) {
      return undefined;
    }

    return this.usersService.findOne(
      task.assigneeId,
    );
  }

  @ResolveField(() => [Comment])
  comments(
    @Parent()
    task: Task,
  ): Comment[] {
    return this.commentsService.findByTaskId(task.id);
  }
}