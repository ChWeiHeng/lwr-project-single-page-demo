import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./chartBar.html";
class ChartBar extends LightningElement {
  constructor(...args) {
    super(...args);
    this.percentage = void 0;
  }
  get style() {
    return `width: ${this.percentage}%`;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(ChartBar, {
  publicProps: {
    percentage: {
      config: 0
    }
  }
});
export default _registerComponent(ChartBar, {
  tmpl: _tmpl
});