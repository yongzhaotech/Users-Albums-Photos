import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as utils from "../utils";
import * as actions from "../action";
import { NMavennet } from "../interfaces";

interface IModalProps {
  modal: NMavennet.IObject<string>;
}

const Modal: React.FunctionComponent<IModalProps> = ({ modal }) => (
  <div className="modal fade" id="photo-detail" tabIndex={-1} role="dialog" aria-labelledby="photo-modal-title" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="photo-modal-title">{modal.title}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img src={modal.url} className="img-fluid" alt={modal.title} />
        </div>
      </div>
    </div>
  </div>
);

const Photos: React.FunctionComponent = () => {
  const album = useSelector(utils.selectAlbum),
    photos: NMavennet.IPhoto[] = useSelector(utils.selectPhotos),
    dispatch = useDispatch(),
    [modal, setModal] = React.useState({});

  React.useEffect(() => {
    if (album) {
      dispatch(actions.fetchPhotos(`${utils.requestUrl}/photos?albumId=${album.id}`));
    }
  }, [album, dispatch]);

  return photos.length ? (
    <div className="pt-3">
      <h4>
        {photos.length} photos of album <i>{album.title}</i>
      </h4>
      <small className="form-text text-muted">Select a thumnail to see its details</small>
      <div className="row justify-content-md-center">
        {
          photos.map((photo: NMavennet.IPhoto) => (
            <a
              href={photo.thumbnailUrl}
              role="button"
              data-toggle="modal"
              data-target="#photo-detail"
              key={photo.id}
              onClick={
                (e: any) => {
                  e.preventDefault();
                  setModal({
                    title: photo.title,
                    url: photo.url
                  })
                }
              }
            >
              <img src={photo.thumbnailUrl} alt={photo.title} className="img-thumbnail" />
            </a>
          ))
        }
      </div>
      <Modal {...{ modal }} />
    </div>
  ) : null;
};

export default Photos;