// -------------------- Выставляет каретку в начало строки -----------------------
/*
    Параметр el - элемент html
*/
function setCaretToEnd(el) {

    /*
        Тут Мы высталяем курсор в начало строки, а если передать в range.collapse(false); каретка выставится в конец строки.
        Важно применить window.getSelection().removeAllRanges();, чтобы каретка стерлась из места строки куда мы кликнули.
    */
    let range = new Range();
    range.selectNodeContents(el);                   // создаем обеъкт range только из содержимого узла (без тегов)
    range.collapse(false);                          // Метод collapse объединяет граничные точки объекта Range. В качестве единственного аргумента принимает булево значение (true – для объединения в верхней точке(начало строки), false(конец строки) – в нижней). По умолчанию true.
    window.getSelection().removeAllRanges();        // удаляет переданный (все) объект Range из выделения.
    window.getSelection().addRange(range);          // Метод addRange принимает в качестве аргумента объект Range и добавляет его в выделение
}

export default setCaretToEnd;
// -------------------- / Выставляет каретку в начало строки ---------------------