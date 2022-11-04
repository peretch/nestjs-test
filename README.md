# NestJS-test

Created just for testing how _NestJS_ works

## NestJS tools

- _Controllers_ - Route the request to a particular function **(\*Mandatory at least one)**
- _Services_ - Run some business logic
- _Modules_ - Groups code together **(\*Mandatory at least one)**
- _Pipes_ - Validate data contained in the request
- _Filters_ - Handles errors that occur during request handling
- _Guards_ - Make sure a user is authenticated
- _Interceptors_ - Adds extra logic to incoming requests or outgoing responses
- _Repositories_ - Access database

### Validation Pipes

#### Some interesting packages to understand

- `class-transformer` converts a JavaScript object into a class.
- `class-validator` provides decorators to add validations inside a DTO class

#### Flow

1. The request's body is converted into an instance of DTO Class (making use of `class-transformer`)
2. This DTO Class contains validation rules with the decorators provided by `class-validator`
3. A) The validation pipe will check if all validations are OK. If not, it will immediately send back an error response to whoever made the request.
4. B) If validation is OK, the body will be passed to the request handler (controller).

### Example usage

![NestJS basic flow](https://user-images.githubusercontent.com/44510623/195880686-f88aa55d-1647-49e4-a429-2280e0998376.jpg)

## Conventions

### Rules

- One class per file
- Class names should include the kind of thing we are creating
- The name of the class and the name of the files should always match up
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

## Useful commands

### Create module

```
nest generate module <module-name>
```

_This command will create a new directory inside `./src`, this directory will contain all elements (pipes, guards, controllers, etc) grouped._

### Create a controller (inside the module)

```
nest generate controller <module-name>/<controller-name> --flat
```

- _This command will generate inside your module one controller (`<controller-name>.controller.js`) and one test (`<controller-name>.controller.spec.js`)_
- _The `flat` option tells NestJS to avoid the creation of an extra folder called `controllers`. If your module contains just one controller, is good practice to use this option._
