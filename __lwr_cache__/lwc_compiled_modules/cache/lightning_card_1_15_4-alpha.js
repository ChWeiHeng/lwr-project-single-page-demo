import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./card.html";
import { classSet } from 'lightning/utils';
import { isNarrow, isBase, isHeadingLevelValid, DEFAULT_HEADING_LEVEL } from './utils';

/**
 * Cards apply a container around a related grouping of information.
 * @slot title Placeholder for the card title, which can be represented by a header or h1 element.
 * The title is displayed at the top of the card, after the icon.
 * Alternatively, use the title attribute if you don't need to pass in extra markup in your title.
 * @slot actions Placeholder for actionable components, such as lightning-button or lightning-button-menu.
 * Actions are displayed on the top corner of the card after the title.
 * @slot footer Placeholder for the card footer, which is displayed at the bottom of the card and is usually optional.
 * For example, the footer can display a "View All" link to navigate to a list view.
 * @slot default Placeholder for your content in the card body.
 */
class LightningCard extends LightningElement {
  constructor(...args) {
    super(...args);
    this.title = void 0;
    this.iconName = void 0;
    this.privateVariant = 'base';
    this.hasTitle = true;
    this.showFooter = true;
    this.privateHeadingAriaLevel = DEFAULT_HEADING_LEVEL;
  }
  set variant(value) {
    if (isNarrow(value) || isBase(value)) {
      this.privateVariant = value;
    } else {
      this.privateVariant = 'base';
    }
  }

  /**
   * The variant changes the appearance of the card.
   * Accepted variants include base or narrow.
   * This value defaults to base.
   *
   * @type {string}
   * @default base
   */
  get variant() {
    return this.privateVariant;
  }

  /**
   * The property 'hasTitle' will be 'true' if
   * either a string title or a slot title is present
   */

  renderedCallback() {
    // initial check for no items
    if (this.footerSlot) {
      this.showFooter = this.footerSlot.assignedElements().length !== 0;
    }

    // real title slot will be null if a string title is present
    if (this.titleSlot) {
      const hasSlotTitle = this.titleSlot.assignedElements().length !== 0;
      this.hasTitle = hasSlotTitle || this.hasStringTitle;
    }
  }
  set headingLevel(value) {
    if (isHeadingLevelValid(value)) {
      this.privateHeadingAriaLevel = value;
    } else {
      this.privateHeadingAriaLevel = DEFAULT_HEADING_LEVEL;
    }
  }

  /**
   * The headingLevel changes the 'aria-level' attribute value of
   * <h2> tag in the markup for the card's title element. It can take
   * values of (1, 2, 3, 4, 5, 6)
   *
   * @type {string | number}
   * @default 2
   */
  get headingLevel() {
    return this.privateHeadingAriaLevel;
  }
  get titleSlot() {
    return this.template.querySelector('slot[name=title]');
  }
  get footerSlot() {
    return this.template.querySelector('slot[name=footer]');
  }
  get computedWrapperClassNames() {
    return classSet('slds-card').add({
      'slds-card_narrow': isNarrow(this.privateVariant)
    });
  }
  get hasIcon() {
    return !!this.iconName;
  }
  get hasStringTitle() {
    return !!this.title;
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(LightningCard, {
  publicProps: {
    title: {
      config: 0
    },
    iconName: {
      config: 0
    },
    variant: {
      config: 3
    },
    headingLevel: {
      config: 3
    }
  },
  track: {
    privateVariant: 1,
    showFooter: 1
  },
  fields: ["hasTitle", "privateHeadingAriaLevel"]
});
export default _registerComponent(LightningCard, {
  tmpl: _tmpl
});