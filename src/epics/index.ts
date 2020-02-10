import { combineEpics, ofType } from "redux-observable";
import { map, switchMap } from "rxjs/operators";
import * as actions from "../action";
import { NMavennet } from "../interfaces";
import { ajax } from "rxjs/ajax";

const fetchUsersEpic = (action$: any) => action$.pipe(
	ofType(actions.fetchUsers.toString()),
	switchMap(({ payload }: NMavennet.IActions) =>
		ajax.getJSON(payload).pipe(
			map((response: any) => actions.setUsers(response))
		)
	)
);

const fetchAlbumsEpic = (action$: any) => action$.pipe(
	ofType(actions.fetchAlbums.toString()),
	switchMap(({ payload }: NMavennet.IActions) =>
		ajax.getJSON(payload).pipe(
			map((response: any) => actions.setAlbums(response))
		)
	)
);

const fetchPhotosEpic = (action$: any) => action$.pipe(
	ofType(actions.fetchPhotos.toString()),
	switchMap(({ payload }: NMavennet.IActions) =>
		ajax.getJSON(payload).pipe(
			map((response: any) => actions.setPhotos(response))
		)
	)
);

const RootEpic = combineEpics(
	fetchUsersEpic,
	fetchAlbumsEpic,
	fetchPhotosEpic
);

export default RootEpic;