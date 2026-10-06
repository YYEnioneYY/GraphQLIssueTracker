import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Module({
  exports: [CommentsService],
  providers: [CommentsService]
})
export class CommentsModule {}
