import {HIDE_INFO_BLOCK, SET_ACTIVE, SHOW_INFO_BLOCK} from "./types";

const initialState = {
    currentLight: 'Теплый',
    lights: {
        warm: {
            images: [
                '/assets/warm/1.jpg',
                '/assets/warm/2.jpg',
                '/assets/warm/3.jpg',
            ]
        },
        daily: {
            images: [
                '/assets/daily/1.jpg',
                '/assets/daily/2.jpg',
                '/assets/daily/3.jpg',
            ]
        },
        cold: {
            images: [
                '/assets/cold/1.jpg',
                '/assets/cold/2.jpg',
                '/assets/cold/3.jpg',
            ]
        }
    },
    showInfoBlock: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE: {
            return {...state, currentLight: action.payload}
        }
        case SHOW_INFO_BLOCK: {
            return {...state, showInfoBlock: true}
        }
        case HIDE_INFO_BLOCK: {
            return {...state, showInfoBlock: false}
        }
        default:
            return state;
    }
};

export default reducer;