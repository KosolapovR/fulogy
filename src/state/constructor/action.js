import {HIDE_INFO_BLOCK, SET_ACTIVE, SHOW_INFO_BLOCK} from "./types";

const setActiveAC = (payload) => ({
    type: SET_ACTIVE,
    payload
});

const showInfoBlockAC = () => ({
    type: SHOW_INFO_BLOCK
});

const hideInfoBlockAC = () => ({
    type: HIDE_INFO_BLOCK
});

export {
    setActiveAC,
    showInfoBlockAC,
    hideInfoBlockAC,

}