import { Controller } from 'stimulus';
import Velocity from 'velocity-animate';

export default class extends Controller {
  static targets = ['list'];

  beforeReflex() {
    document.body.classList.add('wait');
  }

  afterReflex() {
    document.body.classList.remove('wait');

    const focusElement = this.element.querySelector('[autofocus]');
    if (focusElement) {
      focusElement.focus();

      // shenanigans to ensure that the cursor is placed at the end of the existing value
      const value = focusElement.value;
      focusElement.value = '';
      focusElement.value = value;
    }
  }

  afterCreate() {
    this.highlight(this.lastListItem);
  }

  afterToggle(checkbox) {
    this.highlight(checkbox.closest('li'));
  }

  afterToggleAll() {
    this.listItems.forEach(li => this.highlight(li));
  }

  highlight(element) {
    Velocity(element, { scale: 1.01, backgroundColor: '#ffff99' }, 200).then(
      Velocity(element, { scale: 1, backgroundColor: '#fff' }, 600)
    );
  }

  get listItems() {
    return this.listTarget.querySelectorAll('li');
  }

  get lastListItem() {
    return this.listItems[this.listItems.length - 1];
  }
}
