import { toogleIsTextAreaActive } from "./actionCreators";
import textAreaReducer from "./reducer";


let initialState = {
    isTextareaActive: false
};

/* Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте true */
it("after promise setUserData into state, id !== null", () => {
    // 1. test data
    let action = toogleIsTextAreaActive(true);

    // 2. action
    let newState = textAreaReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextareaActive).toBe(true);
});
/* / Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте true */

/* Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте false */
it("after promise setUserData into state, id !== null", () => {
    // 1. test data
    let action = toogleIsTextAreaActive(false);

    // 2. action
    let newState = textAreaReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextareaActive).toBe(false);
});
/* / Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте false */