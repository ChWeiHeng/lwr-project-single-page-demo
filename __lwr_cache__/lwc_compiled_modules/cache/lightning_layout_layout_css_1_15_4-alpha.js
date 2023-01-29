function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {.slds-slot" + shadowSelector + " {display: flex;}}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];