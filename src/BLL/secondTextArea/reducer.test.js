import {
    toogleIsTextAreaInSecondDivActive
} from "./actionCreators";
import textAreaInSecondDivReducer from "./reducer";


let initialState = {
    isTextAreaInSecondDivActive: false
};

/* Тест при клике на текстарею свойство isTextAreaInFirstDivActive меняется на то что отправили в action - в данном тесте true */
it("Тест при клике на текстарею свойство isTextAreaInSecondDivActive меняется на то что отправили в action - в данном тесте true", () => {
    // 1. test data
    let action = toogleIsTextAreaInSecondDivActive(true);

    // 2. action
    let newState = textAreaInSecondDivReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextAreaInSecondDivActive).toBe(true);
});
/* / Тест при клике на текстарею свойство isTextAreaInSecondDivActive меняется на то что отправили в action - в данном тесте true */

/* Тест при клике на текстарею свойство isTextAreaInSecondDivActive меняется на то что отправили в action - в данном тесте false */
it("Тест при клике на текстарею свойство isTextAreaInSecondDivActive меняется на то что отправили в action - в данном тесте false", () => {
    // 1. test data
    let action = toogleIsTextAreaInSecondDivActive(false);

    // 2. action
    let newState = textAreaInSecondDivReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextAreaInSecondDivActive).toBe(false);
});
/* / Тест при клике на текстарею свойство isTextAreaInSecondDivActive меняется на то что отправили в action - в данном тесте false */