import { Resolver } from '@nestjs/graphql';
import { Song } from './models/song.model';
import { SongService } from './song.service';
import { Mutation, Args, Query } from '@nestjs/graphql';
import { CreateSongInput } from './dto/create-song.input';

@Resolver(() => Song)
export class SongResolver {
    constructor(private songService: SongService) {}

    @Query(() => [Song])
    getSongs() {
        return this.songService.getSongs();
    }
x
    @Mutation(() => Song)
    createSong(@Args('createSongInput') createSongInput: CreateSongInput) {
        return this.songService.createSong(createSongInput);
    }
}
