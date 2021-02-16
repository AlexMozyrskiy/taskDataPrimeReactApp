import {
    toogleIsTextAreaActive, toogleIsPlaceHolderInFirstDivActive,
    setTextInFirstDivInState
} from "./actionCreators";
import textAreaReducer from "./reducer";


let initialState = {
    isTextareaActive: false,
    isPlaceHolderInFirstDivActive: true,
    textInFirstDiv: ""
};

/* Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте true */
it("Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте true", () => {
    // 1. test data
    let action = toogleIsTextAreaActive(true);

    // 2. action
    let newState = textAreaReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextareaActive).toBe(true);
});
/* / Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте true */

/* Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте false */
it("Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте false", () => {
    // 1. test data
    let action = toogleIsTextAreaActive(false);

    // 2. action
    let newState = textAreaReducer(initialState, action);

    // 3. expectation
    expect(newState.isTextareaActive).toBe(false);
});
/* / Тест при клике на текстарею свойство isTextareaActive меняется на то что отправили в action - в данном тесте false */


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