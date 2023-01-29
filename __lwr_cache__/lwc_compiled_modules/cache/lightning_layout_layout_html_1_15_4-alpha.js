import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./layout.css";

import _implicitScopedStylesheets from "./layout.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-slot": true
  },
  key: 0
};
const stc1 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot} = $api;
  return [api_slot("", stc0, stc1, $slotset)];
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
  tmpl.stylesheetToken = "lightning-layout_layout"
}
freezeTemplate(tmpl);
