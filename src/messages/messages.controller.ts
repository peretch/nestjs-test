import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('messages') // Class decorator
export class MessagesController {
  @Get() // method decorator
  listMessages() {
    return [];
  }

  @Post()
  createMessage(@Body() body: any) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return {
      id,
    };
  }
}
