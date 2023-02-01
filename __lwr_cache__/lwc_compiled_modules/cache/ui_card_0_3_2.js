import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./card.html";
class Card extends LightningElement {
  constructor(...args) {
    super(...args);
    this.imageUrl = void 0;
    this.title = void 0;
    this.subtitle = void 0;
  }
  get showHeader() {
    return this.title && this.subtitle;
  }
  get showImage() {
    return this.imageUrl !== undefined && this.imageUrl.length > 0;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(Card, {
  publicProps: {
    imageUrl: {
      config: 0
    },
    title: {
      config: 0
    },
    subtitle: {
      config: 0
    }
  }
});
export default _registerComponent(Card, {
  tmpl: _tmpl
});