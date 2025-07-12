import { Module } from '@nestjs/common';
import { SongResolver } from './song.resolver';
import { SongService } from './song.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [SongResolver, SongService, PrismaService]
})
export class SongModule {}
