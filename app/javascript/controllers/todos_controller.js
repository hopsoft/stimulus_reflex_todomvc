import { Controller } from 'stimulus';
import StimulusReflex from 'stimulus_reflex';

export default class extends Controller {
  connect() {
    StimulusReflex.register(this);
  }

  cancelEdit (event) {
    if (event.type === 'keydown' && !['Escape', 'Esc'].includes(event.key)) {
      return
    }
    this.stimulate('TodosReflex#cancel_edit');
  }
}
