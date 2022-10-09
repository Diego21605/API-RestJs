export class CreateUserDto {
  readonly email: string;
  password: string;
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
