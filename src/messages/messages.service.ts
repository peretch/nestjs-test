import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {
    // ! WRONG WAY
    // ! NEVER DO THIS ON REAL APPS, use Dependency Injections instead
    // this.messagesRepo = new MessagesRepository();
    //// ------------------------////
    // ? BETTER WAY
    // ? We create an interface with all existent methods in MessagesService
    // ? By doing this, now we don't have anymore the direct dependency
    // ? This means we are OK with **Inversion of control principle** (Classes should not create instances of its dependencies)
    //    interface Service {
    //      findOne(id: string);
    //      findAll();
    //      create(content: string)
    //    }
    //// ------------------------////
    // * DEFINITIVE WAY
    // * Here we make use of a NEST DI (dependency injection) Container
    // * It will create inside the container all the required dependencies (services, repos, etc)
    // * By doing this, we will be able to instance this class without worrying about instantiating dependencies
    // * For doing this, we make use of the @injectable decorator
    //// ------------------------////
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
