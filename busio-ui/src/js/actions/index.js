import { DELETE_BUS, DATA_REQUESTED } from "../constants/action-types"

export function getData(url) {
    return {type: DATA_REQUESTED, payload: { url }}
}

export function deleteBus(payload) {
    return { type: DELETE_BUS, payload }
}

