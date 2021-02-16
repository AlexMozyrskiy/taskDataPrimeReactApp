import setCaretToStart from "../setCaretToStartOfLine/setCaretToStart";
import setCaretToEnd from "../setCaretToEndOfLine/setCaretToEnd";

function focusOnElement(className, setCaretToStartProp = true) {
    const el = document.querySelector("." + className);
    el.focus();
    setCaretToStartProp ? setCaretToStart(el) : setCaretToEnd(el);
    
}

export default focusOnElement;