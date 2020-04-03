import { takeEvery, call, put } from "redux-saga/effects"

export default function* watcherSaga() {
  yield takeEvery("SAVE_BUS", workerSaga)
}

function* workerSaga(action) {
  try {
    const payload = yield call(postData, action.payload.url, action.payload.data)
    yield put({ type: "REMOTE_DATA_SAVED", payload })
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e })
  }

  function postData(url, data) {
    console.log(data)
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json()
      })
      .then(result => console.log(result))
      .catch(e => console.log(e))
  }
}
