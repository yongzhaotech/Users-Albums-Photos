import { combineEpics, ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import * as actions from "../action";
import { NMavennet } from "../interfaces";

const fetchUsersEpic = (action$: any) => action$.pipe(
	ofType(actions.fetchUsers.toString()),
	mergeMap((action: NMavennet.IActions) =>
		request(action.payload).then(
			response => actions.setUsers(response)
		)
	)
);

const fetchAlbumsEpic = (action$: any) => action$.pipe(
	ofType(actions.fetchAlbums.toString()),
	mergeMap((action: NMavennet.IActions) =>
		request(action.payload).then(
			response => actions.setAlbums(response)
		)
	)
);

const fetchPhotosEpic = (action$: any) => action$.pipe(
	ofType(actions.fetchPhotos.toString()),
	mergeMap((action: NMavennet.IActions) =>
		request(action.payload).then(
			response => actions.setPhotos(response)
		)
	)
);

const RootEpic = combineEpics(
	fetchUsersEpic,
	fetchAlbumsEpic,
	fetchPhotosEpic
);

export default RootEpic;

const request = (url: string) => fetch(url)
	.then(response => response.json())
	.catch(e => { });