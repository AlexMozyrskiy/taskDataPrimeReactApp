import {
    TOOGLE_IS_TEXTAREA_ACTIVE, IS_PLACEHOLDER_IN_FIRST_DIV_ACTIVE
} from "./actionTypes";

const initialState = {
    isTextareaActive: false,
    isPlaceHolderInFirstDivActive: true
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

        case IS_PLACEHOLDER_IN_FIRST_DIV_ACTIVE: {
            const superState = {
                ...state,
                isPlaceHolderInFirstDivActive: action.isPlaceHolderInFirstDivActive
            };
            return superState;
        }

        default: return state;
    }
};

export default textAreaReducer;