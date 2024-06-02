import { IsNotEmpty } from "class-validator";

export class AddParticipantDto {
  @IsNotEmpty()
  user_id: string;
  @IsNotEmpty()
  score: number;
}
