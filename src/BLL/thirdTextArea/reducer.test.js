import {
    toogleIsTextAreaInThirdDivActive
} from "./actionCreators";
import textAreaInThirdDivReducer from "./reducer";


let initialState = {
    isTextAreaInThirdDivActive: false
};

/* Тест при клике на текстарею свойство isTextAreaInThirdDivActive меняется на то что отправили в action - в данном тесте true */
it("Тест при клике на текстарею свойство isTextAreaInThirdDivActive меняется на то что отправили в action - в данном тесте true", () => {
    // 1. test data
    let action = toogleIsTextAreaInThirdDivActive(true);

    // 2. action
    let newState = textAreaInThirdDivReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextAreaInThirdDivActive).toBe(true);
});
/* / Тест при клике на текстарею свойство isTextAreaInThirdDivActive меняется на то что отправили в action - в данном тесте true */

/* Тест при клике на текстарею свойство isTextAreaInThirdDivActive меняется на то что отправили в action - в данном тесте false */
it("Тест при клике на текстарею свойство isTextAreaInThirdDivActive меняется на то что отправили в action - в данном тесте false", () => {
    // 1. test data
    let action = toogleIsTextAreaInThirdDivActive(false);

    // 2. action
    let newState = textAreaInThirdDivReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextAreaInThirdDivActive).toBe(false);
});
/* / Тест при клике на текстарею свойство isTextAreaInThirdDivActive меняется на то что отправили в action - в данном тесте false */