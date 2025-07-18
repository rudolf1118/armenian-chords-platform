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
        create: { 
          name: input.artistName,
        },
      });
    
      const createdSong = await this.prisma.song.create({
        data: {
          title: input.title,
          artistId: artist.id,
          lines: {
            create: input.lines.map((line) => ({
              text: line.text,
              order: line.order,
              chords: {
                create: line.chords.map((chord) => ({
                  chord: chord.chord,
                  start: chord.start,
                  end: chord.end,
                })),
              },
            })),
          },
        },
        include: {
          artist: true,
          lines: {
            include: { chords: true },
          },
        },
      });
    
      return {
        ...createdSong,
        artistName: artist.name,
      };
    }
}
