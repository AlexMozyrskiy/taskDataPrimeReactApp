import {
    toogleIsTextAreaInFirstDivActive, toogleIsPlaceHolderInFirstDivActive,
    setTextInFirstDivInState
} from "./actionCreators";
import textAreaReducer from "./reducer";


let initialState = {
    isTextAreaInFirstDivActive: false,
    isPlaceHolderInFirstDivActive: true,
    textInFirstDiv: ""
};

/* Тест при клике на текстарею свойство isTextAreaInFirstDivActive меняется на то что отправили в action - в данном тесте true */
it("Тест при клике на текстарею свойство isTextAreaInFirstDivActive меняется на то что отправили в action - в данном тесте true", () => {
    // 1. test data
    let action = toogleIsTextAreaInFirstDivActive(true);

    // 2. action
    let newState = textAreaReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextAreaInFirstDivActive).toBe(true);
});
/* / Тест при клике на текстарею свойство isTextAreaInFirstDivActive меняется на то что отправили в action - в данном тесте true */

/* Тест при клике на текстарею свойство isTextAreaInFirstDivActive меняется на то что отправили в action - в данном тесте false */
it("Тест при клике на текстарею свойство isTextAreaInFirstDivActive меняется на то что отправили в action - в данном тесте false", () => {
    // 1. test data
    let action = toogleIsTextAreaInFirstDivActive(false);

    // 2. action
    let newState = textAreaReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextAreaInFirstDivActive).toBe(false);
});
/* / Тест при клике на текстарею свойство isTextAreaInFirstDivActive меняется на то что отправили в action - в данном тесте false */


/* Тест когда юзер начинает печатать в первом диву isPlaceHolderInFirstDivActive меняется на то что отправили в action - в данном тесте false */
it("Тест когда юзер начинает печатать в первом диву isPlaceHolderInFirstDivActive меняется на то что отправили в action - в данном тесте false", () => {
    // 1. test data
    let action = toogleIsPlaceHolderInFirstDivActive(false);

    // 2. action
    let newState = textAreaReducer(initialState, action);

    // 3. expectation
    expect(newState.isPlaceHolderInFirstDivActive).toBe(false);
});
/* / Тест когда юзер начинает печатать в первом диву isPlaceHolderInFirstDivActive меняется на то что отправили в action - в данном тесте false */

/* Тест когда юзер начинает печатать в первом диву isPlaceHolderInFirstDivActive меняется на то что отправили в action - в данном тесте true */
it("Тест когда юзер начинает печатать в первом диву isPlaceHolderInFirstDivActive меняется на то что отправили в action - в данном тесте true", () => {
    // 1. test data
    let action = toogleIsPlaceHolderInFirstDivActive(true);

    // 2. action
    let newState = textAreaReducer(initialState, action);

    // 3. expectation
    expect(newState.isPlaceHolderInFirstDivActive).toBe(true);
});
/* / Тест когда юзер начинает печатать в первом диву isPlaceHolderInFirstDivActive меняется на то что отправили в action - в данном тесте true */


/* Тест когда юзер печатает в первом диве textInFirstDiv меняется на то что отправили в action (на печатуемый текст) */
it("Тест когда юзер печатает в первом диве textInFirstDiv меняется на то что отправили в action (на печатуемый текст)", () => {
    const textInFirstDiv = "Тестовый текст в первом диве";
    // 1. test data
    let action = setTextInFirstDivInState(textInFirstDiv);

    // 2. action
    let newState = textAreaReducer(initialState, action);

    // 3. expectation
    expect(newState.textInFirstDiv).toBe(textInFirstDiv);
});
/* / Тест когда юзер печатает в первом диве textInFirstDiv меняется на то что отправили в action (на печатуемый текст) */