import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './songs//entities/song/song.entity';
import { SongController } from './app.controller';
import { SongsService } from './songs/songs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  providers: [SongsService],
  controllers: [SongController],
})
export class SongModule {}
