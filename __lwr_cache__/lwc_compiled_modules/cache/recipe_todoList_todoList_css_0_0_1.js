function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "li:not(:first-child)" + shadowSelector + " {border-top: solid 1px #ecebea;}ul" + shadowSelector + " {list-style: none;margin: 0;padding: 0;}li" + shadowSelector + " {padding-top: 4px;}p" + shadowSelector + " {margin: 0;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];