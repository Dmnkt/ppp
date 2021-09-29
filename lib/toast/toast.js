/** @decorator */

import { FoundationElement } from '../foundation-element/foundation-element.js';
import { attr } from '../element/components/attributes.js';
import { observable } from '../element/observation/observable.js';

export class Toast extends FoundationElement {
  @observable
  source;

  @attr
  appearance;

  @attr({ mode: 'boolean' })
  active;

  appearanceChanged(oldValue, newValue) {
    if (oldValue !== newValue) {
      this.classList.add(newValue);
      this.classList.remove(oldValue);
    }
  }

  activeChanged(oldValue, newValue) {
    if (oldValue !== newValue) {
      this.classList.add(newValue);
      this.classList.remove(oldValue);
    }
  }

  /**
   * @internal
   */
  connectedCallback() {
    super.connectedCallback();

    if (!this.appearance) {
      this.appearance = 'progress';
    }
  }
}