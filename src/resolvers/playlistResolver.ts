import { User } from './../entities/User';
import { MyContext } from '../../types';
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

type TDeleteResult = {
  success: boolean;
};

@Resolver()
export class PlaylistResolver {
  @Query(() => [Playlist])
  async playlists(@Ctx() { em }: MyContext): Promise<Playlist[]> {
    return await em.find(Playlist, {
      relations: ['user'],
    });
  }

  @Query(() => [Playlist])
  async myPlaylists(@Ctx() { em, req }: MyContext): Promise<Playlist[]> {
    if (!req.session.userId) {
      throw new Error('Please login to view your playlists');
    }

    const allPlaylists = await em.find(Playlist, {
      where: {
        user: await em.findOne(User, {
          where: {
            userId: req.session.userId,
          },
        }),
      },
      relations: ['videos'],
    });

    return allPlaylists;
  }

  @Query(() => Playlist)
  async playlist(
    @Arg('playlistId') playlistId: string,
    @Ctx() { em }: MyContext,
  ): Promise<Playlist> {
    const requiredPlaylist = await em.findOne(Playlist, {
      where: {
        playlistId,
      },
      relations: ['videos', 'user'],
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
      const isAlreadyPresent = requiredPlaylist?.videos.find(
        (video) => video.videoId === requiredVideo?.videoId,
      );
      if (!isAlreadyPresent) {
        requiredPlaylist.videos.push(requiredVideo);
        return await em.save(requiredPlaylist);
      } else {
        throw new Error('Video Already Exists');
      }
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
      where: { playlistId: inputData.playlistId },
      relations: ['user', 'videos'],
    });

    const requiredVideo = await em.findOne(Video, {
      where: {
        videoId: inputData.videoId,
      },
    });

    if (
      requiredPlaylist &&
      requiredVideo &&
      requiredPlaylist.user.userId === req.session.userId
    ) {
      const isPresent = requiredPlaylist?.videos.find(
        (video) => video.videoId === requiredVideo?.videoId,
      );
      if (isPresent) {
        const updatedVideos = requiredPlaylist?.videos.filter(
          (video) => video.videoId !== inputData.videoId,
        );
        requiredPlaylist.videos = updatedVideos;
        return await em.save(requiredPlaylist);
      } else {
        throw new Error('This video cannot be found in this playlist');
      }
    }

    return requiredPlaylist;
  }

  @Authorized('REGULAR')
  @Mutation(() => Playlist)
  async deletePlaylist(
    @Arg('playlistId') playlistId: string,
    @Ctx() { em, req }: MyContext,
  ): Promise<Playlist> {
    const requiredPlaylist = await em.findOne(Playlist, {
      where: { playlistId },
      relations: ['user'],
    });

    if (
      requiredPlaylist &&
      requiredPlaylist?.user.userId === req.session.userId
    ) {
      const result = await em.delete(Playlist, {
        playlistId: requiredPlaylist.playlistId,
      });
      return requiredPlaylist;
    } else {
      throw new Error('You cannot perform this operation');
    }
  }
}
