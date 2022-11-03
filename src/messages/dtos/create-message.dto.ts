import { IsString } from 'class-validator';

// ? DTO = Data Transfer Object
// ? DTO are used as "contracts" that describes expected data
export class CreateMessageDto {
  @IsString()
  content: string;
}
