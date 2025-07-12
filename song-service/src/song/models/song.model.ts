import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Song {
    @Field(() => Int)
    id: number;
    @Field()
    title: string;
    @Field()
    chords: string;
    @Field(() => Int)
    artistId: number;
    @Field(() => String)
    artistName: string;
}