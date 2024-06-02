import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


// class Participant{
//   @Prop({required: true})
//   user_id: string;
//   @Prop({required: true})
//   score: number;
// }
class Question {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  question: string;

  @Prop()
  options?: string[];

  @Prop({ required: true })
  answer: string;
}


@Schema({ versionKey: false })
export class Quiz extends AbstractDocument {

  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  duration: number; // duration in seconds

  @Prop({ required: true })
  creator_id: string;

  // @Prop({ type: [Participant], default: [] })
  // participants?: Participant[];

  @Prop()
  start_time?: Date;

  @Prop()
  end_time?: Date;

  @Prop({ type: [Question], required: true })
  questions: Question[];

}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
