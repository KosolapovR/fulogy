import {SET_ACTIVE} from "./types";

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
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE: {
            return {...state, currentLight: action.payload}
        }
        default:
            return state;
    }
};

export default reducer;