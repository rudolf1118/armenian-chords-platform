import { InputType, Field } from '@nestjs/graphql';
import { CreateSongInput } from '../../song/dto/create-song.input';
import { ArtistType } from '../types/index';

@InputType()
export class CreateArtistInput {
    @Field()
    name: string;

    @Field(() => String)
    type: ArtistType;

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

}