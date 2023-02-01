import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./chartBar.css";

import _implicitScopedStylesheets from "./chartBar.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "text": true
  },
  key: 1
};
const stc2 = {
  "bar": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [api_text(api_dynamic_text($cmp.percentage) + "%")]), api_element("div", {
    classMap: stc2,
    style: $cmp.style,
    key: 2
  })])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "recipe-chartBar_chartBar"
}
freezeTemplate(tmpl);
