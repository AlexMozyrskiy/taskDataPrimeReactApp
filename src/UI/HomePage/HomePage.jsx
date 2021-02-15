import React from "react";
import cn from "classnames";

const HomePage = (props) => {
    return (
        <div className="page-wrapper">
            <div className={cn("task", { "task-notActive": !props.isTextareaActive }, { "task-active": props.isTextareaActive })} style={{ height: props.taskHeight + 'px' }} >
                <div className={cn("task__rhombus", { "task__rhombus-active": props.isTextareaActive })}></div>           { /* Ромб который появлется с лева и потом прячется обратно за оверфлоу хидден */}
                <div className={cn("task__square", { "task__square-notActive": !props.isTextareaActive }, { "task__square-active": props.isTextareaActive })}></div>     {/* Квадрат, который появляется слева при активации формы */}

                <div className={cn("task__textarea-wrapper", { "task__textarea-notActive": !props.isTextareaActive }, { "task__textarea-active": props.isTextareaActive })}
                    style={{ height: props.textareaHeight + 'px' }}
                >

                    <div 
                        contentEditable="true"
                        style={{ color: props.isTextareaActive ? '#9E9E9D' : '#606469' }}
                        className="task__textarea"
                        onClick={(e) => props.onTextareaClick(e)}
                        onInput={(e) => props.onTextareaChange(e.target.offsetHeight, e.target.innerText)}
                    >{props.taskPlaceHolder === "" ? /* props.taskText */ "" : props.taskPlaceHolder}
                    </div>

                    {/* <div contentEditable="true"
                        className="task__textarea"
                        // placeholder="Write a new task"
                        onInput={(e) => props.onTextareaChange(e.target.offsetHeight, e.target.innerText)}
                    >{props.taskPlaceHolder === "" ? props.taskText : props.taskPlaceHolder}
                    </div> */}

                </div>

                <div className={cn("task__calendar-and-select-wrapper", { "displayNone": !props.isTextareaActive })}>
                    <div className="task__calendar"><p className="icon-calendar"></p></div>
                    <select defaultValue="1">
                        <option>No List</option>
                        <option>List 1</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
