import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages') // Class decorator
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get() // method decorator
  listMessages() {
    return this.messagesService.findAll();
  }

  // ? This pipe validator is working because of the usage of the following configurations:
  // "emitDecoratorMetadata": true
  // "experimentalDecorators": true
  // This configuration allows TypeScript to concat some metadata to javascript
  // __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
