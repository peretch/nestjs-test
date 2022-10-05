import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Groups controllers to be used
@Module({
  controllers: [AppController],
})
export class AppModule {}
