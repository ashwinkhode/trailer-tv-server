import { Playlist } from './../entities/Playlist';
import { MyContext } from '../../types';
import { Video } from '../entities/Video';
import { Arg, Field, InputType, Int, Mutation, Resolver } from 'type-graphql';
import { Ctx, Query } from 'type-graphql';

@InputType()
class VideoInput {
  @Field()
  title: string;

  @Field()
  views: number;

  @Field()
  likes: number;

  @Field()
  dislikes: number;

  @Field()
  channel: string;

  @Field()
  thumbnail_url: string;
}

@InputType()
class AddToPlaylistInput {
  @Field()
  videoId: string;

  @Field()
  playlistId: string;
}

@Resolver()
export class VideoResolver {
  @Query(() => [Video], { nullable: true })
  videos(@Ctx() { em }: MyContext): Promise<Video[]> {
    return em.find(Video, {});
  }

  @Query(() => Video, { nullable: true })
  video(
    @Arg('videoId', () => String) videoId: string,
    @Ctx() { em }: MyContext,
  ): Promise<Video | undefined> {
    return em.findOne(Video, { videoId });
  }

  @Mutation(() => Video, { nullable: true })
  addVideo(@Arg('inputData') inputData: VideoInput): Promise<Video> {
    return Video.create({
      ...inputData,
      playlists: [],
    }).save();
  }

  @Mutation(() => Video)
  async addToPlaylist(
    @Arg('inputData') inputData: AddToPlaylistInput,
    @Ctx() { em }: MyContext,
  ): Promise<Playlist | undefined> {
    const requiredPlaylist = await em.findOne(Playlist, {
      playlistId: inputData.playlistId,
    });
    const requiredVideo = await em.findOne(Video, {
      videoId: inputData.videoId,
    });

    if (requiredPlaylist && requiredVideo) {
      requiredPlaylist.videos = [...requiredPlaylist.videos, requiredVideo];
      return await em.save(requiredPlaylist);
    }

    return requiredPlaylist;
  }
}
