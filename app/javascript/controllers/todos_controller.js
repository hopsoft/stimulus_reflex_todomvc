import { Controller } from 'stimulus';

export default class extends Controller {
  cancelEdit(event) {
    if (event.type === 'keydown' && !['Escape', 'Esc'].includes(event.key)) return;
    this.stimulate('TodosReflex#cancel_edit');
  }
}
