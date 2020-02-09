export namespace NMavennet {

  export interface IObject<T> {
    [key: string]: T;
  }

  export interface IUser {
    id: number | string;
    name: string;
    username?: string;
    email?: string;
    address?: IObject<any>;
    phone?: string;
    website?: string;
    company?: IObject<string>;
  }

  export interface IAlbum {
    userId: number | string;
    id: number;
    title: string;
  }

  export interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  export interface IActions {
    type: string;
    payload: any;
  }

  export interface ISelectedAlbum {
    id: string | number;
    title: string;
  }

  export interface IStoreState {
    userId: string;
    users: IUser[];
    albums: IAlbum[];
    photos: IPhoto[];
    selectedAlbum: ISelectedAlbum;
  }

}