import { Type } from "class-transformer";
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

export class CreateGradingDto {
  @IsNotEmpty()
  quiz_id: string;

  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  score: number;

  @IsArray()
  @IsNotEmpty()
  user_answers: string[];

  @IsArray()
  @IsNotEmpty()
  correct_answers: string[];

//   @IsDateString()
//   attempt_date: Date;
}
