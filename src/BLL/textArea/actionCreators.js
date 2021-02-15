import {
    TOOGLE_IS_TEXTAREA_ACTIVE, IS_PLACEHOLDER_IN_FIRST_DIV_ACTIVE
} from "./actionTypes";



export const toogleIsTextAreaActive = (boolVar) => ({ type: TOOGLE_IS_TEXTAREA_ACTIVE, isTextareaActive: boolVar });
export const toogleIsPlaceHolderInFirstDivActive = (boolVar) => ({ type: IS_PLACEHOLDER_IN_FIRST_DIV_ACTIVE, isPlaceHolderInFirstDivActive: boolVar });