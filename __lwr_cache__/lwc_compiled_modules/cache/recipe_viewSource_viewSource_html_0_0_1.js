import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./viewSource.css";

import _implicitScopedStylesheets from "./viewSource.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "description": true
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = [];
const stc3 = {
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot, h: api_element, t: api_text} = $api;
  return [api_element("div", stc0, [api_slot("", stc1, stc2, $slotset)]), api_element("p", stc3, [api_element("a", {
    attrs: {
      "href": $cmp.sourceURL,
      "target": "source"
    },
    key: 3
  }, [api_text("View Source")])])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "recipe-viewSource_viewSource"
}
freezeTemplate(tmpl);
