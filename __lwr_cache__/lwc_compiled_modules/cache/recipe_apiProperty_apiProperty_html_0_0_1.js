import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apiProperty.css";

import _implicitScopedStylesheets from "./apiProperty.scoped.css?scoped=true";

import _uiInput from "ui/input";
import _recipeChartBar from "recipe/chartBar";
import _recipeViewSource from "recipe/viewSource";
import _uiCard from "ui/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "ApiProperty"
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
    "source": "recipe/apiProperty"
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, t: api_text} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("ui-card", _uiCard, stc0, [api_element("div", stc1, [api_custom_element("ui-input", _uiInput, {
    props: {
      "label": "Percentage",
      "type": "number",
      "min": "0",
      "max": "100",
      "value": $cmp.percentage
    },
    key: 2,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handlePercentageChange))
    }
  }), api_custom_element("recipe-chart-bar", _recipeChartBar, {
    props: {
      "percentage": $cmp.percentage
    },
    key: 3
  })]), api_custom_element("recipe-view-source", _recipeViewSource, stc2, [api_text("Parent-to-child communication. Pass data to a child component using its public (@api) properties.")])])];
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
  tmpl.stylesheetToken = "recipe-apiProperty_apiProperty"
}
freezeTemplate(tmpl);
