import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SongChordLine {
  @Field(() => Int)
  id: number;

  @Field()
  chord: string;

  @Field(() => Int)
  start: number;

  @Field(() => Int)
  end: number;
}