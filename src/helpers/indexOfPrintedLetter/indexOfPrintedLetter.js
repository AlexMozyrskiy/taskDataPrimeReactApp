// ------------------ Функция для поиска индекса напечатнной буквы -----------------
/*
    Принимает 2 параметра: prevString - строка до того как новая буква напечатана
                           currentString - текузая строка, с вновь напечатанной буквой, индекс которой надо найти

    Сравнивает по очереди все буквы из currentString с prevString, как только нашла не равенство букв возвращает индекс буквы
*/
function indexOfPrintedLetter(prevString, currentString) {
    if(prevString === "") {             // Если prevString не существует, то есть еще не печатли текст до жтого, то есть печатают первую букву, index будет 0
        return 0;
    }

    for(let i = 0; i < prevString.length; i++) {
        if(prevString[i] !== currentString[i]) {
            return i;
        } else if(i === (prevString.length - 1)) {      // дошли до посленей буквы и не нашли различий
            return (currentString.length - 1);          // возвращаем индекс последней буквы
        }
    }
}

export default indexOfPrintedLetter;
// ------------------ / Функция для поиска индекса напечатнной буквы ---------------