import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./button.html";
class Button extends LightningElement {
  constructor(...args) {
    super(...args);
    this.label = void 0;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(Button, {
  publicProps: {
    label: {
      config: 0
    }
  }
});
export default _registerComponent(Button, {
  tmpl: _tmpl
});