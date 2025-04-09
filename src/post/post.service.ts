// posts.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from 'src/dto/createPost.dto copy';
import { PostDocument } from 'src/schemas/Post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostDocument.name)
    private readonly postModel: Model<PostDocument>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<PostDocument> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(): Promise<PostDocument[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string) {
    return this.postModel.findById(id).exec();
  }

  async update(id: string, updatePostDto: any) {
    return this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true });
  }

  async remove(id: string) {
    return this.postModel.findByIdAndDelete(id);
  }
}
