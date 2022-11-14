import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'The email of the user' })
  readonly email: string;
  @IsString() @IsNotEmpty() password: string;
  readonly name: string;
  readonly lastname?: string;
  readonly identification?: string;
  readonly picture?: string;
  readonly phone?: string;
  readonly gerder?: string;
  readonly birthday?: string;
  readonly country?: string;
  readonly state?: string;
  readonly city?: string;
  readonly address?: string;
  readonly active?: boolean;
}
