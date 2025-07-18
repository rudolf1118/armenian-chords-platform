import { Module } from '@nestjs/common';
import { ArtistResolver } from './artist.resolver'
import { ArtistService } from './artist.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ArtistResolver, ArtistService, PrismaService]
})
export class ArtistModule {}
