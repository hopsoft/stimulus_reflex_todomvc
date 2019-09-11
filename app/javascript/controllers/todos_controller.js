import { Controller } from 'stimulus';
import StimulusReflex from 'stimulus_reflex';

export default class extends Controller {
  connect() {
    StimulusReflex.register(this);
  }

  cancelEdit(event) {
    if (event.type === 'keypress' && event.code !== 'Escape') return;
    this.stimulate('TodosReflex#cancel_edit');
  }
}
