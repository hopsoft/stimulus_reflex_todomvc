import { Controller } from 'stimulus';
import StimulusReflex from 'stimulus_reflex';

export default class extends Controller {
  connect() {
    StimulusReflex.register(this);
  }

  create() {
    this.stimulate('TodoReflex#create', this.element.value);
  }

  edit() {
    this.stimulate('TodoReflex#edit', this.element.dataset.id);
  }

  cancelEdit(event) {
    if (event.type === 'keypress' && event.code !== 'Escape') return;
    this.stimulate('TodoReflex#cancel_edit');
  }

  update() {
    this.stimulate('TodoReflex#update', this.element.dataset.id, this.element.value);
  }

  destroy() {
    this.stimulate('TodoReflex#destroy', this.element.dataset.id);
  }

  toggle() {
    this.stimulate('TodoReflex#toggle', this.element.dataset.id);
  }
}
