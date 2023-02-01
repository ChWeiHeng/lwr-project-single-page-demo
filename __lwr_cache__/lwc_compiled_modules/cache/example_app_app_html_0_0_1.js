import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _recipeViewSource from "recipe/viewSource";
import _recipeHelloForEach from "recipe/helloForEach";
import _recipeApiSetterGetter from "recipe/apiSetterGetter";
import _recipeApiProperty from "recipe/apiProperty";
import _uiCard from "ui/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<main${3}><img src="assets/images/recipes-logo.png" alt="logo1"${3}><img src="assets/images/recipes-logo1.png" alt="logo2"${3}><img src="assets-node/images/profile_avatar_200.png" alt="logo3"${3}><h1${3}>Hello World!</h1></main>`;
const stc0 = {
  props: {
    "title": "HelloBinding"
  },
  key: 2
};
const stc1 = {
  key: 3
};
const stc2 = {
  key: 4
};
const stc3 = {
  attrs: {
    "slot": "footer"
  },
  props: {
    "source": "recipe/helloBinding"
  },
  key: 6
};
const stc4 = {
  key: 7
};
const stc5 = {
  key: 8
};
const stc6 = {
  key: 9
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, d: api_dynamic_text, t: api_text, h: api_element, b: api_bind, c: api_custom_element} = $api;
  const {_m0} = $ctx;
  return [api_static_fragment($fragment1(), 1), api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_element("p", stc2, [api_text("Hello, " + api_dynamic_text($cmp.greeting) + "!")]), api_custom_element("ui-input", _uiInput, {
    props: {
      "label": "Name",
      "value": $cmp.greeting
    },
    key: 5,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    }
  })]), api_custom_element("recipe-view-source", _recipeViewSource, stc3, [api_text("Change the value of a bound property when the value of an input field changes. Type something in the input field to see the recipe in action.")]), api_custom_element("recipe-hello-for-each", _recipeHelloForEach, stc4), api_custom_element("recipe-api-setter-getter", _recipeApiSetterGetter, stc5), api_custom_element("recipe-api-property", _recipeApiProperty, stc6)])];
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
  tmpl.stylesheetToken = "example-app_app"
}
freezeTemplate(tmpl);
