function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ((useActualHostSelector ? ":host {text-align: left;}" : hostSelector + " {text-align: left;}")) + ".description" + shadowSelector + " {color: #706e6b;}a" + shadowSelector + " {color: var(--color-text-link);text-decoration: var(--text-decoration);}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];