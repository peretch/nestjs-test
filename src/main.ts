import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

// This decorator is telling nest that we are trying to create a class
// that is gonna serve as a controller inside our application
// This class is gonna handle and route incoming requests
@Controller()
class AppController {
  // GET decorator allows us to create route handlers
  // to respond incoming requests that have the HTTP method of GET
  @Get()
  getRootRoute() {
    return 'Hi there!';
  }
}

// Groups controllers to be used
@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3030);
}
bootstrap();
