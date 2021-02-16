import {
    TOOGLE_IS_TEXTAREA_IN_FIRST_DIV_ACTIVE, IS_PLACEHOLDER_IN_FIRST_DIV_ACTIVE,
    TEXT_IN_FIRST_DIV
} from "./actionTypes";

const initialState = {
    isTextAreaInFirstDivActive: false,
    isPlaceHolderInFirstDivActive: true,
    textInFirstDiv: ""
};

const textAreaInFirstDivReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_TEXTAREA_IN_FIRST_DIV_ACTIVE: {
            const superState = {
                ...state,
                isTextAreaInFirstDivActive: action.isTextAreaInFirstDivActive
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

        case TEXT_IN_FIRST_DIV: {
            const superState = {
                ...state,
                textInFirstDiv: action.textInFirstDiv
            };
            return superState;
        }

        default: return state;
    }
};

export default textAreaInFirstDivReducer;