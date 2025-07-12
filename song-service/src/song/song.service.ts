import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSongInput } from './dto/create-song.input';

@Injectable()
export class SongService {
    constructor(private prisma: PrismaService) {}
    
    async getSongs() {
        return this.prisma.song.findMany({
            include: { artist: true }
        });
    }
    
    async createSong(input: CreateSongInput) {
        const artist = await this.prisma.artist.upsert({
          where: { name: input.artistName },
          update: {},
          create: { name: input.artistName },
        });
        console.log("Artist upserted:", artist);
    
        const created = await this.prisma.song.create({
          data: {
            title: input.title,
            chords: input.chords,
            artistId: artist.id,
          },
          include: { artist: true },
        });
        return {
          ...created,
          artistName: artist.name
        }
      }
}
