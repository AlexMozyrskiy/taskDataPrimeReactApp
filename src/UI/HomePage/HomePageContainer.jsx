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
import setCaretToIndex from "../../helpers/setCaretToIndex/setCaretToIndex";

const HomePageContainer = (props) => {

    let [textareaHeight, changeTextareaHeight] = useState(70);       // текущая высота текстареа, изначально получим ее при первом клике на текстарею, затем при изменении будем сравнивать прошлую высоту с нынешней и менять если не совпадут
    let [taskHeight, changeTaskHeight] = useState(100);             // высота основного враппера, бем менять в зависимости от высоты текстареи(scrollHeight), чтобы полоса прокрутки не появлялась

    const placeHolderTextInFirstTextArea = "Write a new task";
    const placeHolderTextInThirdTextArea = "write note";
    let [taskPlaceHolder, changeTaskPlaceHolder] = useState(placeHolderTextInFirstTextArea);        // Плейсхолдер для первого дива (с таском который)
    let [notePlaceHolder, changeNotePlaceHolder] = useState(placeHolderTextInThirdTextArea);        // Плейсхолдер для первого дива (с таском который)

    function onFirstTextareaClick(e) {                           // При клике на textArea
        if (!props.isTextareaActive) {                       // Если она не активна
            props.toogleIsTextAreaInFirstDivActive(true);             // сделаем ее активной
            changeTextareaHeight(e.target.offsetHeight);    // запишем первоночальную высоту текстареи (когда 1 строка) в переменную в стейте
            setCaretToStart(e.target);                      // функция хелпер, перемещающая каретку в началос строки
        } else if (props.isTextareaActive && props.isPlaceHolderInFirstDivActive) {       // если она активна, но плейсхолдер еще есть
            changeTextareaHeight(e.target.offsetHeight);    // запишем первоночальную высоту текстареи (когда 1 строка) в переменную в стейте
            setCaretToStart(e.target);                      // функция хелпер, перемещающая каретку в началос строки
        }
    }

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

        if (e.target.offsetHeight > textareaHeight) {             // если новая высота текстареи больше предыдущей
            changeTextareaHeight(e.target.offsetHeight);          // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            changeTaskHeight(taskHeight + 40);

        } else if (e.target.offsetHeight < textareaHeight && e.target.offsetHeight != 0) {  // если новая высота текстареи меньше предыдущей и высота не равна 0 (будет тогда когда юзер сотрет все символы из строки)
            changeTextareaHeight(e.target.offsetHeight);                                    // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            changeTaskHeight(taskHeight - 40);
        } else if (e.target.offsetHeight === 0) {                   // если высота текстареи === 0 (юзер удалил все символы)
            changeTaskPlaceHolder(placeHolderTextInFirstTextArea);              // изменим значение плейсхолдера на изначальное значение
            props.toogleIsPlaceHolderInFirstDivActive(true);        // Изменим в стейте свойство показывающее активен ли плейсхолдер
        }

        if(twoLastCharInNewText === "//") {                                     // если два последних напечатнных символа === "//"
            props.toogleIsTextAreaInSecondDivActive(true);                      // активируем второй див
            let newTextInArr = newText.split('');                               // в массив введенную строку чтобы удалить последние смиволы "//" из первой текстареи
            newTextInArr.length = newTextInArr.length - 2;                      // удаляем последние 2 символа
            newText = newTextInArr.join('');                                    // соединяем обратно в строку
            props.setTextInFirstDivInState(newText);                            // изменим текст в стейте

            props.toogleIsTextAreaInThirdDivActive(true);                      // активируем второй див
        }
    }

    function colorForFirstTextArea() {                                             // для определения цвета шрифта для первой текстареи в зависимости от состояний в стейте
        if(props.isTextareaActive && props.isPlaceHolderInFirstDivActive) {
            return "#9E9E9D";
        } else if(!props.isTextareaActive && props.isPlaceHolderInFirstDivActive) {
            return "#606469";
        } else if(props.isTextareaActive && !props.isPlaceHolderInFirstDivActive) {
            return "#000";
        }
    }

    return (
        <HomePage
            isTextareaActive={props.isTextareaActive}
            isPlaceHolderInFirstDivActive={props.isPlaceHolderInFirstDivActive}
            onFirstTextareaClick={onFirstTextareaClick}
            onFirstTextareaChange={onFirstTextareaChange}
            taskHeight={taskHeight}
            textareaHeight={textareaHeight}
            taskPlaceHolder={taskPlaceHolder}
            textInFirstDiv={props.textInFirstDiv}
            setCaretToIndex={setCaretToIndex}
            colorForFirstTextArea={colorForFirstTextArea}
            isTextAreaInSecondDivActive={props.isTextAreaInSecondDivActive}
            isTextAreaInThirdDivActive={props.isTextAreaInThirdDivActive}
            isPlaceHolderInThirdDivActive={props.isPlaceHolderInThirdDivActive}
            textInThirdDiv={props.textInThirdDiv}
            notePlaceHolder={notePlaceHolder}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        isTextareaActive: getIsTextAreaInFirstDivActiveSelector(state),
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