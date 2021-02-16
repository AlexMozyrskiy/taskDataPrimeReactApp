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
                        suppressContentEditableWarning="true"
                        contentEditable="true"
                        style={{ color: props.colorForFirstTextArea() }}
                        className="task__first-textarea"
                        onClick={(e) => props.onFirstTextareaClick(e)}
                        onInput={(e) => props.onFirstTextareaChange(e)}
                    >{props.isPlaceHolderInFirstDivActive ? props.taskPlaceHolder : props.textInFirstDiv}
                    </div>

                    {props.isTextAreaInSecondDivActive ? <div className="task__second-texarea"><div className="task__two-slash-animation"></div>//</div> : null}

                    {
                        props.isTextAreaInThirdDivActive
                            ? <div
                                suppressContentEditableWarning="true"
                                contentEditable="true"
                                style={{ color: props.colorForFirstTextArea() }}
                                className="task__first-textarea"
                                onClick={(e) => props.onFirstTextareaClick(e)}
                                onInput={(e) => props.onFirstTextareaChange(e)}
                            >{props.isPlaceHolderInThirdDivActive ? props.notePlaceHolder : props.textInThirdDiv}
                            </div>
                            : null
                    }

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
