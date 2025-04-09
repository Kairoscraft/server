import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://moibaldenegroheadsapp:jvm6Y2uKeNNlpyPp@cluster0.qypia1h.mongodb.net/',
    ),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
