import {
    TOOGLE_IS_TEXTAREA_IN_THIRD_DIV_ACTIVE, IS_PLACEHOLDER_IN_THIRD_DIV_ACTIVE,
    TEXT_IN_THIRD_DIV
} from "./actionTypes";

const initialState = {
    isTextAreaInThirdDivActive: false,
    isPlaceHolderInThirdDivActive: true,
    textInThirdDiv: ""
};

const textAreaInThirdDivReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_TEXTAREA_IN_THIRD_DIV_ACTIVE: {
            const superState = {
                ...state,
                isTextAreaInThirdDivActive: action.isTextAreaInThirdDivActive
            };
            return superState;
        }

        case IS_PLACEHOLDER_IN_THIRD_DIV_ACTIVE: {
            const superState = {
                ...state,
                isPlaceHolderInThirdDivActive: action.isPlaceHolderInThirdDivActive
            };
            return superState;
        }

        case TEXT_IN_THIRD_DIV: {
            const superState = {
                ...state,
                textInThirdDiv: action.textInThirdDiv
            };
            return superState;
        }

        default: return state;
    }
};

export default textAreaInThirdDivReducer;