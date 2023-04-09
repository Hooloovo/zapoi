import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  genre: string;

  @Column({ nullable: true, name: 'content_url' })
  contentUrl: string;

  @Column({ type: 'json', name: 'tonality_map' })
  tonalityMap: string;
}
