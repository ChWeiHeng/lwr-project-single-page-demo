import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./todoList.css";

import _implicitScopedStylesheets from "./todoList.scoped.css?scoped=true";

import _uiInput from "ui/input";
import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
const stc1 = {
  "label": "Priority Only",
  "type": "checkbox"
};
const stc2 = {
  classMap: {
    "margin-top-small": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "todo-content": true
  },
  key: 4
};
const stc4 = {
  key: 5
};
const stc5 = {
  key: 6
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_custom_element("ui-input", _uiInput, {
    props: stc1,
    key: 1,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleCheckboxChange))
    }
  }), api_element("ul", stc2, api_iterator($cmp.filteredTodos, function (todo) {
    return api_element("li", {
      key: api_key(3, todo.id)
    }, [api_element("div", stc3, [api_element("p", stc4, [api_text(api_dynamic_text(todo.description))]), api_element("p", stc5, [api_text("Priority: " + api_dynamic_text(todo.priority))])])]);
  }))])];
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
  tmpl.stylesheetToken = "recipe-todoList_todoList"
}
freezeTemplate(tmpl);
