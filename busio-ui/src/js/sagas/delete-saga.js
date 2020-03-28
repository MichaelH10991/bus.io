import { takeEvery, call, put } from "redux-saga/effects"

export default function* watcherSaga() {
  yield takeEvery("DELETE_BUS", workerSaga)
}

function* workerSaga(action) {
  try {
    const payload = yield call(deleteBus, action.payload._id)
    yield put({ type: "BUS_DELETED", payload })
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e })
  }

  function deleteBus(id) {
    const url = "http://localhost:8080/api/saved"
    return fetch(`${url}/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  }
}
