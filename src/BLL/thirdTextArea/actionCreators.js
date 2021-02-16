import {
    TOOGLE_IS_TEXTAREA_IN_THIRD_DIV_ACTIVE, IS_PLACEHOLDER_IN_THIRD_DIV_ACTIVE,
    TEXT_IN_THIRD_DIV
} from "./actionTypes";



export const toogleIsTextAreaInThirdDivActive = (boolVar) => ({ type: TOOGLE_IS_TEXTAREA_IN_THIRD_DIV_ACTIVE, isTextAreaInThirdDivActive: boolVar });
export const toogleIsPlaceHolderInThirdDivActive = (boolVar) => ({ type: IS_PLACEHOLDER_IN_THIRD_DIV_ACTIVE, isPlaceHolderInThirdDivActive: boolVar });
export const setTextInThirdDivInState = (textInThirdDiv) => ({ type: TEXT_IN_THIRD_DIV, textInThirdDiv });