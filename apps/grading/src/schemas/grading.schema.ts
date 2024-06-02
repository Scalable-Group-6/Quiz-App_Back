import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Grading extends AbstractDocument {

  @Prop({ required: true })
  quiz_id: string;

  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  score: number; // duration in seconds
}

export const GradingSchema = SchemaFactory.createForClass(Grading);
