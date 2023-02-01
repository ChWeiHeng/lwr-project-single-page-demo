function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".container" + shadowSelector + " {overflow: hidden;color: #f5b041;display: flex;margin-top: 6px;}.text" + shadowSelector + " {margin-top: 5px;margin-left: 4px;}.bar" + shadowSelector + " {margin-left: 4px;height: 36px;background-color: #f5b041;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];