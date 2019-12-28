import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../action";
import * as utils from "../utils";
import { NMavennet } from "../interfaces";
import Photos from "./Photos";

const Albums: React.FunctionComponent = () => {
  const dispatch = useDispatch(),
    user: NMavennet.IUser | undefined = useSelector(utils.selectUser),
    selectAlbum: NMavennet.ISelectedAlbum = useSelector(utils.selectAlbum),
    albums: NMavennet.IAlbum[] = useSelector(utils.selectAlbums);
  React.useEffect(() => {
    if (!!user) {
      dispatch(actions.fetchAlbums(`${utils.requestUrl}/albums?userId=${user.id}`));
    }
  }, [user, dispatch]);

  return user ? (
    <React.Fragment>
      <div>
        <h4>
          Albums of <i>{user.name}</i>
        </h4>
        <small className="form-text text-muted">Select an album to see its photos</small>
        <div className="list-group">
          {
            albums.map((album: NMavennet.IAlbum) => (
              <button
                key={album.id}
                className={`list-group-item list-group-item-action ${selectAlbum.id === album.id + "" ? "disabled active" : ""}`}
                onClick={
                  () => {
                    dispatch(actions.selectAlbum({ id: album.id + "", title: album.title }));
                  }
                }
              >
                {album.title}
              </button>
            ))
          }
        </div>
      </div>
      {
        selectAlbum && selectAlbum.id && <Photos />
      }
    </React.Fragment>
  ) : null;
}

export default Albums;