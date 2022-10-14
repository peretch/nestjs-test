# NestJS-test

Created just for testing how _NestJS_ works

## NestJS tools

- _Controllers_ - Route the request to a particular function **(*Mandatory at least one)**
- _Services_ - Run some business logic
- _Modules_ - Groups code together **(*Mandatory at least one)**
- _Pipes_ - Validate data contained in the request
- _Filters_ - Handles errors that occur during request handling
- _Guards_ - Make sure a user is authenticated
- _Interceptors_ - Adds extra logic to incoming requests or outgoing responses
- _Repositories_ - Access database

### Example usage

![NestJS basic flow](https://user-images.githubusercontent.com/44510623/195880686-f88aa55d-1647-49e4-a429-2280e0998376.jpg)

## Conventions
### Rules
- One class per file
- Class names should include the kind of thing we are creating
- The name of class and name of files should always match up
- Filename template: `name.type_of_thing.ts`
### Naming examples
#### Main
- File: `main.ts`
- Function: `function bootstrap(){...}`
#### Controllers
- File: `app.controller.ts`
- Class: `AppController {...}`
#### Modules
- File: `app.module.ts`
- Class: `AppModule {...}`

