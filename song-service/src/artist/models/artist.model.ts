import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Song } from '../../song/models/song.model';

@ObjectType()
export class Artist {
    @Field(() => Int)
    id: number;

    @Field(() => [Song], { defaultValue: [] })
    songs: Song[];

    @Field()
    name: string;

    @Field({ nullable: true })
    slug?: string;

    @Field({ nullable: true })
    bio?: string;

    @Field({ nullable: true })
    country?: string;

    @Field({ nullable: true })
    birthdate?: Date;

    @Field({ nullable: true })
    imageUrl?: string;

    @Field({defaultValue: new Date()})
    createdAt?: Date;

    @Field( { defaultValue: new Date()})
    updatedAt?: Date;
}