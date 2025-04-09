// post.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class PostDocument {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: [{ type: String }] })
  likes: string[];

  @Prop({ type: [{ type: String }] })
  comments: string[];
}

export const PostSchema = SchemaFactory.createForClass(PostDocument);
