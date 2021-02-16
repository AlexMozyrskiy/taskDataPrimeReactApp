import {
    TOOGLE_IS_TEXTAREA_IN_SECOND_DIV_ACTIVE
} from "./actionTypes";

const initialState = {
    isTextAreaInSecondDivActive: false
};

const textAreaInSecondDivReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_TEXTAREA_IN_SECOND_DIV_ACTIVE: {
            const superState = {
                ...state,
                isTextAreaInSecondDivActive: action.isTextAreaInSecondDivActive
            };
            return superState;
        }

        default: return state;
    }
};

export default textAreaInSecondDivReducer;