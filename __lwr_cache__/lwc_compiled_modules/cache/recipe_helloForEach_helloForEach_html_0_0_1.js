import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./helloForEach.css";

import _implicitScopedStylesheets from "./helloForEach.scoped.css?scoped=true";

import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "HelloForEach"
  },
  key: 0
};
const stc1 = {
  key: 1
};
const stc2 = {
  attrs: {
    "slot": "footer"
  },
  props: {
    "source": "recipe/helloForEach"
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, c: api_custom_element} = $api;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("ul", stc1, api_iterator($cmp.contacts, function (contact) {
    return api_element("li", {
      key: api_key(2, contact.Id)
    }, [api_text(api_dynamic_text(contact.Name) + ", " + api_dynamic_text(contact.Title))]);
  })), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Loop through an array of items in a template.")])])];
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
  tmpl.stylesheetToken = "recipe-helloForEach_helloForEach"
}
freezeTemplate(tmpl);
