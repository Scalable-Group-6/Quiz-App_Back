import { IsOptional, IsString, IsNumber, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// class ParticipantDto {
//   @IsString()
//   @IsOptional()
//   user_id?: string;

//   @IsNumber()
//   @IsOptional()
//   score?: number;
// }

class QuestionDto {
  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  question?: string;

  @IsArray()
  @IsOptional()
  options?: string[];

  @IsString()
  @IsOptional()
  answer?: string;
}

export class UpdateQuizDto {
  @IsString()
  @IsOptional()
  subject?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  duration?: number;

  @IsString()
  @IsOptional()
  creator_id?: string;

  // @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => ParticipantDto)
  // @IsOptional()
  // participants?: ParticipantDto[];

  @IsDateString()
  @IsOptional()
  start_time?: Date;

  @IsDateString()
  @IsOptional()
  end_time?: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  @IsOptional()
  questions?: QuestionDto[];
}
