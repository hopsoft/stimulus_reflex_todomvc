import Rails from '@rails/ujs';
import { Controller } from 'stimulus';
import StimulusReflex from 'stimulus_reflex';

export default class extends Controller {
  connect() {
    StimulusReflex.register(this);
  }

  apply(event) {
    Rails.stopEverything(event);
    this.stimulate('FilterReflex#apply', this.element.dataset.filter);
  }
}
