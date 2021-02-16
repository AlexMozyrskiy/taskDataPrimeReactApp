import {
    TOOGLE_IS_TEXTAREA_ACTIVE, IS_PLACEHOLDER_IN_FIRST_DIV_ACTIVE,
    TEXT_IN_FIRST_DIV
} from "./actionTypes";



export const toogleIsTextAreaActive = (boolVar) => ({ type: TOOGLE_IS_TEXTAREA_ACTIVE, isTextareaActive: boolVar });
export const toogleIsPlaceHolderInFirstDivActive = (boolVar) => ({ type: IS_PLACEHOLDER_IN_FIRST_DIV_ACTIVE, isPlaceHolderInFirstDivActive: boolVar });
export const setTextInFirstDivInState = (textInFirstDiv) => ({ type: TEXT_IN_FIRST_DIV, textInFirstDiv });