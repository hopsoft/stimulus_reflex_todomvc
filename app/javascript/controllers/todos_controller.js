import ApplicationController from './application_controller';

export default class extends ApplicationController {
  cancelEdit(event) {
    if (event.type === 'keydown' && !['Escape', 'Esc'].includes(event.key)) return;
    this.stimulate('TodosReflex#cancel_edit');
  }
}
