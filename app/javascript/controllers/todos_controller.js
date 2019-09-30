import ApplicationController from './application_controller';
import Velocity from 'velocity-animate';

export default class extends ApplicationController {
  static targets = ['list'];

  cancelEdit (event) {
    if (event.type === 'keyup' && !['Escape', 'Esc'].includes(event.key)) return;
    this.stimulate('TodosReflex#cancel_edit');
  }

  afterCreate () {
    this.highlight(this.lastListItem);
  }

  afterToggle (checkbox) {
    this.highlight(checkbox.closest('li'));
  }

  afterToggleAll () {
    this.listItems.forEach(li => this.highlight(li));
  }

  highlight (element) {
    Velocity(element, { scale: 1.01, backgroundColor: '#ff9' }, 200).then(
      Velocity(element, { scale: 1, backgroundColor: '#fff' }, 600)
    );
  }

  get listItems () {
    return this.listTarget.querySelectorAll('li');
  }

  get lastListItem () {
    return this.listItems[this.listItems.length - 1];
  }
}
