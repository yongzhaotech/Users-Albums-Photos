import { createSelector } from "reselect";
import { NMavennet } from "../interfaces";

export const requestUrl: string = "https://jsonplaceholder.typicode.com";

export const blankAlbum: NMavennet.ISelectedAlbum = {
  id: "",
  title: ""
};

/*
 * @description non-memoized selector to select simple state items from redux store state
 * @param {NMavennet.IStoreState} state the only arguement implicitly passed in by redux useSelector hook
 */
export const selectUserId = (state: NMavennet.IStoreState): string => state.userId || "";

export const selectUsers = (state: NMavennet.IStoreState): NMavennet.IUser[] => state.users;

export const selectAlbum = (state: NMavennet.IStoreState): NMavennet.ISelectedAlbum => state.selectedAlbum || null;

export const selectAlbums = (state: NMavennet.IStoreState): NMavennet.IAlbum[] => state.albums;

export const selectPhotos = (state: NMavennet.IStoreState): NMavennet.IPhoto[] => state.photos;

/*
 * @description memoized selector to read user from the state - fetch the single user object by its id
 */
export const selectUser = createSelector(
  selectUserId,
  selectUsers,
  (userId: string, users: NMavennet.IUser[]) => users.find((u: NMavennet.IUser) => "" + u.id === userId)
);