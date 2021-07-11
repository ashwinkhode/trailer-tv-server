import { Playlist } from './Playlist';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn()
  userId!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
  
  @Field(() => [Playlist], {nullable: true})
  @OneToMany(() => Playlist, playlist => playlist.user)
  playlists!: Playlist[];

}