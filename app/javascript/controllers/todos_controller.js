import { Controller } from 'stimulus';
import StimulusReflex from 'stimulus_reflex';

export default class extends Controller {
  connect() {
    StimulusReflex.register(this);
  }

  filter() {
    this.stimulate('TodosReflex#filter', this.element.dataset.name);
  }

  create() {
    this.stimulate('TodosReflex#create', this.element.value);
  }

  edit() {
    this.stimulate('TodosReflex#edit', this.element.dataset.id);
  }

  cancelEdit(event) {
    if (event.type === 'keypress' && event.code !== 'Escape') return;
    this.stimulate('TodosReflex#cancel_edit');
  }

  update() {
    this.stimulate('TodosReflex#update', this.element.dataset.id, this.element.value);
  }

  toggle() {
    this.stimulate('TodosReflex#toggle', this.element.dataset.id);
  }

  toggleAll() {
    this.stimulate('TodosReflex#toggle_all');
  }

  destroy() {
    this.stimulate('TodosReflex#destroy', this.element.dataset.id);
  }

  destroyCompleted() {
    this.stimulate('TodosReflex#destroy_completed');
  }
}
