import { NMavennet } from "../interfaces";
import * as utils from "../utils";

export const SELECT_USERID = "SELECT_USERID";
export const SELECT_ALBUM = "SELECT_ALBUM";
export const SET_USERS = "SERT_USERS";
export const SET_ALBUMS = "SET_ALBUMS";
export const SET_PHOTOS = "SET_PHOTOS";
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_PHOTOS = "FETCH_PHOTOS";

/*
 * @description action creators
 */
export const selectUserId = (payload: string = ""): NMavennet.IActions => ({
  type: SELECT_USERID,
  payload
});

export const selectAlbum = (payload: NMavennet.ISelectedAlbum = utils.blankAlbum): NMavennet.IActions => ({
  type: SELECT_ALBUM,
  payload
});

export const setUsers = (payload: NMavennet.IUser[]): NMavennet.IActions => ({
  type: SET_USERS,
  payload
});

export const setAlbums = (payload: NMavennet.IAlbum[] = []): NMavennet.IActions => ({
  type: SET_ALBUMS,
  payload
});

export const setPhotos = (payload: NMavennet.IAlbum[] = []): NMavennet.IActions => ({
  type: SET_PHOTOS,
  payload
});

/*
 * @description watched by Redux-Saga middleware for asynchronous API requests
 */
export const fetchUsers = (url: string): NMavennet.IActions => ({
  type: FETCH_USERS,
  payload: url
});

export const fetchAlbums = (url: string): NMavennet.IActions => ({
  type: FETCH_ALBUMS,
  payload: url
});

export const fetchPhotos = (url: string): NMavennet.IActions => ({
  type: FETCH_PHOTOS,
  payload: url
});