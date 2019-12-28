import { put, call, all, takeEvery } from "redux-saga/effects";
import * as actions from "../action";
import { NMavennet } from "../interfaces";

const request = (url: string) => fetch(url)
	.then(response => response.json())
	.catch(e => { });

function* fetchUsers(action: NMavennet.IActions) {
	try {
		/*
			should dispatch a loading indicator action to prevent crazy user clicks
		 */
		const users = yield call(request, action.payload);
		yield put(actions.setUsers(users));
	} catch (error) {
		/*
			should dispatch an error message action to show errors to the user
		*/
	}
}

function* fetchAlbums(action: NMavennet.IActions) {
	try {
		const albums = yield call(request, action.payload);
		yield put(actions.setAlbums(albums));
	} catch (error) { }
}

function* fetchPhotos(action: NMavennet.IActions) {
	try {
		const photos = yield call(request, action.payload);
		yield put(actions.setPhotos(photos));
	} catch (error) { }
}

/*
 * @description list of saga events, add whatever is needed
 */
export default function* RootSaga() {
	yield all([
		takeEvery(actions.FETCH_USERS, fetchUsers),
		takeEvery(actions.FETCH_ALBUMS, fetchAlbums),
		takeEvery(actions.FETCH_PHOTOS, fetchPhotos)
	])
};