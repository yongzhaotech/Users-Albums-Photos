import { createAction } from "redux-actions";
import { NMavennet } from "../interfaces";
import * as utils from "../utils";

/*
 * @description action creators
 */
export const selectUserId = createAction<string>("SELECT_USERID") as (userId: string) => ReduxActions.Action<string>;

export const selectAlbum = createAction<NMavennet.ISelectedAlbum>(
  "SELECT_ALBUM",
  (album: NMavennet.ISelectedAlbum = utils.blankAlbum) => album
) as (selectedAlbum?: NMavennet.ISelectedAlbum) => ReduxActions.Action<NMavennet.ISelectedAlbum>;

export const setUsers = createAction<NMavennet.IUser[]>("SET_USERS") as (users: NMavennet.IUser[]) => ReduxActions.Action<NMavennet.IUser[]>;

export const setAlbums = createAction<NMavennet.IAlbum[]>(
  "SET_ALBUMS",
  (albums: NMavennet.IAlbum[] = []) => albums
) as (albums?: NMavennet.IAlbum[]) => ReduxActions.Action<NMavennet.IAlbum[]>;

export const setPhotos = createAction<NMavennet.IPhoto[]>(
  "SET_PHOTOS",
  (photos: NMavennet.IPhoto[] = []) => photos
) as (photos?: NMavennet.IPhoto[]) => ReduxActions.Action<NMavennet.IPhoto[]>;

export const fetchUsers = createAction<string>("FETCH_USERS") as (url: string) => ReduxActions.Action<string>;

export const fetchAlbums = createAction<string>("FETCH_ALBUMS") as (url: string) => ReduxActions.Action<string>;

export const fetchPhotos = createAction<string>("FETCH_PHOTOS") as (url: string) => ReduxActions.Action<string>;