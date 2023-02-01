import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./card.css";

import _implicitScopedStylesheets from "./card.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "card": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "card-header": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "card-title": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "card-subtitle": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "card-body": true
  },
  key: 4
};
const stc5 = {
  key: 5
};
const stc6 = [];
const stc7 = {
  classMap: {
    "card-footer": true
  },
  key: 6
};
const stc8 = {
  attrs: {
    "name": "footer"
  },
  key: 7
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, s: api_slot} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [$cmp.title ? api_element("div", stc2, [api_text(api_dynamic_text($cmp.title))]) : null, $cmp.subtitle ? api_element("div", stc3, [api_text(api_dynamic_text($cmp.subtitle))]) : null]), api_element("div", stc4, [api_slot("", stc5, stc6, $slotset)]), api_element("div", stc7, [api_slot("footer", stc8, stc6, $slotset)])])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["", "footer"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "ui-card_card"
}
freezeTemplate(tmpl);
