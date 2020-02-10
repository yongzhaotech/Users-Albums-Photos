import { combineEpics, ofType } from "redux-observable";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import * as actions from "../action";
import { NMavennet } from "../interfaces";

const fetchUsersEpic = (action$: any, state$: any, { ajax }: any) => action$.pipe(
	ofType(actions.fetchUsers.toString()),
	switchMap(({ payload }: NMavennet.IActions) =>
		ajax.getJSON(payload).pipe(
			map((response: any) => actions.setUsers(response)),
			catchError(error =>
				of({
					type: "error",
					message: error
				})
			)
		)
	)
);

const fetchAlbumsEpic = (action$: any, state$: any, { ajax }: any) => action$.pipe(
	ofType(actions.fetchAlbums.toString()),
	switchMap(({ payload }: NMavennet.IActions) =>
		ajax.getJSON(payload).pipe(
			map((response: any) => actions.setAlbums(response)),
			catchError(error =>
				of({
					type: "error",
					message: error
				})
			)
		)
	)
);

const fetchPhotosEpic = (action$: any, state$: any, { ajax }: any) => action$.pipe(
	ofType(actions.fetchPhotos.toString()),
	switchMap(({ payload }: NMavennet.IActions) =>
		ajax.getJSON(payload).pipe(
			map((response: any) => actions.setPhotos(response)),
			catchError(error =>
				of({
					type: "error",
					message: error
				})
			)
		)
	)
);

const RootEpic = combineEpics(
	fetchUsersEpic,
	fetchAlbumsEpic,
	fetchPhotosEpic
);

export default RootEpic;