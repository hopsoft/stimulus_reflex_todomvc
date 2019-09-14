import { Controller } from 'stimulus'
import StimulusReflex from 'stimulus_reflex'

export default class extends Controller {
  connect () {
    StimulusReflex.register(this)
  }

  cancelEdit (event) {
    if (event.type === 'keydown') {
      if (['Escape', 'Esc'].includes(event.key)) event.target.blur()
      return
    }
    this.stimulate('TodosReflex#cancel_edit')
  }

  onEdit () {
    document.querySelector('[autofocus]').focus()
  }
}
