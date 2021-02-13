import {
    TOOGLE_IS_TEXTAREA_ACTIVE
} from "./actionTypes";



export const toogleIsTextAreaActive = (boolVar) => ({ type: TOOGLE_IS_TEXTAREA_ACTIVE, isTextareaActive: boolVar });