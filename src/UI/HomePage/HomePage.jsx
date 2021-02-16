import React from "react";
import cn from "classnames";

const HomePage = (props) => {
    return (
        <div className="page-wrapper">
            <div className={cn("task", { "task-notActive": !props.isTextareaInFirstDivActive }, { "task-active": props.isTextareaInFirstDivActive })} style={{ height: props.taskHeight + 'px' }} >
                <div className={cn("task__rhombus", { "task__rhombus-active": props.isTextareaInFirstDivActive })}></div>           { /* Ромб который появлется с лева и потом прячется обратно за оверфлоу хидден */}
                <div className={cn("task__square", { "task__square-notActive": !props.isTextareaInFirstDivActive }, { "task__square-active": props.isTextareaInFirstDivActive })}></div>     {/* Квадрат, который появляется слева при активации формы */}

                <div className={cn("task__textarea-wrapper", { "task__textarea-notActive": !props.isTextareaInFirstDivActive }, { "task__textarea-active": props.isTextareaInFirstDivActive })}
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

                    {props.isTextAreaInSecondDivActive ? <div className="task__second-texarea"><div className="task__two-slash-animation"></div>// </div> : null}

                    {
                        props.isTextAreaInThirdDivActive
                            ? <div
                                suppressContentEditableWarning="true"
                                contentEditable="true"
                                style={{ color: props.isPlaceHolderInThirdDivActive ? "#C5BAA4" : "#7F6233" }}
                                className="task__third-textarea"
                                // onClick={(e) => props.onFirstTextareaClick(e)}
                                onInput={(e) => props.onThirdTextareaChange(e)}
                            >{props.isPlaceHolderInThirdDivActive ? props.notePlaceHolder : props.textInThirdDiv}
                            </div>
                            : null
                    }

                </div>

                <div className={cn("task__calendar-and-select-wrapper", { "displayNone": !props.isTextareaInFirstDivActive })}>
                    <div className="task__calendar"></div>
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
