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

// class ParticipantDto {
//   @IsNotEmpty()
//   user_id: string;

//   @IsNotEmpty()
//   @IsNumberString()
//   score: number;
// }

class QuestionDto {
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  question: string;

  @IsOptional()
  options?: string[];

  @IsNotEmpty()
  answer: string;
}

export class CreateQuizDto {

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  duration: number;

  @IsNotEmpty()
  creator_id: string;

  // @IsOptional()
  // @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => ParticipantDto)
  // participants?: ParticipantDto[];

  @IsOptional()
  @IsDateString()
  start_time?: Date;

  @IsOptional()
  @IsDateString()
  end_time?: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions: QuestionDto[];
}
