function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "ul" + shadowSelector + " {list-style: none;padding: 0;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];