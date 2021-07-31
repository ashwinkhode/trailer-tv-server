import { Playlist } from './Playlist';
import { ObjectType, Field } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Video extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  videoId!: string;

  @Field(() => String)
  @CreateDateColumn()
  uploadedAt: Date;

  @Field(() => String)
  @Column({ unique: true })
  title!: string;

  @Field()
  @Column()
  views: number;

  @Field()
  @Column()
  likes: number;

  @Field()
  @Column()
  dislikes: number;

  @Field()
  @Column()
  channel: string;

  @Field()
  @Column()
  thumbnail_url: string;

  @Field()
  @Column({ nullable: true })
  category: string;

  @Field(() => [Playlist], { defaultValue: [] })
  @ManyToMany(() => Playlist, (playlist) => playlist.videos)
  playlists: Playlist[];
}
