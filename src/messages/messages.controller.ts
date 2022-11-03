import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages') // Class decorator
export class MessagesController {
  @Get() // method decorator
  listMessages() {
    return [];
  }

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
