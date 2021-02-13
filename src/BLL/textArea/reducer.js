import {
    TOOGLE_IS_TEXTAREA_ACTIVE
} from "./actionTypes";

const initialState = {
    isTextareaActive: false
};

const textAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_TEXTAREA_ACTIVE: {
            const superState = {
                ...state,
                isTextareaActive: action.isTextareaActive
            };
            return superState;
        }

        default: return state;
    }
};

export default textAreaReducer;