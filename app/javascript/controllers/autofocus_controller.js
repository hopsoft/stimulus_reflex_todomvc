import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    this.element.focus();
    this.element.setSelectionRange(-1, -1); // move cursor to end
  }
}
