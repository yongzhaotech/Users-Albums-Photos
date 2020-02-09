import { NMavennet } from "../interfaces";
import { combineReducers } from "redux";
import { Action, handleActions } from "redux-actions";
import * as actions from "../action";
import * as utils from "../utils";

const RootReducer = combineReducers<NMavennet.IStoreState>({
  userId: handleActions<string>({
    [actions.selectUserId.toString()]: (state, { payload }: Action<string>) => payload || state
  }, ""),
  selectedAlbum: handleActions<NMavennet.ISelectedAlbum>({
    [actions.selectAlbum.toString()]: (state, { payload }: Action<NMavennet.ISelectedAlbum>) => payload || state
  }, utils.blankAlbum),
  users: handleActions<NMavennet.IUser[]>({
    [actions.setUsers.toString()]: (state, { payload }: Action<NMavennet.IUser[]>) => payload || state
  }, []),
  albums: handleActions<NMavennet.IAlbum[]>({
    [actions.setAlbums.toString()]: (state, { payload }: Action<NMavennet.IAlbum[]>) => payload || state
  }, []),
  photos: handleActions<NMavennet.IPhoto[]>({
    [actions.setPhotos.toString()]: (state, { payload }: Action<NMavennet.IPhoto[]>) => payload || state
  }, [])
});

export default RootReducer;