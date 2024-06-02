import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class QuestionDto {
  @IsString()
  type: string;

  @IsString()
  question: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  options?: string[];

  @IsString()
  answer: string;
}

export class UpdateQuestionsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions: QuestionDto[];
}
