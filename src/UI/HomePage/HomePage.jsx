import React from "react";

const HomePage = () => {
    return (
        <div class="page-wrapper">
            <div class="task task-notActive">
                <div class="task__rhombus"></div>           { /* Ромб который появлется с лева и потом прячется обратно за оверфлоу хидден */}
                <div class="task__square task__square-notActive"></div>     {/* Квадрат, который появляется слева при активации формы */}
                <textarea class="task__textarea task__textarea-notActive" placeholder="Write a new task"></textarea>
                <div class="task__calendar-and-select-wrapper displayNone">
                    <div class="task__calendar"><p class="icon-calendar"></p></div>
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
