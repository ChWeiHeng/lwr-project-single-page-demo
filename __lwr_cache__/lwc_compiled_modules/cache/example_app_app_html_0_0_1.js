import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _lightningCard from "lightning/card";
import _lightningButton from "lightning/button";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<main${3}><img src="assets/images/recipes-logo.png" alt="logo"${3}><h1${3}>Hello World!</h1></main>`;
const $fragment2 = parseFragment`<p class="slds-p-horizontal_small${0}"${2}>Card Body here</p>`;
const $fragment3 = parseFragment`<p class="slds-p-horizontal_small${0}"${2}>Card Body (custom component)</p>`;
const $fragment4 = parseFragment`<span class="slds-media__body${0}"${2}>Accounts</span>`;
const $fragment5 = parseFragment`<span class="slds-media__body${0}"${2}>Approvals</span>`;
const $fragment6 = parseFragment`<span class="slds-media__body${0}"${2}>Leads</span>`;
const $fragment7 = parseFragment`<h2${3}>Item One Content</h2>`;
const $fragment8 = parseFragment`<h2${3}>Item Two Content</h2>`;
const $fragment9 = parseFragment`<h2${3}>Item Three Content</h2>`;
const $fragment10 = parseFragment`<h2${3}>Item Four Content</h2>`;
const $fragment11 = parseFragment`<h2${3}>Item Five Content</h2>`;
const stc0 = {
  props: {
    "title": "Hello"
  },
  key: 2
};
const stc1 = {
  attrs: {
    "slot": "footer"
  },
  key: 5
};
const stc2 = {
  props: {
    "title": "Hello"
  },
  key: 6
};
const stc3 = {
  attrs: {
    "slot": "actions"
  },
  props: {
    "label": "New"
  },
  key: 7
};
const stc4 = {
  attrs: {
    "slot": "footer"
  },
  key: 10
};
const stc5 = {
  classMap: {
    "demo-only": true
  },
  styleDecls: [["height", "12rem", false]],
  key: 11
};
const stc6 = {
  classMap: {
    "slds-tabs_default": true
  },
  key: 12
};
const stc7 = {
  classMap: {
    "slds-tabs_default__nav": true
  },
  attrs: {
    "role": "tablist"
  },
  key: 13
};
const stc8 = {
  classMap: {
    "slds-tabs_default__item": true,
    "slds-is-active": true
  },
  attrs: {
    "title": "Opportunities",
    "role": "presentation"
  },
  key: 14
};
const stc9 = {
  "slds-tabs_default__link": true
};
const stc10 = {
  classMap: {
    "slds-tabs__left-icon": true
  },
  key: 16
};
const stc11 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-opportunity": true
  },
  attrs: {
    "title": "Opportunities"
  },
  key: 17
};
const stc12 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 18,
  svg: true
};
const stc13 = {
  classMap: {
    "slds-tabs_default__item": true
  },
  attrs: {
    "title": "Cases",
    "role": "presentation"
  },
  key: 20
};
const stc14 = {
  classMap: {
    "slds-tabs__left-icon": true
  },
  key: 22
};
const stc15 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-case": true
  },
  attrs: {
    "title": "Cases"
  },
  key: 23
};
const stc16 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 24,
  svg: true
};
const stc17 = {
  classMap: {
    "slds-tabs_default__item": true
  },
  attrs: {
    "title": "Products",
    "role": "presentation"
  },
  key: 26
};
const stc18 = {
  classMap: {
    "slds-tabs__left-icon": true
  },
  key: 28
};
const stc19 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-product": true
  },
  attrs: {
    "title": "Products"
  },
  key: 29
};
const stc20 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 30,
  svg: true
};
const stc21 = {
  classMap: {
    "slds-tabs_default__item": true
  },
  attrs: {
    "title": "Price Books",
    "role": "presentation"
  },
  key: 32
};
const stc22 = {
  classMap: {
    "slds-tabs__left-icon": true
  },
  key: 34
};
const stc23 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-pricebook": true
  },
  attrs: {
    "title": "Price Books"
  },
  key: 35
};
const stc24 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 36,
  svg: true
};
const stc25 = {
  classMap: {
    "slds-tabs_default__item": true
  },
  attrs: {
    "title": "Contacts",
    "role": "presentation"
  },
  key: 38
};
const stc26 = {
  classMap: {
    "slds-tabs__left-icon": true
  },
  key: 40
};
const stc27 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-contact": true
  },
  attrs: {
    "title": "Contacts"
  },
  key: 41
};
const stc28 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 42,
  svg: true
};
const stc29 = {
  classMap: {
    "slds-tabs_default__item": true,
    "slds-tabs_default__overflow-button": true
  },
  attrs: {
    "title": "More Tabs",
    "role": "presentation"
  },
  key: 44
};
const stc30 = {
  classMap: {
    "slds-dropdown-trigger": true,
    "slds-dropdown-trigger_click": true,
    "slds-is-open": true
  },
  key: 45
};
const stc31 = {
  classMap: {
    "slds-button": true
  },
  attrs: {
    "aria-haspopup": "true"
  },
  key: 46
};
const stc32 = {
  classMap: {
    "slds-button__icon": true,
    "slds-button__icon_x-small": true,
    "slds-button__icon_right": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 47,
  svg: true
};
const stc33 = {
  classMap: {
    "slds-dropdown": true,
    "slds-dropdown_right": true
  },
  key: 49
};
const stc34 = {
  classMap: {
    "slds-dropdown__list": true,
    "slds-dropdown_length-with-icon-10": true
  },
  attrs: {
    "role": "menu"
  },
  key: 50
};
const stc35 = {
  classMap: {
    "slds-dropdown__item": true
  },
  attrs: {
    "role": "presentation"
  },
  key: 51
};
const stc36 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "Accounts"
  },
  key: 53
};
const stc37 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true
  },
  key: 54
};
const stc38 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 55
};
const stc39 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-account": true
  },
  attrs: {
    "title": "Description of icon when needed"
  },
  key: 56
};
const stc40 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 57,
  svg: true
};
const stc41 = {
  classMap: {
    "slds-dropdown__item": true
  },
  attrs: {
    "role": "presentation"
  },
  key: 61
};
const stc42 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "Approvals"
  },
  key: 63
};
const stc43 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true
  },
  key: 64
};
const stc44 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 65
};
const stc45 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-approval": true
  },
  attrs: {
    "title": "Description of icon when needed"
  },
  key: 66
};
const stc46 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 67,
  svg: true
};
const stc47 = {
  classMap: {
    "slds-dropdown__item": true
  },
  attrs: {
    "role": "presentation"
  },
  key: 71
};
const stc48 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "Lead"
  },
  key: 73
};
const stc49 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true
  },
  key: 74
};
const stc50 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 75
};
const stc51 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-lead": true
  },
  attrs: {
    "title": "Description of icon when needed"
  },
  key: 76
};
const stc52 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 77,
  svg: true
};
const stc53 = {
  "slds-tabs_default__content": true,
  "slds-show": true
};
const stc54 = {
  "slds-tabs_default__content": true,
  "slds-hide": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, t: api_text, h: api_element, c: api_custom_element, fid: api_scoped_frag_id, gid: api_scoped_id} = $api;
  return [api_static_fragment($fragment1(), 1), api_custom_element("lightning-card", _lightningCard, stc0, [api_static_fragment($fragment2(), 4), api_element("p", stc1, [api_text("Card Footer")])]), api_custom_element("lightning-card", _lightningCard, stc2, [api_custom_element("lightning-button", _lightningButton, stc3), api_static_fragment($fragment3(), 9), api_element("p", stc4, [api_text("Card Footer")])]), api_element("div", stc5, [api_element("div", stc6, [api_element("ul", stc7, [api_element("li", stc8, [api_element("a", {
    classMap: stc9,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "tab",
      "tabindex": "0",
      "aria-selected": "true",
      "aria-controls": api_scoped_id("tab-default-1"),
      "id": api_scoped_id("tab-default-1__item")
    },
    key: 15
  }, [api_element("span", stc10, [api_element("span", stc11, [api_element("svg", stc12, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#opportunity")
    },
    key: 19,
    svg: true
  })])])]), api_text("Opportunities")])]), api_element("li", stc13, [api_element("a", {
    classMap: stc9,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "tab",
      "tabindex": "-1",
      "aria-selected": "false",
      "aria-controls": api_scoped_id("tab-default-2"),
      "id": api_scoped_id("tab-default-2__item")
    },
    key: 21
  }, [api_element("span", stc14, [api_element("span", stc15, [api_element("svg", stc16, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#case")
    },
    key: 25,
    svg: true
  })])])]), api_text("Cases")])]), api_element("li", stc17, [api_element("a", {
    classMap: stc9,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "tab",
      "tabindex": "-1",
      "aria-selected": "false",
      "aria-controls": api_scoped_id("tab-default-3"),
      "id": api_scoped_id("tab-default-3__item")
    },
    key: 27
  }, [api_element("span", stc18, [api_element("span", stc19, [api_element("svg", stc20, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#product")
    },
    key: 31,
    svg: true
  })])])]), api_text("Products")])]), api_element("li", stc21, [api_element("a", {
    classMap: stc9,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "tab",
      "tabindex": "-1",
      "aria-selected": "false",
      "aria-controls": api_scoped_id("tab-default-4"),
      "id": api_scoped_id("tab-default-4__item")
    },
    key: 33
  }, [api_element("span", stc22, [api_element("span", stc23, [api_element("svg", stc24, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#pricebook")
    },
    key: 37,
    svg: true
  })])])]), api_text("Price Books")])]), api_element("li", stc25, [api_element("a", {
    classMap: stc9,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "tab",
      "tabindex": "-1",
      "aria-selected": "false",
      "aria-controls": api_scoped_id("tab-default-5"),
      "id": api_scoped_id("tab-default-5__item")
    },
    key: 39
  }, [api_element("span", stc26, [api_element("span", stc27, [api_element("svg", stc28, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#contact")
    },
    key: 43,
    svg: true
  })])])]), api_text("Contacts")])]), api_element("li", stc29, [api_element("div", stc30, [api_element("button", stc31, [api_text("More"), api_element("svg", stc32, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#down")
    },
    key: 48,
    svg: true
  })])]), api_element("div", stc33, [api_element("ul", stc34, [api_element("li", stc35, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "menuitem",
      "tabindex": "-1"
    },
    key: 52
  }, [api_element("span", stc36, [api_element("span", stc37, [api_element("span", stc38, [api_element("span", stc39, [api_element("svg", stc40, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#account")
    },
    key: 58,
    svg: true
  })])])]), api_static_fragment($fragment4(), 60)])])])]), api_element("li", stc41, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "menuitem",
      "tabindex": "-1"
    },
    key: 62
  }, [api_element("span", stc42, [api_element("span", stc43, [api_element("span", stc44, [api_element("span", stc45, [api_element("svg", stc46, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#approval")
    },
    key: 68,
    svg: true
  })])])]), api_static_fragment($fragment5(), 70)])])])]), api_element("li", stc47, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "menuitem",
      "tabindex": "-1"
    },
    key: 72
  }, [api_element("span", stc48, [api_element("span", stc49, [api_element("span", stc50, [api_element("span", stc51, [api_element("svg", stc52, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/standard-sprite/svg/symbols.svg#lead")
    },
    key: 78,
    svg: true
  })])])]), api_static_fragment($fragment6(), 80)])])])])])])])])]), api_element("div", {
    classMap: stc53,
    attrs: {
      "id": api_scoped_id("tab-default-1"),
      "role": "tabpanel",
      "aria-labelledby": api_scoped_id("tab-default-1__item")
    },
    key: 81
  }, [api_static_fragment($fragment7(), 83)]), api_element("div", {
    classMap: stc54,
    attrs: {
      "id": api_scoped_id("tab-default-2"),
      "role": "tabpanel",
      "aria-labelledby": api_scoped_id("tab-default-2__item")
    },
    key: 84
  }, [api_static_fragment($fragment8(), 86)]), api_element("div", {
    classMap: stc54,
    attrs: {
      "id": api_scoped_id("tab-default-3"),
      "role": "tabpanel",
      "aria-labelledby": api_scoped_id("tab-default-3__item")
    },
    key: 87
  }, [api_static_fragment($fragment9(), 89)]), api_element("div", {
    classMap: stc54,
    attrs: {
      "id": api_scoped_id("tab-default-4"),
      "role": "tabpanel",
      "aria-labelledby": api_scoped_id("tab-default-4__item")
    },
    key: 90
  }, [api_static_fragment($fragment10(), 92)]), api_element("div", {
    classMap: stc54,
    attrs: {
      "id": api_scoped_id("tab-default-5"),
      "role": "tabpanel",
      "aria-labelledby": api_scoped_id("tab-default-5__item")
    },
    key: 93
  }, [api_static_fragment($fragment11(), 95)])])])];
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
