import { InputType, Field } from '@nestjs/graphql';
import { CreateSongLineInput } from './create-song-line.input';

@InputType()
export class CreateSongInput {
    @Field()
    title: string;
  
    @Field(() => [CreateSongLineInput])
    lines: CreateSongLineInput[];
  
    @Field()
    artistName: string;
}