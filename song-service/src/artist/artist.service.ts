import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateArtistInput } from './dto/create-artist.input';
import slugify from 'slugify';

@Injectable()
export class ArtistService {
    constructor(private prisma: PrismaService) {}
    
    async getArtists() {
        return this.prisma.artist.findMany();
    }
    
    async createArtist(input: CreateArtistInput) {
        const { name, bio, country, birthdate, imageUrl, type } = input;
        const slug = slugify(input?.slug || name, {
          lower: true,
          strict: true,
          replacement: '-',
          remove: /[*+~.()'"!:@]/g,
          trim: true,
        });
        const existing = await this.prisma.artist.findFirst({
            where: { OR: [{ name }, { slug }] },
          });
          
          if (existing) {
            throw new Error('Artist with this name or slug already exists');
          }
        const created = await this.prisma.artist.create({
          data: {
            name,
            slug,
            bio,
            country,
            birthdate,
            imageUrl,
            type,
          },
        });
        return created;
      }
}
