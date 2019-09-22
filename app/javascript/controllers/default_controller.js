import { Controller } from 'stimulus';
import StimulusReflex from 'stimulus_reflex';

export default class extends Controller {
  connect() {
    StimulusReflex.register(this);
  }

  reflexStart() {
    document.body.classList.add('wait');
  }

  reflexComplete() {
    document.body.classList.remove('wait');
  }

  reflexSuccess() {
    const focusElement = this.element.querySelector('[autofocus]');
    if (focusElement) {
      focusElement.focus();

      // shenanigans to ensure that the cursor is placed at the end of the existing value
      const value = focusElement.value;
      focusElement.value = '';
      focusElement.value = value;

      focusElement.classList.add('animated', 'faster', 'flipInX');
    }

    if (this.isCheck) this.listItemTarget.classList.add('animated', 'fast', 'pulse');
  }

  get isCheck() {
    return this.element.type === 'checkbox' && this.element.checked;
  }

  get listItemTarget() {
    return this.element.closest('li');
  }

  get headerTarget() {
    return document.querySelector('h1');
  }
}
