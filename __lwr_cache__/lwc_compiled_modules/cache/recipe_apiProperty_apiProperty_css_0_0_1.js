function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "recipe-chart-bar" + shadowSelector + " {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;padding: 10px 2px 2px 2px;margin-top: 16px;}recipe-chart-bar" + shadowSelector + ":before {content: 'recipe-chart-bar';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];