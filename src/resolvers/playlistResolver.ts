import { User } from './../entities/User';
import { MyContext } from './../../types.d';
import { Playlist } from './../entities/Playlist';
import {
  Mutation,
  Resolver,
  Arg,
  Ctx,
  InputType,
  Field,
  Query,
  Authorized,
} from 'type-graphql';
import { DeleteResult } from 'typeorm';
import { Video } from '../entities/Video';

@InputType()
class NewPlaylistInput {
  @Field()
  playlistName: string;
}

@InputType()
class PlaylistOperationInput {
  @Field()
  playlistId: string;

  @Field()
  videoId?: string;
}

@Resolver()
export class PlaylistResolver {
  @Query(() => [Playlist])
  async playlists(@Ctx() { em }: MyContext): Promise<Playlist[]> {
    const allPlaylists = await em.find(Playlist, {});

    return allPlaylists;
  }

  @Authorized('REGULAR')
  @Query(() => [Playlist])
  async myPlaylists(@Ctx() { em, req }: MyContext): Promise<Playlist[]> {
    const allPlaylists = await em.find(Playlist, {
      where: {
        user: await em.findOne(User, {
          where: {
            userId: req.session.userId,
          },
        }),
      },
    });

    return allPlaylists;
  }

  @Authorized('REGULAR')
  @Query(() => Playlist)
  async playlist(
    @Arg('playlistId') playlistId: string,
    @Ctx() { em }: MyContext,
  ): Promise<Playlist> {
    const requiredPlaylist = await em.findOne(Playlist, {
      where: {
        playlistId,
      },
      relations: ['videos'],
    });

    if (!requiredPlaylist) {
      throw new Error('Playlist Not Found');
    }

    return requiredPlaylist;
  }

  @Authorized(['REGULAR'])
  @Mutation(() => Playlist)
  async newPlaylist(
    @Arg('inputData') inputData: NewPlaylistInput,
    @Ctx() { em, req }: MyContext,
  ): Promise<Playlist> {
    const user = await em.findOne(User, {
      where: {
        userId: req.session.userId,
      },
    });

    if (!user) {
      throw new Error('User Not Found');
    }

    const newPlaylist = em.create(Playlist, {
      playlistName: inputData.playlistName,
      user: user,
      videos: [],
    });

    return em.save(newPlaylist);
  }

  @Authorized('REGULAR')
  @Mutation(() => Playlist)
  async addVideoToPlaylist(
    @Arg('inputData') inputData: PlaylistOperationInput,
    @Ctx() { em, req }: MyContext,
  ): Promise<Playlist | undefined> {
    const requiredPlaylist = await em.findOne(Playlist, {
      where: {
        playlistId: inputData.playlistId,
      },
      relations: ['videos', 'user'],
    });
    const requiredVideo = await em.findOne(Video, {
      videoId: inputData.videoId,
    });

    if (
      requiredPlaylist &&
      requiredVideo &&
      requiredPlaylist.user.userId === req.session.userId
    ) {
      requiredPlaylist.videos.push(requiredVideo);
      return await em.save(requiredPlaylist);
    }

    return requiredPlaylist;
  }

  @Authorized('REGULAR')
  @Mutation(() => Playlist)
  async removeVideoFromPlaylist(
    @Arg('inputData') inputData: PlaylistOperationInput,
    @Ctx() { em, req }: MyContext,
  ): Promise<Playlist | undefined> {
    const requiredPlaylist = await em.findOne(Playlist, {
      playlistId: inputData.playlistId,
    });

    const updatedVideos = requiredPlaylist?.videos.filter(
      (video) => video.videoId !== inputData.videoId,
    );

    if (
      requiredPlaylist &&
      updatedVideos &&
      requiredPlaylist.user === req.session.userId
    ) {
      requiredPlaylist.videos = updatedVideos;
      return await em.save(requiredPlaylist);
    }

    return requiredPlaylist;
  }

  @Authorized('REGULAR')
  @Mutation(() => Playlist)
  async deletePlaylist(
    @Arg('inputData') inputData: PlaylistOperationInput,
    @Ctx() { em, req }: MyContext,
  ): Promise<Playlist | DeleteResult | undefined> {
    const requiredPlaylist = await em.findOne(Playlist, {
      playlistId: inputData.playlistId,
    });

    if (
      requiredPlaylist &&
      requiredPlaylist?.user.userId === req.session.userId
    ) {
      return em.delete(Playlist, {
        playlistId: requiredPlaylist.playlistId,
      });
    }

    return requiredPlaylist;
  }
}
