import { IsString } from 'class-validator';

export class FormatDto {
  @IsString()
  type: string;

  @IsString()
  url: string;
}
