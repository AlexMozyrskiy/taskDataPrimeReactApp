import React from "react";
import cn from "classnames";

const HomePage = (props) => {
    return (
        <div className="page-wrapper">
            <div className={cn("task", {"task-notActive": !props.isTextareaActive}, {"task-active": props.isTextareaActive})} style={{height: props.taskHeight + 'px'}} >
                <div className={cn("task__rhombus", {"task__rhombus-active": props.isTextareaActive})}></div>           { /* Ромб который появлется с лева и потом прячется обратно за оверфлоу хидден */}
                <div className={cn("task__square", {"task__square-notActive": !props.isTextareaActive}, {"task__square-active": props.isTextareaActive})}></div>     {/* Квадрат, который появляется слева при активации формы */}
                <div contentEditable="true"
                    className={cn("task__textarea", {"task__textarea-notActive": !props.isTextareaActive}, {"task__textarea-active": props.isTextareaActive})}
                    // placeholder="Write a new task"
                    style={{height: props.textareaHeight + 'px'}}
                    onClick={(e) => props.onTextareaClick(e.target.scrollHeight)}
                    onInput={(e) => props.onTextareaChange(e.target.scrollHeight, e.target.innerText)}
                    >{props.taskPlaceHolder === "" ? props.taskText : props.taskPlaceHolder}
                    <div contentEditable="true"
                        className="task__texarea2"
                        style={{height: 70 + 'px'}}
                    ></div>
                </div>
                <div className={cn("task__calendar-and-select-wrapper", {"displayNone": !props.isTextareaActive})}>
                    <div className="task__calendar"><p className="icon-calendar"></p></div>
                    <select>
                        <option selected>No List</option>
                        <option>List 1</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
