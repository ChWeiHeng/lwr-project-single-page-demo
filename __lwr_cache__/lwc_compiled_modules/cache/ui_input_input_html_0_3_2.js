import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./input.css";

import _implicitScopedStylesheets from "./input.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<input type="checkbox"${3}>`;
const stc0 = {
  key: 0
};
const stc1 = {
  classMap: {
    "field-label": true
  },
  key: 1
};
const stc2 = {
  key: 2
};
const stc3 = {
  "input": true
};
const stc4 = {
  classMap: {
    "checkbox": true
  },
  key: 4
};
const stc5 = {
  "checkbox": true
};
const stc6 = {
  classMap: {
    "checkbox-label": true
  },
  key: 8
};
const stc7 = {
  key: 9
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, b: api_bind, st: api_static_fragment} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("div", stc0, [!$cmp.isCheckboxField ? api_element("label", stc1, [api_text(api_dynamic_text($cmp.label))]) : null, api_element("div", stc2, [!$cmp.isCheckboxField ? api_element("input", {
    classMap: stc3,
    attrs: {
      "type": $cmp.type
    },
    props: {
      "value": $cmp.valuePrivate
    },
    key: 3,
    on: {
      "keyup": _m0 || ($ctx._m0 = api_bind($cmp.keyupHandler)),
      "change": _m1 || ($ctx._m1 = api_bind($cmp.changeHandler))
    }
  }) : null, $cmp.isCheckboxField ? api_element("div", stc4, [api_static_fragment($fragment1(), 6), api_element("span", {
    classMap: stc5,
    key: 7,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.changeCheckboxHandler))
    }
  }), api_element("label", stc6, [api_element("span", stc7, [api_text(api_dynamic_text($cmp.label))])])]) : null])])];
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
  tmpl.stylesheetToken = "ui-input_input"
}
freezeTemplate(tmpl);
