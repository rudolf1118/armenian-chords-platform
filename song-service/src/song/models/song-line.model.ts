import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SongChordLine } from './song-chord-line.model';

@ObjectType()
export class SongLine {
  @Field(() => Int)
  id: number;

  @Field()
  text: string;

  @Field(() => Int)
  order: number;

  @Field(() => [SongChordLine])
  chords: SongChordLine[];
}