import {takeEvery, call, put} from "redux-saga/effects";
import {apiService} from "../api/apiService";
import {parseMainApiResponse} from "../utils/utils";
import {ReduxCollection} from "../types/types";
import {
	getAllCollectionsFulfilled,
	addCollection,
	addCollectionFulfilled,
} from "../actions/collectionActions";
import {hidePopup} from "../actions/popupActions";
import {showFlash} from "../actions/flashActions";

function* workerGetCollectionsSaga() {
	try {
		const res = yield call(apiService.refreshAndFetch, "collections/get-all");

		const json = yield call([res, "json"]);

		const collections: ReduxCollection[] = parseMainApiResponse(json);

		yield put(getAllCollectionsFulfilled(collections));
	} catch (e) {
		console.log(e);
	}
}

function* workerAddCollectionSaga({collectionPayload}: ReturnType<typeof addCollection>) {
	try {
		const res = yield call(apiService.refreshAndFetch, "collections/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(collectionPayload),
		});

		const json = yield call([res, "json"]);

		const data = parseMainApiResponse(json);

		const {id, name, public: _public} = JSON.parse(data.collection);

		yield put(
			addCollectionFulfilled({
				id,
				name,
				public: _public,
			})
		);
		yield put(hidePopup());
		yield put(showFlash(data.message));
	} catch (e) {
		console.log(e);
	}
}

function* collectionsSaga() {
	yield takeEvery("GET_ALL_COLLECTIONS_ASYNC", workerGetCollectionsSaga);
	yield takeEvery("ADD_COLLECTION_ASYNC", workerAddCollectionSaga);
}

export default collectionsSaga;
