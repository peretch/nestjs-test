import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  // providers = Things that can be used as dependencies for other classes
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
