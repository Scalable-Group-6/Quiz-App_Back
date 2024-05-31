import { IsNotEmpty, IsString } from "class-validator";

export class CreateQuizRequest{
    @IsString()
    @IsNotEmpty()
    name: string;
    subject: string;
    creator: string;

}