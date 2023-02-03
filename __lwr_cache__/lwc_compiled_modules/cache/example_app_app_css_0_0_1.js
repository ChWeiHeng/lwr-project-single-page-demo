function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "main" + shadowSelector + " {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1" + shadowSelector + " {color: #1798c1;}.navigation-line-css" + shadowSelector + " {width: 100%;border: 1px solid white;border-radius: 5px;background-color: #52b9fb;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];