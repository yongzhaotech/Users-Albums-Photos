import { NMavennet } from "../interfaces";
import { combineReducers } from "redux";
import * as actions from "../action";
import * as utils from "../utils";

const userId = (state: string = "", action: NMavennet.IActions): string => {
  switch (action.type) {
    case actions.SELECT_USERID:
      return action.payload;
    default:
      return state;
  }
};

const selectedAlbum = (state: NMavennet.ISelectedAlbum = utils.blankAlbum, action: NMavennet.IActions): NMavennet.ISelectedAlbum => {
  switch (action.type) {
    case actions.SELECT_ALBUM:
      return action.payload;
    default:
      return state;
  }
};

const users = (state: NMavennet.IUser[] = [], action: NMavennet.IActions): NMavennet.IUser[] => {
  switch (action.type) {
    case actions.SET_USERS:
      return action.payload;
    default:
      return state;
  }
};

const albums = (state: NMavennet.IAlbum[] = [], action: NMavennet.IActions): NMavennet.IAlbum[] => {
  switch (action.type) {
    case actions.SET_ALBUMS:
      return action.payload;
    default:
      return state;
  }
};

const photos = (state: NMavennet.IPhoto[] = [], action: NMavennet.IActions): NMavennet.IPhoto[] => {
  switch (action.type) {
    case actions.SET_PHOTOS:
      return action.payload;
    default:
      return state;
  }
};

const RootReducer = combineReducers({
  userId,
  selectedAlbum,
  users,
  albums,
  photos
});

export default RootReducer;