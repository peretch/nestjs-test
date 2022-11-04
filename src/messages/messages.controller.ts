import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages') // Class decorator
export class MessagesController {
  @Get() // method decorator
  listMessages() {
    return [];
  }

  // ? This pipe validator is working because of the usage of the following configurations:
  // "emitDecoratorMetadata": true
  // "experimentalDecorators": true
  // This configuration allows TypeScript to concat some metadata to javascript
  // __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return {
      id,
    };
  }
}
