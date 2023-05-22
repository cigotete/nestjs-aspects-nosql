import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { AuthorDto } from './create-author.dto';
import { FormatDto } from './create-format.dto';
export class CreateBookDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  idremote: number;

  @IsString()
  @MinLength(1)
  title: string;
  /*
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AuthorDto)
  authors: AuthorDto[];

  @IsString({ each: true })
  translators: string[];

  @IsString({ each: true })
  subjects: string[];

  @IsString({ each: true })
  bookshelves: string[];

  @IsString({ each: true })
  languages: string[];

  @IsBoolean()
  copyright: boolean;

  @IsString()
  media_type: string;

  @ValidateNested({ each: true })
  @Type(() => FormatDto)
  formats: FormatDto[];
  */
}
