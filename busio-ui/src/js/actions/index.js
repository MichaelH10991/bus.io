import { DELETE_BUS, DATA_REQUESTED, CLEAN_UP_REMOTE } from "../constants/action-types"

export function getData(url) {
    return {type: DATA_REQUESTED, payload: { url }}
}

export function deleteBus(payload) {
    return { type: DELETE_BUS, payload }
}

export function cleanUpState(payload) {
    return { type: CLEAN_UP_REMOTE, payload}
}

