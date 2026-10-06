import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  exports: [CommentsService],
  providers: [CommentsService, CommentsResolver]
})
export class CommentsModule {}
