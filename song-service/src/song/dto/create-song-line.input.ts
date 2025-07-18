import { InputType, Field } from '@nestjs/graphql';
import { CreateChordOnLineInput } from './create-song-chord-line.input';

@InputType()
export class CreateSongLineInput {
  @Field()
  text: string;

  @Field()
  order: number;

  @Field(() => [CreateChordOnLineInput])
  chords: CreateChordOnLineInput[];
}