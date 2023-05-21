import { IsNumber, IsString } from 'class-validator';

export class AuthorDto {
  @IsString()
  name: string;

  @IsNumber()
  birth_year: number;

  @IsNumber()
  death_year: number;
}
