import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "../reducers/index"
import createSagaMiddleware from "redux-saga"
import { apiSaga, deleteBusSaga, getRemoteData, saveApi } from "../sagas/index"

const initialiseSagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(initialiseSagaMiddleware)))

initialiseSagaMiddleware.run(apiSaga)
initialiseSagaMiddleware.run(deleteBusSaga)
initialiseSagaMiddleware.run(getRemoteData)
initialiseSagaMiddleware.run(saveApi)

export default store
