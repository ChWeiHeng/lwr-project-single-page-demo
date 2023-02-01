import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";
class HelloWorldApp extends LightningElement {
  constructor(...args) {
    super(...args);
    this.greeting = 'World';
  }
  handleChange(event) {
    this.greeting = event.target.value;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(HelloWorldApp, {
  fields: ["greeting"]
});
export default _registerComponent(HelloWorldApp, {
  tmpl: _tmpl
});