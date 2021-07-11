import { User } from './../entities/User';
import { MyContext } from './../../types.d';
import { Playlist } from './../entities/Playlist';
import { Mutation, Resolver, Arg, Ctx, InputType, Field } from 'type-graphql';
import { DeleteResult } from 'typeorm';

@InputType()
class NewPlaylistInput {
  @Field()
  playlistName: string;

  @Field()
  user: User;
}

@InputType()
class DeletePlaylistInput {
  @Field()
  playlistId: string;

  @Field()
  user: User;
}

@Resolver()
export class PlaylistResolver {
  @Mutation(() => Playlist)
  async newPlaylist(
    @Arg('inputData') inputData: NewPlaylistInput,
    @Ctx() { em }: MyContext,
  ): Promise<Playlist> {
    const newPlaylist = em.create(Playlist, {
      playlistName: inputData.playlistName,
      user: inputData.user,
      videos: [],
    });

    return em.save(newPlaylist);
  }

  @Mutation(() => Playlist)
  async deletePlaylist(
    @Arg('inputData') inputData: DeletePlaylistInput,
    @Ctx() { em }: MyContext,
  ): Promise<Playlist | DeleteResult | undefined> {
    const requiredPlaylist = await em.findOne(Playlist, {
      playlistId: inputData.playlistId,
    });

    // TODO: Taking user from the req better or from the query
    if (requiredPlaylist?.user.userId === inputData.user.userId) {
      return em.delete(Playlist, {
        playlistId: requiredPlaylist.playlistId,
      });
    }

    return requiredPlaylist;
  }
}
