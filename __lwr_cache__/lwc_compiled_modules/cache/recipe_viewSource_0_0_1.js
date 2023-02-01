import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./viewSource.html";
class ViewSource extends LightningElement {
  constructor(...args) {
    super(...args);
    this.baseURL = 'https://github.com/trailheadapps/lwc-recipes-oss/tree/main/src/modules/';
    this.source = void 0;
  }
  get sourceURL() {
    return this.baseURL + this.source;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(ViewSource, {
  publicProps: {
    source: {
      config: 0
    }
  },
  fields: ["baseURL"]
});
export default _registerComponent(ViewSource, {
  tmpl: _tmpl
});