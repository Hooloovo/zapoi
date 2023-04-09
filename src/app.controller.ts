import { Controller, Get, Param, Query } from '@nestjs/common';
import { SongsService } from './songs/songs.service';

@Controller('api/song')
export class SongController {
  constructor(private readonly songService: SongsService) {}

  @Get()
  async findAll() {
    return await this.songService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return await this.songService.findById(id);
  }

  @Get('title/:title')
  async findByTitle(@Param('title') title: string) {
    return await this.songService.findByTitle(title);
  }

  @Get('genre/:genre')
  async findByGenre(@Param('genre') genre: string) {
    return await this.songService.findByGenre(genre);
  }
}
