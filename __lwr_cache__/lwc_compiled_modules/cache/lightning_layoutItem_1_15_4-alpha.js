import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./layoutItem.html";
import { normalizeFlexibility, normalizePadding, validateSize, computeLayoutClass, normalizeSize, normalizeDirection } from './styleUtils';

/**
 * The basic element in a lightning-layout component.
 * A layout item groups information together to define visual grids, spacing, and sections.
 * @slot default Placeholder for your content in lightning-layout-item.
 */
class LightningLayoutItem extends LightningElement {
  constructor(...args) {
    super(...args);
    this._flexibility = void 0;
    this._alignmentBump = void 0;
    this._padding = void 0;
    this._size = void 0;
    this._smallDeviceSize = void 0;
    this._mediumDeviceSize = void 0;
    this._largeDeviceSize = void 0;
    this._layoutClass = [];
  }
  /**
   * Make the item fluid so that it absorbs any extra space in its
   * container or shrinks when there is less space. Allowed values are:
   * auto (columns grow or shrink equally as space allows),
   * shrink (columns shrink equally as space decreases),
   * no-shrink (columns don't shrink as space reduces),
   * grow (columns grow equally as space increases),
   * no-grow (columns don't grow as space increases),
   * no-flex (columns don't grow or shrink as space changes).
   * Use a comma-separated value for multiple options, such as 'auto, no-shrink'.
   * @type {object}
   */
  get flexibility() {
    return this._flexibility;
  }
  set flexibility(value) {
    this._flexibility = normalizeFlexibility(value);
    this.updateClassList();
  }
  /**
   * Specifies a direction to bump the alignment of adjacent layout items. Allowed values are left, top, right, bottom.
   * @type {string}
   */
  get alignmentBump() {
    return this._alignmentBump;
  }
  set alignmentBump(value) {
    this._alignmentBump = normalizeDirection(value);
    this.updateClassList();
  }
  /**
   * Sets padding to either the right and left sides of a container,
   * or all sides of a container. Allowed values are horizontal-small,
   * horizontal-medium, horizontal-large, around-small, around-medium, around-large.
   * @type {string}
   */
  get padding() {
    return this._padding;
  }
  set padding(value) {
    this._padding = normalizePadding(value);
    this.updateClassList();
  }
  /**
   * If the viewport is divided into 12 parts, size indicates the
   * relative space the container occupies. Size is expressed as
   * an integer from 1 through 12. This applies for all device-types.
   * @type {number}
   */
  get size() {
    return this._size;
  }
  set size(value) {
    this._size = normalizeSize(value);
    this.validateSize();
    this.updateClassList();
  }
  /**
   * If the viewport is divided into 12 parts, this attribute indicates
   * the relative space the container occupies on device-types larger than
   * mobile. It is expressed as an integer from 1 through 12.
   * @type {number}
   */
  get smallDeviceSize() {
    return this._smallDeviceSize;
  }
  set smallDeviceSize(value) {
    this._smallDeviceSize = normalizeSize(value);
    this.validateSize();
    this.updateClassList();
  }
  /**
   * If the viewport is divided into 12 parts, this attribute indicates
   * the relative space the container occupies on device-types larger than
   * tablet. It is expressed as an integer from 1 through 12.
   * @type {number}
   */
  get mediumDeviceSize() {
    return this._mediumDeviceSize;
  }
  set mediumDeviceSize(value) {
    this._mediumDeviceSize = normalizeSize(value);
    this.validateSize();
  }
  /**
   * If the viewport is divided into 12 parts, this attribute indicates
   * the relative space the container occupies on device-types larger than
   * desktop. It is expressed as an integer from 1 through 12.
   * @type {number}
   */
  get largeDeviceSize() {
    return this._largeDeviceSize;
  }
  set largeDeviceSize(value) {
    this._largeDeviceSize = normalizeSize(value);
    this.validateSize();
    this.updateClassList();
  }
  connectedCallback() {
    this.updateClassList();
  }
  updateClassList() {
    this.classList.remove(...this._layoutClass);
    const config = computeLayoutClass({
      default: this.size,
      small: this.smallDeviceSize,
      medium: this.mediumDeviceSize,
      large: this.largeDeviceSize
    }, this.flexibility, this.padding, this.alignmentBump);
    this._layoutClass = Object.keys(config);
    this.classList.add(...this._layoutClass);
  }
  validateSize() {
    validateSize(this.size, this.smallDeviceSize, this.mediumDeviceSize, this.largeDeviceSize);
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(LightningLayoutItem, {
  publicProps: {
    flexibility: {
      config: 3
    },
    alignmentBump: {
      config: 3
    },
    padding: {
      config: 3
    },
    size: {
      config: 3
    },
    smallDeviceSize: {
      config: 3
    },
    mediumDeviceSize: {
      config: 3
    },
    largeDeviceSize: {
      config: 3
    }
  },
  track: {
    _flexibility: 1,
    _alignmentBump: 1,
    _padding: 1,
    _size: 1,
    _smallDeviceSize: 1,
    _mediumDeviceSize: 1,
    _largeDeviceSize: 1
  },
  fields: ["_layoutClass"]
});
export default _registerComponent(LightningLayoutItem, {
  tmpl: _tmpl
});