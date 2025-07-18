import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GQLHealth } from './gql.health';
import { SongModule } from './song/song.module';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    SongModule,
    ArtistModule
  ],
  providers: [AppService, PrismaService, GQLHealth],
  exports: [PrismaService]
})
export class AppModule {}
