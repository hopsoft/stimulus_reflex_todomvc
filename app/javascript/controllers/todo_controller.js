import Velocity from 'velocity-animate';
import ApplicationController from './application_controller';

export default class extends ApplicationController {
  cancelEdit(event) {
    if (event.type === 'keydown' && !['Escape', 'Esc'].includes(event.key)) return;
    this.stimulate('TodosReflex#cancel_edit');
  }

  afterCreate() {
    const listItems = document.querySelector('ul.todo-list').querySelectorAll('li');
    this.highlight(listItems[listItems.length - 1]);
  }

  afterToggle() {
    this.highlight(this.element);
  }

  afterToggleAll() {
    document.querySelectorAll('ul.todo-list').forEach(li => this.highlight(li));
  }

  highlight(element) {
    const color = element.querySelector('input[type=checkbox]').checked ? '#f0ffb2' : '#ffd1d1';
    Velocity(element, { scale: 1.01, backgroundColor: color }, 200).then(
      Velocity(element, { scale: 1, backgroundColor: '#fff' }, 600)
    );
  }
}
