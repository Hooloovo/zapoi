import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Song } from './entities/song/song.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  async findAll(): Promise<Song[]> {
    return this.songsRepository.find();
  }

  async findByTitle(title: string): Promise<Song[]> {
    return this.songsRepository.find({
      where: {
        genre: Equal(title),
      },
    });
  }

  async findByGenre(genre: string): Promise<Song[]> {
    return this.songsRepository.find({
      where: {
        genre: Equal(genre),
      },
    });
  }

  async findById(id: number): Promise<Song> {
    return this.songsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(song: Song): Promise<Song> {
    return this.songsRepository.save(song);
  }
}
