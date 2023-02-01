import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./input.html";
class Input extends LightningElement {
  constructor(...args) {
    super(...args);
    this.disabled = void 0;
    this.label = void 0;
    this.max = void 0;
    this.min = void 0;
    this.name = void 0;
    this.type = 'text';
    this.valuePrivate = '';
    this._checked = false;
  }
  set checked(val) {
    this._checked = val;
  }
  get checked() {
    return this._checked;
  }
  set value(val) {
    this.valuePrivate = this._value = val !== undefined ? val : '';
  }
  get value() {
    return this._value;
  }
  changeHandler(event) {
    this._value = this.calculateValue(event.target.value);
    this.dispatchEvent(new CustomEvent('change'));
  }
  changeCheckboxHandler() {
    this._checked = !this._checked;
    const checkboxEl = this.template.querySelector('div.checkbox span');
    if (this._checked) {
      checkboxEl.classList.add('checked');
    } else {
      checkboxEl.classList.remove('checked');
    }
    this.dispatchEvent(new CustomEvent('change'));
  }
  keyupHandler(event) {
    this._value = this.calculateValue(event.target.value);
    this.dispatchEvent(new CustomEvent('change'));
  }
  get isCheckboxField() {
    return this.type === 'checkbox';
  }
  get isNumberField() {
    return this.type === 'number';
  }
  get isPasswordField() {
    return this.type === 'password';
  }
  get isSearchField() {
    return this.type === 'search';
  }
  get isTextField() {
    return this.type === 'password' || this.type === 'text' || this.type === 'search';
  }
  calculateValue(value) {
    if (this.type !== 'number') {
      return value;
    }
    let newValue = Number(value);
    const max = Number(this.max);
    const min = Number(this.min);
    if (this.max && value > max) {
      newValue = max;
    } else if (this.min && value < min) {
      newValue = min;
    }
    return newValue;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(Input, {
  publicProps: {
    checked: {
      config: 3
    },
    disabled: {
      config: 0
    },
    label: {
      config: 0
    },
    max: {
      config: 0
    },
    min: {
      config: 0
    },
    name: {
      config: 0
    },
    type: {
      config: 0
    },
    value: {
      config: 3
    }
  },
  track: {
    valuePrivate: 1
  },
  fields: ["_checked"]
});
export default _registerComponent(Input, {
  tmpl: _tmpl
});