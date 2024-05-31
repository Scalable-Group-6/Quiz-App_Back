import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Quiz extends AbstractDocument {
  @Prop()
  name: string;
  @Prop()
  subject: string;
  @Prop()
  creator: string;

}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
