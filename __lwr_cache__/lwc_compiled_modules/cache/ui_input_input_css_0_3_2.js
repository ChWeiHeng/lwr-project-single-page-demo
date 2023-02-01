function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".field-label" + shadowSelector + " {font-size: 1.4rem;color: gray;display: block;}div.checkbox" + shadowSelector + " {display: block;padding-bottom: 8px;position: relative;}div.checkbox" + shadowSelector + " input" + shadowSelector + " {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}div.checkbox" + shadowSelector + " .checkbox-label" + shadowSelector + " > span" + shadowSelector + " {float: none;padding-left: 2rem;}div.checkbox" + shadowSelector + " span.checkbox" + shadowSelector + " {position: absolute;top: 0;left: 0;height: 18px;width: 18px;margin-top: 5px;background-color: #eee;}div.checkbox" + shadowSelector + " span.checkbox:hover" + shadowSelector + " {background-color: #ccc;}div.checkbox" + shadowSelector + " span.checkbox.checked" + shadowSelector + " {background-color: var(--button-color-bg);}.input" + shadowSelector + " {appearance: none;background: 0 0;border: none;color: var(--color-text);font-size: 1.6rem;font-weight: 300;font-family: inherit;position: relative;padding: 4px;background-size: 20px 20px;background-repeat: no-repeat;background-position-y: center;background-position-x: 4px;width: 170px;background-color: var(--color-bg-search);outline: none;cursor: pointer;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];