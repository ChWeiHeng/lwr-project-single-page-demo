import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./layout.html";
import { normalizeParam, computeLayoutClass, HORIZONTAL_ALIGN, VERTICAL_ALIGN, BOUNDARY } from './styleUtils';
import { normalizeBoolean } from 'lightning/utilsPrivate';

/**
 * Represents a responsive grid system for arranging containers on a page.
 */
class LightningLayout extends LightningElement {
  constructor(...args) {
    super(...args);
    this._horizontalAlign = void 0;
    this._verticalAlign = void 0;
    this._pullToBoundary = void 0;
    this._multipleRows = void 0;
    this._layoutClass = [];
  }
  /**
   * Determines how to spread the layout items horizontally.
   * The alignment options are center, space, spread, and end.
   * @type {string}
   * @default
   */
  get horizontalAlign() {
    return this._horizontalAlign;
  }
  set horizontalAlign(value) {
    this._horizontalAlign = normalizeParam(value, HORIZONTAL_ALIGN);
    this.updateClassList();
  }
  /**
   * Determines how to align the layout items vertically in the container.
   * The alignment options are start, center, end, and stretch.
   * @type {string}
   * @default
   */
  get verticalAlign() {
    return this._verticalAlign;
  }
  set verticalAlign(value) {
    this._verticalAlign = normalizeParam(value, VERTICAL_ALIGN);
    this.updateClassList();
  }
  /**
   * Pulls layout items to the layout boundaries and corresponds
   * to the padding size on the layout item. Possible values are small, medium, or large.
   * @type {string}
   * @default
   *
   */
  get pullToBoundary() {
    return this._pullToBoundary;
  }
  set pullToBoundary(value) {
    this._pullToBoundary = normalizeParam(value, BOUNDARY);
    this.updateClassList();
  }
  /**
   * If present, layout items wrap to the following line when they exceed the layout width.
   * @type {boolean}
   * @default false
   */
  get multipleRows() {
    return this._multipleRows || false;
  }
  set multipleRows(value) {
    this._multipleRows = normalizeBoolean(value);
    this.updateClassList();
  }
  connectedCallback() {
    this.updateClassList();
  }
  updateClassList() {
    this.classList.remove(...this._layoutClass);
    const config = computeLayoutClass(this.horizontalAlign, this.verticalAlign, this.pullToBoundary, this.multipleRows);
    this._layoutClass = Object.keys(config);
    this.classList.add(...this._layoutClass);
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(LightningLayout, {
  publicProps: {
    horizontalAlign: {
      config: 3
    },
    verticalAlign: {
      config: 3
    },
    pullToBoundary: {
      config: 3
    },
    multipleRows: {
      config: 3
    }
  },
  track: {
    _horizontalAlign: 1,
    _verticalAlign: 1,
    _pullToBoundary: 1,
    _multipleRows: 1
  },
  fields: ["_layoutClass"]
});
export default _registerComponent(LightningLayout, {
  tmpl: _tmpl
});