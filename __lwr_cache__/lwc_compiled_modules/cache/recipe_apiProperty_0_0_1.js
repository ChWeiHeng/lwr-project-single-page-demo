import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./apiProperty.html";
class ApiProperty extends LightningElement {
  constructor(...args) {
    super(...args);
    this.percentage = 50;
  }
  handlePercentageChange(event) {
    const percentage = event.target.value;
    this.percentage = percentage <= 100 ? percentage : 100;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(ApiProperty, {
  fields: ["percentage"]
});
export default _registerComponent(ApiProperty, {
  tmpl: _tmpl
});