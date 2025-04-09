import { Module } from '@nestjs/common';
import { PostDocument, PostSchema } from 'src/schemas/Post.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PostDocument.name, schema: PostSchema },
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostModule {}
