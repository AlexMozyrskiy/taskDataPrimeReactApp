import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import {
    getIsTextAreaInFirstDivActiveSelector, getIsPlaceHolderInFirstDivActiveSelector,
    getTextInFirstDivSelector
} from "../../BLL/firstTextArea/selectors";
import {
    getIsTextAreaInThirdDivActiveSelector, getiIsPlaceHolderInThirdDivActiveSelector,
    getTextInThirdDivSelector
} from "../../BLL/thirdTextArea/selectors";
import { getIsTextAreaInSecondDivActiveSelector } from "../../BLL/secondTextArea/selectors";
import {
    toogleIsTextAreaInFirstDivActive, toogleIsPlaceHolderInFirstDivActive,
    setTextInFirstDivInState
} from "../../BLL/firstTextArea/actionCreators";
import {
    toogleIsTextAreaInThirdDivActive, toogleIsPlaceHolderInThirdDivActive,
    setTextInThirdDivInState
} from "../../BLL/thirdTextArea/actionCreators";
import { toogleIsTextAreaInSecondDivActive } from "../../BLL/secondTextArea/actionCreators";
import { connect } from "react-redux";
import setCaretToStart from "../../helpers/setCaretToStartOfLine/setCaretToStart";
import setCaretToEnd from "../../helpers/setCaretToEndOfLine/setCaretToEnd";
import focusOnElement from "../../helpers/focusOnElement/focusOnElement";

const HomePageContainer = (props) => {

    useEffect(() => {
        if (props.isTextAreaInThirdDivActive) {
            focusOnElement("task__third-textarea");             // сфокусируемся на третьей текстареи если пропс isTextAreaInThirdDivActive изменился на true, то есть такстарея в третьем диве стала активной
        }
    }, [props.isTextAreaInThirdDivActive]);

    // ---------- useState -------------------------------------
    let [firstTextAreaHeight, changeFirstTextAreaHeight] = useState(70);       // текущая высота текстареа, изначально получим ее при первом клике на текстарею, затем при изменении будем сравнивать прошлую высоту с нынешней и менять если не совпадут
    let [thirdTextAreaHeight, changeThirdTextAreaHeight] = useState(70);
    let [taskHeight, changeTaskHeight] = useState(100);             // высота основного враппера, бем менять в зависимости от высоты текстареи(scrollHeight), чтобы полоса прокрутки не появлялась

    const placeHolderTextInFirstTextArea = "Write a new task";
    const placeHolderTextInThirdTextArea = "write note";
    let [taskPlaceHolder, changeTaskPlaceHolder] = useState(placeHolderTextInFirstTextArea);        // Плейсхолдер для первого дива (с таском который)
    let [notePlaceHolder, changeNotePlaceHolder] = useState(placeHolderTextInThirdTextArea);        // Плейсхолдер для первого дива (с таском который)
    // ---------- / useState -----------------------------------


    // ------------ Функция при клике на текстарею -------------------------------------------
    function onFirstTextareaClick(e) {                      // При клике на textArea
        if (!props.isTextareaInFirstDivActive) {                      // Если она не активна
            props.toogleIsTextAreaInFirstDivActive(true);   // сделаем ее активной
            changeFirstTextAreaHeight(e.target.offsetHeight);    // запишем первоночальную высоту текстареи (когда 1 строка) в переменную в стейте
            changeThirdTextAreaHeight(e.target.offsetHeight);    // запишем первоночальную высоту текстареи (когда 1 строка) в переменную в стейте
            setCaretToStart(e.target);                      // функция хелпер, перемещающая каретку в началос строки
        } else if (props.isTextareaInFirstDivActive && props.isPlaceHolderInFirstDivActive) {       // если она активна, но плейсхолдер еще есть
            changeFirstTextAreaHeight(e.target.offsetHeight);    // запишем первоночальную высоту текстареи (когда 1 строка) в переменную в стейте
            setCaretToStart(e.target);                      // функция хелпер, перемещающая каретку в начало строки
        }
    }
    // ------------ / Функция при клике на текстарею -------------------------------------------


    // ------------ Функция при вводе в первую текстарею символа -------------------------------------------
    function onFirstTextareaChange(e) {             // При изменении в textArea в которой печатем таску (первая текстареа)
        let newText = e.target.innerText;           // Для удобства помести текст печатуемый в текстареи в переменную
        const twoLastCharInNewText = newText[newText.length - 2] + newText[newText.length - 1];      // два последних символа печатуемого текста. Чтобы отслеживать когда юзер введет "//" и добавлять новые дивы (текстареи)

        if (props.isPlaceHolderInFirstDivActive) {              // если плейсхолдер активен 
            newText = e.target.innerText[0];         // возьмем из полученного текста первую букву, в противном случае у нас будет текст заканчиваться плейсхолдером
            setCaretToEnd(e.target);                            // переместим каретку в конец строки
            changeTaskPlaceHolder("");                          // изменим значение плейсхолдера на пустую строку
            props.toogleIsPlaceHolderInFirstDivActive(false);   // Изменим в стейте свойство показывающее активен ли плейсхолдер
        } else {                                                // если плейсхолдер не активен
            setCaretToEnd(e.target);                            // при печатании переместим каретку в конец строки
        }

        props.setTextInFirstDivInState(newText);     // изменим текст в стейте

        if (e.target.offsetHeight > firstTextAreaHeight) {             // если новая высота текстареи больше предыдущей
            changeFirstTextAreaHeight(e.target.offsetHeight);          // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            changeTaskHeight(taskHeight + 40);

        } else if (e.target.offsetHeight < firstTextAreaHeight && e.target.offsetHeight != 0) {  // если новая высота текстареи меньше предыдущей и высота не равна 0 (будет тогда когда юзер сотрет все символы из строки)
            changeFirstTextAreaHeight(e.target.offsetHeight);                                    // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            changeTaskHeight(taskHeight - 40);
        } else if (e.target.offsetHeight === 0) {                   // если высота текстареи === 0 (юзер удалил все символы)
            changeTaskPlaceHolder(placeHolderTextInFirstTextArea);              // изменим значение плейсхолдера на изначальное значение
            props.toogleIsPlaceHolderInFirstDivActive(true);        // Изменим в стейте свойство показывающее активен ли плейсхолдер
        }

        if (twoLastCharInNewText === "//") {                                     // если два последних напечатнных символа === "//"
            props.toogleIsTextAreaInSecondDivActive(true);                      // активируем второй див
            let newTextInArr = newText.split('');                               // в массив введенную строку чтобы удалить последние смиволы "//" из первой текстареи
            newTextInArr.length = newTextInArr.length - 2;                      // удаляем последние 2 символа
            newText = newTextInArr.join('');                                    // соединяем обратно в строку
            props.setTextInFirstDivInState(newText);                            // изменим текст в стейте

            props.toogleIsTextAreaInThirdDivActive(true);                      // активируем второй див
        }
    }
    // ------------ / Функция при вводе в первую текстарею символа -----------------------------------------


    // ------------ Функция для определения цвета шрифта в первой текстареи --------------------------------

    function colorForFirstTextArea() {                                             // для определения цвета шрифта для первой текстареи в зависимости от состояний в стейте
        if (props.isTextareaInFirstDivActive && props.isPlaceHolderInFirstDivActive) {
            return "#9E9E9D";
        } else if (!props.isTextareaInFirstDivActive && props.isPlaceHolderInFirstDivActive) {
            return "#606469";
        } else if (props.isTextareaInFirstDivActive && !props.isPlaceHolderInFirstDivActive) {
            return "#000";
        }
    }
    // ------------ / Функция для определения цвета шрифта в первой текстареи ------------------------------


    // ------------ Функция при вводе в третью текстарею символа -------------------------------------------
    function onThirdTextareaChange(e) {             // При изменении в textArea в которой печатем note (третья текстареа)
        let newText = e.target.innerText;           // Для удобства помести текст печатуемый в текстареи в переменную

        if (props.isPlaceHolderInThirdDivActive) {              // если плейсхолдер активен 
            newText = e.target.innerText[0];                    // возьмем из полученного текста первую букву, в противном случае у нас будет текст заканчиваться плейсхолдером
            setCaretToEnd(e.target);                            // переместим каретку в конец строки
            changeNotePlaceHolder("");                          // изменим значение плейсхолдера на пустую строку
            props.toogleIsPlaceHolderInThirdDivActive(false);   // Изменим в стейте свойство показывающее активен ли плейсхолдер
        } else {                                                // если плейсхолдер не активен
            setCaretToEnd(e.target);                            // при печатании переместим каретку в конец строки
        }

        props.setTextInThirdDivInState(newText);                // изменим текст в стейте

        if (e.target.offsetHeight > thirdTextAreaHeight) {             // если новая высота текстареи больше предыдущей
            changeThirdTextAreaHeight(e.target.offsetHeight);          // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            changeTaskHeight(taskHeight + 40);
        } else if (e.target.offsetHeight < thirdTextAreaHeight && e.target.offsetHeight != 0) {  // если новая высота текстареи меньше предыдущей и высота не равна 0 (будет тогда когда юзер сотрет все символы из строки)
            changeThirdTextAreaHeight(e.target.offsetHeight);                                    // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            changeTaskHeight(taskHeight - 40);
        }

        if (newText === "" && props.isTextAreaInThirdDivActive) {               // если текст в текстареи === ""(юзер удалил все символы) и текстарея активна
            changeNotePlaceHolder(placeHolderTextInThirdTextArea);              // изменим значение плейсхолдера на изначальное значение
            props.toogleIsPlaceHolderInThirdDivActive(true);                    // Изменим в стейте свойство показывающее активен ли плейсхолдер
            props.toogleIsTextAreaInThirdDivActive(false);                      // Изменим в стейте свойство показывающее активен ли текст в третьей тексареи
            props.toogleIsTextAreaInSecondDivActive(false);                     // Изменим в стейте свойство показывающее активна ли вторая текстареа

            let textInFirstDiv = props.textInFirstDiv + "/";
            props.setTextInFirstDivInState(textInFirstDiv);     // изменим текст в стейте
            focusOnElement("task__first-textarea", false);
        }
    }
    // ------------ / Функция при вводе в третью текстарею символа -----------------------------------------

    return (
        <HomePage
            isTextareaInFirstDivActive={props.isTextareaInFirstDivActive}
            isPlaceHolderInFirstDivActive={props.isPlaceHolderInFirstDivActive}
            onFirstTextareaClick={onFirstTextareaClick}
            onFirstTextareaChange={onFirstTextareaChange}
            taskHeight={taskHeight}
            firstTextAreaHeight={firstTextAreaHeight}
            taskPlaceHolder={taskPlaceHolder}
            textInFirstDiv={props.textInFirstDiv}
            colorForFirstTextArea={colorForFirstTextArea}
            isTextAreaInSecondDivActive={props.isTextAreaInSecondDivActive}
            isTextAreaInThirdDivActive={props.isTextAreaInThirdDivActive}
            isPlaceHolderInThirdDivActive={props.isPlaceHolderInThirdDivActive}
            textInThirdDiv={props.textInThirdDiv}
            notePlaceHolder={notePlaceHolder}
            onThirdTextareaChange={onThirdTextareaChange}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        isTextareaInFirstDivActive: getIsTextAreaInFirstDivActiveSelector(state),
        isPlaceHolderInFirstDivActive: getIsPlaceHolderInFirstDivActiveSelector(state),
        textInFirstDiv: getTextInFirstDivSelector(state),
        isTextAreaInSecondDivActive: getIsTextAreaInSecondDivActiveSelector(state),
        isTextAreaInThirdDivActive: getIsTextAreaInThirdDivActiveSelector(state),
        isPlaceHolderInThirdDivActive: getiIsPlaceHolderInThirdDivActiveSelector(state),
        textInThirdDiv: getTextInThirdDivSelector(state)
    }
}

const mapDispatchToProps = {
    toogleIsTextAreaInFirstDivActive,
    toogleIsPlaceHolderInFirstDivActive,
    setTextInFirstDivInState,
    toogleIsTextAreaInSecondDivActive,
    toogleIsTextAreaInThirdDivActive,
    toogleIsPlaceHolderInThirdDivActive,
    setTextInThirdDivInState
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);