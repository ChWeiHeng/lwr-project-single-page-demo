import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apiSetterGetter.css";

import _implicitScopedStylesheets from "./apiSetterGetter.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _uiButton from "ui/button";
import _recipeTodoList from "recipe/todoList";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "ApiSetterGetter"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  "label": "Add Todo"
};
const stc3 = {
  attrs: {
    "slot": "footer"
  },
  props: {
    "source": "recipe/apiSetterGetter"
  },
  key: 6
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, t: api_text} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("ui-input", _uiInput, {
    props: {
      "label": "Description",
      "value": $cmp.description
    },
    key: 2,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleDescriptionChange))
    }
  }), api_custom_element("ui-input", _uiInput, {
    props: {
      "label": "Priority",
      "type": "checkbox",
      "checked": $cmp.priority
    },
    key: 3,
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handlePriorityChange))
    }
  }), api_custom_element("ui-button", _uiButton, {
    props: stc2,
    key: 4,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleSave))
    }
  }), api_custom_element("recipe-todo-list", _recipeTodoList, {
    props: {
      "todos": $cmp.todos
    },
    key: 5
  })]), api_custom_element("recipe-view-source", _recipeViewSource, stc3, [api_text("Parent-to-child communication. Pass data to a child component using a public (@api) property implemented with a setter and getter, and apply some logic to the data as the property is being set.")])])];
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
  tmpl.stylesheetToken = "recipe-apiSetterGetter_apiSetterGetter"
}
freezeTemplate(tmpl);
