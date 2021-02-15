import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import {
    getIsTextAreaActiveSelector, getIsPlaceHolderInFirstDivActiveSelector,
    getTextInFirstDivSelector
} from "../../BLL/textArea/selectors";
import {
    toogleIsTextAreaActive, toogleIsPlaceHolderInFirstDivActive,
    setTextInFirstDivInState
} from "../../BLL/textArea/actionCreators";
import { connect } from "react-redux";
import setCaretToStart from "../../helpers/SetCaretToStartOfLine/setCaretToStart";
import setCaretToEnd from "../../helpers/SetCaretToEndOfLine/setCaretToEnd";

const HomePageContainer = (props) => {

    // useEffect( () => {
    //     if(taskPlaceHolder == "") {
    //         changeTaskPlaceHolder("Write a new task");
    //     } else {
    //         changeTaskPlaceHolder("");
    //     }
    // }, [props.isPlaceHolderInFirstDivActive] );

    let [textareaHeight, changeTextareaHeight] = useState(70);       // текущая высота текстареа, изначально получим ее при первом клике на текстарею, затем при изменении будем сравнивать прошлую высоту с нынешней и менять если не совпадут
    let [taskHeight, changeTaskHeight] = useState(100);             // высота основного враппера, бем менять в зависимости от высоты текстареи(scrollHeight), чтобы полоса прокрутки не появлялась

    let [taskPlaceHolder, changeTaskPlaceHolder] = useState("Write a new task");        // Плейсхолдер для первого дива (с таском который)

    function onFirstTextareaClick(e) {                           // При клике на textArea
        if (!props.isTextareaActive) {                       // Если она не активна
            props.toogleIsTextAreaActive(true);             // сделаем ее активной
            changeTextareaHeight(e.target.offsetHeight);    // запишем первоночальную высоту текстареи (когда 1 строка) в переменную в стейте
            setCaretToStart(e.target);                      // функция хелпер, перемещающая каретку в началос строки
            console.log("click on texarea");
        } else if (props.isTextareaActive && props.isPlaceHolderInFirstDivActive) {       // если она активна, но плейсхолдер еще есть
            props.toogleIsTextAreaActive(true);             // сделаем ее активной
            changeTextareaHeight(e.target.offsetHeight);    // запишем первоночальную высоту текстареи (когда 1 строка) в переменную в стейте
            setCaretToStart(e.target);                      // функция хелпер, перемещающая каретку в началос строки
            console.log("click on texarea");
        }
    }

    function onFirstTextareaChange(e) {            // При изменении в textArea в которой печатем таску (первая текстареа)
        setCaretToEnd(e.target);                    // при изменении в первой текстареи переметим каретку в конец строки, так как из стейта вставляется значение в текстарею и каретка оказывается на первой позиции

        if(props.isPlaceHolderInFirstDivActive) {         // если плейсхолдер активен возьмем из полученного текста первую букву, в противном случае у нас будет текст заканчиваться плейсхолдером
            e.target.innerText = e.target.innerText[0];
            setCaretToEnd(e.target);                        // переметим каретку в конец строки
        }
        changeTaskPlaceHolder("");
        props.toogleIsPlaceHolderInFirstDivActive(false);
        props.setTextInFirstDivInState(e.target.innerText);

        if (e.target.offsetHeight > textareaHeight) {             // если новыя высота текстареи больше предыдущей
            changeTextareaHeight(e.target.offsetHeight);         // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            changeTaskHeight(taskHeight + 40);

        } /* else if (e.target.offsetHeight < textareaHeight) {
            changeTextareaHeight(e.target.offsetHeight);         // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            changeTaskHeight(taskHeight - 40);
            changeTaskPlaceHolder("");
        } */
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
        />
    );
}

const mapStateToProps = (state) => {
    return {
        isTextareaActive: getIsTextAreaActiveSelector(state),
        isPlaceHolderInFirstDivActive: getIsPlaceHolderInFirstDivActiveSelector(state),
        textInFirstDiv: getTextInFirstDivSelector(state)
    }
}

const mapDispatchToProps = {
    toogleIsTextAreaActive,
    toogleIsPlaceHolderInFirstDivActive,
    setTextInFirstDivInState
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);