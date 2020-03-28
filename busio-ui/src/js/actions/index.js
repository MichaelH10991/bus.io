import {
  DELETE_BUS,
  DATA_REQUESTED,
  CLEAN_UP_SAVED,
  REMOTE_DATA_REQUESTED,
  CLEAN_UP_REMOTE,
  SAVE_BUS
} from "../constants/action-types"

export function getData(url) {
  return { type: DATA_REQUESTED, payload: { url } }
}

export function deleteBus(payload) {
  return { type: DELETE_BUS, payload }
}

export function cleanUpState(payload) {
  return { type: CLEAN_UP_SAVED, payload }
}

export function getRemoteData(url) {
  return { type: REMOTE_DATA_REQUESTED, payload: { url } }
}

export function cleanUpRemote(payload) {
  return { type: CLEAN_UP_REMOTE, payload }
}

export function saveBus(url, data) {
  return { type: SAVE_BUS, payload: { url, data } }
}
