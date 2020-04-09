import { takeEvery, call, put } from "redux-saga/effects"

export default function* watcherSaga() {
  yield takeEvery("REMOTE_DATA_REQUESTED", workerSaga)
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.payload.url)
    yield put({ type: "REMOTE_DATA_LOADED", payload })
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e })
  }

  function getData(url) {
    return fetch(url).then((response) => response.json())
  }
}
