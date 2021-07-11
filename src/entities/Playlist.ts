import { Field, ObjectType } from 'type-graphql';
import { User } from './User';
import { Video } from './Video';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity()
export class Playlist {
  @Field()
  @PrimaryGeneratedColumn()
  playlistId!: number;

  @Field()
  @Column()
  playlistName: string;

  @ManyToMany(() => Video)
  @JoinTable()
  videos: Video[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.playlists)
  user: User;
}
