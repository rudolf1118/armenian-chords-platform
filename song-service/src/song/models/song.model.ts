import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Artist } from '../../artist/models/artist.model';
import { SongLine } from './song-line.model';

@ObjectType()
export class Song {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int)
  artistId: number;

  @Field(() => Artist)
  artist: Artist;

  @Field(() => [SongLine])
  lines: SongLine[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}