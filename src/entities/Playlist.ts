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
  playlistId!: string;

  @Field()
  @Column({ unique: true })
  playlistName: string;

  @Field(() => [Video], { nullable: true, defaultValue: [] })
  @ManyToMany(() => Video, (video) => video.playlists)
  @JoinTable()
  videos: Video[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.playlists)
  user: User;
}
