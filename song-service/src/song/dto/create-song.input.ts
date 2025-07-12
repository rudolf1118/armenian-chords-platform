import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSongInput {
    @Field()
    title: string;
  
    @Field()
    chords: string;
  
    @Field()
    artistName: string;
}