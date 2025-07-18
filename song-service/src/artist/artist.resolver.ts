import { Resolver } from '@nestjs/graphql';
import { Mutation, Args, Query } from '@nestjs/graphql';
import { Artist } from '../artist/models/artist.model';
import { ArtistService } from '../artist/artist.service';
import { CreateArtistInput } from './dto/create-artist.input';

@Resolver(() => Artist)
export class ArtistResolver {
    constructor(private artistService: ArtistService) {}

    @Query(() => [Artist])
    getArtists() {
        return this.artistService.getArtists();
    }
x
    @Mutation(() => Artist)
    createArtist(@Args('createArtistInput') createSongInput: CreateArtistInput) {
        return this.artistService.createArtist(createSongInput);
    }
}
