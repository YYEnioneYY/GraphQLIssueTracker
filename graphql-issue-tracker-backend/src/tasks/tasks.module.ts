import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';

import { UsersModule } from 'src/users/users.module';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  imports: [UsersModule, CommentsModule],
  providers: [TasksService, TasksResolver]
})
export class TasksModule {}
