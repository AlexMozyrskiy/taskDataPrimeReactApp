import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import { getIsTextAreaActiveSelector } from "../../BLL/textArea/selectors";
import { toogleIsTextAreaActive } from "../../BLL/textArea/actionCreators";
import { connect } from "react-redux";

const HomePageContainer = (props) => {

    let [textareaHeight, changeTextareaHeight] = useState(70);       // текущая высота текстареа, изначально получим ее при первом клике на текстарею, затем при изменении будем сравнивать прошлую высоту с нынешней и менять если не совпадут
    let [taskHeight, changeTaskHeight] = useState(100);             // высота основного враппера, бем менять в зависимости от высоты текстареи(scrollHeight), чтобы полоса прокрутки не появлялась

    let [taskText, changeTaskText] = useState("");                                  // то что печатаем
    let [taskPlaceHolder, changeTaskPlaceHolder] = useState("Write a new task");        // Плейсхолдер для первого дива с таском который

    function onTextareaClick(firstTextareaScrollHeight) {            // При клике на textArea
        if(!props.isTextareaActive) {       // Если она не активна
            props.toogleIsTextAreaActive(true); // сделаем ее активной
            changeTextareaHeight(firstTextareaScrollHeight); // запишем первоночальную высоту текстареи (когда 1 строка) в переменную в стейте
        }
    }

    function onTextareaChange(changedTextareaScrollHeight, value) {            // При изменении в textArea
        
        console.log("Полученное из инпута значение = ", value);
        if(changedTextareaScrollHeight > textareaHeight) {             // если новыя высота текстареи больше предыдущей
            changeTextareaHeight(changedTextareaScrollHeight);         // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            let newTaskDivHeight = taskHeight + 40;
            changeTaskHeight(newTaskDivHeight);
        } else if (changedTextareaScrollHeight < textareaHeight) {
            changeTextareaHeight(changedTextareaScrollHeight);         // изменим текущую высоту в стейте, чтобы это условие выполнялось потом при дальнейшем изменении высоты, если юзер продолжит печатать и добавлять стороки
            let newTaskDivHeight = taskHeight - 40;
            changeTaskHeight(newTaskDivHeight);
        }
        console.log(taskText);
    }

    return (
        <HomePage
            isTextareaActive={props.isTextareaActive}
            onTextareaClick={onTextareaClick}
            onTextareaChange={onTextareaChange}
            taskHeight={taskHeight}
            textareaHeight={textareaHeight}
            taskPlaceHolder={taskPlaceHolder}
            taskText={taskText}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        isTextareaActive: getIsTextAreaActiveSelector(state)
    }
}

export default connect(mapStateToProps, { toogleIsTextAreaActive })(HomePageContainer);