import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _uiLayoutItem from "ui/layoutItem";
import _uiLayout from "ui/layout";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<main${3}></main>`;
const $fragment2 = parseFragment`<div class="navigation-line-css${0}"${2}></div>`;
const $fragment3 = parseFragment`<div class="page-section page-header${0}"${2}><h2${3}>Header</h2></div>`;
const $fragment4 = parseFragment`<div class="page-section page-right${0}"${2}><h2${3}>Left Sidebar</h2><p${3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>`;
const $fragment5 = parseFragment`<div class="page-section page-main${0}"${2}><h2${3}>Main</h2><p${3}>Donec viverra pellentesque aliquet. Praesent quis tristique mauris, ac tincidunt ante. Nulla lectus nisi, tempor quis malesuada ac, consequat in velit. Nullam aliquam mauris eu magna dictum, in ornare risus convallis. Nunc condimentum ornare libero sit amet rhoncus. Aliquam tellus nisl, tristique sit amet congue in, tristique vel risus. Morbi leo ligula, blandit nec commodo at, pulvinar vitae libero. Mauris ipsum erat, aliquam a turpis vitae, faucibus viverra arcu. Donec id purus luctus enim elementum molestie sit amet ac libero.</p><p${3}>Mauris cursus felis elementum ipsum placerat, in maximus justo pretium. Nam nec sapien maximus justo feugiat tristique. Mauris viverra erat vitae arcu feugiat, sed posuere purus vulputate. Sed et nulla ut magna iaculis fringilla. Integer eget blandit elit. Phasellus nulla augue, lobortis a elementum tempus, auctor et felis. Fusce quis lorem tincidunt risus ullamcorper pharetra. Sed elit nulla, efficitur a lorem quis, mollis tristique elit. Etiam odio libero, ornare sed vehicula in, sagittis et erat. Integer at justo molestie, suscipit dui vel, scelerisque ex. Nulla non metus pulvinar, egestas neque et, tincidunt tellus. Praesent egestas scelerisque tristique. Nullam sodales ex acmetus tincidunt accumsan. Cras vitae consequat odio. Pellentesque facilisis lobortis lorem, at placerat mauris sagittis a.</p></div>`;
const $fragment6 = parseFragment`<h2${3}>Right Sidebar</h2>`;
const $fragment7 = parseFragment`<div class="page-footer page-section${0}"${2}><h2${3}>Footer</h2></div>`;
const stc0 = {
  classMap: {
    "c-container": true
  },
  key: 4
};
const stc1 = {
  props: {
    "multipleRows": "true"
  },
  key: 5
};
const stc2 = {
  props: {
    "padding": "around-small",
    "size": "12"
  },
  key: 6
};
const stc3 = {
  props: {
    "padding": "around-small",
    "size": "12"
  },
  key: 9
};
const stc4 = {
  key: 10
};
const stc5 = {
  props: {
    "padding": "around-small",
    "size": "3"
  },
  key: 11
};
const stc6 = {
  props: {
    "padding": "around-small",
    "size": "6"
  },
  key: 14
};
const stc7 = {
  props: {
    "padding": "around-small",
    "size": "3"
  },
  key: 17
};
const stc8 = {
  classMap: {
    "page-section": true,
    "page-right": true
  },
  key: 18
};
const stc9 = {
  key: 21
};
const stc10 = {
  key: 22
};
const stc11 = {
  attrs: {
    "href": "#"
  },
  key: 23
};
const stc12 = {
  key: 24
};
const stc13 = {
  attrs: {
    "href": "#"
  },
  key: 25
};
const stc14 = {
  key: 26
};
const stc15 = {
  attrs: {
    "href": "#"
  },
  key: 27
};
const stc16 = {
  key: 28
};
const stc17 = {
  attrs: {
    "href": "#"
  },
  key: 29
};
const stc18 = {
  key: 30
};
const stc19 = {
  attrs: {
    "href": "#"
  },
  key: 31
};
const stc20 = {
  props: {
    "flexibility": "auto",
    "padding": "around-small",
    "size": "12"
  },
  key: 32
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, t: api_text, h: api_element} = $api;
  return [api_static_fragment($fragment1(), 1), api_static_fragment($fragment2(), 3), api_element("div", stc0, [api_custom_element("ui-layout", _uiLayout, stc1, [api_custom_element("ui-layout-item", _uiLayoutItem, stc2, [api_static_fragment($fragment3(), 8)]), api_custom_element("ui-layout-item", _uiLayoutItem, stc3, [api_custom_element("ui-layout", _uiLayout, stc4, [api_custom_element("ui-layout-item", _uiLayoutItem, stc5, [api_static_fragment($fragment4(), 13)]), api_custom_element("ui-layout-item", _uiLayoutItem, stc6, [api_static_fragment($fragment5(), 16)]), api_custom_element("ui-layout-item", _uiLayoutItem, stc7, [api_element("div", stc8, [api_static_fragment($fragment6(), 20), api_element("ul", stc9, [api_element("li", stc10, [api_element("a", stc11, [api_text("Archive 1")])]), api_element("li", stc12, [api_element("a", stc13, [api_text("Archive 2")])]), api_element("li", stc14, [api_element("a", stc15, [api_text("Archive 3")])]), api_element("li", stc16, [api_element("a", stc17, [api_text("Archive 4")])]), api_element("li", stc18, [api_element("a", stc19, [api_text("Archive 5")])])])])])])]), api_custom_element("ui-layout-item", _uiLayoutItem, stc20, [api_static_fragment($fragment7(), 34)])])])];
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
