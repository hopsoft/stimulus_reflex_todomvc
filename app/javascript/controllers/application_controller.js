import { Controller } from 'stimulus'
import StimulusReflex from 'stimulus_reflex'

export default class extends Controller {
  connect () {
    StimulusReflex.register(this)
  }

  beforeReflex () {
    this.benchmark = performance.now()
    document.body.classList.add('wait')
  }

  afterReflex (element, reflex) {
    console.log(reflex, `${(performance.now() - this.benchmark).toFixed(0)}ms`)
    document.body.classList.remove('wait')

    const focusElement = this.element.querySelector('[autofocus]')
    if (focusElement) {
      focusElement.focus()

      // shenanigans to ensure that the cursor is placed at the end of the existing value
      const value = focusElement.value
      focusElement.value = ''
      focusElement.value = value
    }
  }
}
