import Rails from '@rails/ujs';
import { Controller } from 'stimulus';
import StimulusReflex from 'stimulus_reflex';

export default class extends Controller {
  connect() {
    StimulusReflex.register(this);
  }

  filter(event) {
    Rails.stopEverything(event);
    const filter = event.target.dataset.filter;
    const anchor = filter === 'all' ? '#' : `#/${filter}`;
    history.replaceState(undefined, undefined, anchor);
    this.stimulate('TodosReflex#filter', filter);
  }

  cancelEdit(event) {
    if (event.type === 'keydown' && !['Escape', 'Esc'].includes(event.key)) {
      return;
    }
    this.stimulate('TodosReflex#cancel_edit');
  }
}
