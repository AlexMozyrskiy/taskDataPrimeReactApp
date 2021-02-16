// -------------------- Выставляет каретку в начало строки -----------------------
/*
    Параметры el - элемент html
              index - индекс буквы куда переводим каретку
*/
function setCaretToIndex(el, index) {
    /*
        Тут мы явно указываем индекс буквы на которую надо установить каректу.
        Важно применить window.getSelection().removeAllRanges();, чтобы каретка стерлась из места где она находилась и снялись все выделения текста.
    */
    let range = new Range();

    range.setStart(el.childNodes[0], index);      // поставить кретку на позицию 5 дочернего нода, то есть текста
    // range.setEnd(el.childNodes[0], 2);        // по
    
    window.getSelection().removeAllRanges();

    window.getSelection().addRange(range);    // применим этот диапазон к выделению документа
    debugger
}

export default setCaretToIndex;
// -------------------- / Выставляет каретку в начало строки ---------------------