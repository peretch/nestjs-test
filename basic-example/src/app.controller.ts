import { Controller, Get } from '@nestjs/common';

// This decorator is telling nest that we are trying to create a class
// that is gonna serve as a controller inside our application
// This class is gonna handle and route incoming requests
@Controller('/app')
export class AppController {
  // GET decorator allows us to create route handlers
  // to respond incoming requests that have the HTTP method of GET
  @Get('/hi')
  getRootRoute() {
    return 'Hi there!';
  }
  
  @Get('/bye')
  getByeThere() {
    return 'bye there!';
  }
}
