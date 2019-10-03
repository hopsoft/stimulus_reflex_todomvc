import { Controller } from 'stimulus'
import StimulusReflex from 'stimulus_reflex'

let benchmark

export default class extends Controller {
  connect () {
    StimulusReflex.register(this)
  }

  beforeReflex () {
    benchmark = performance.now()
    document.body.classList.add('wait')
  }

  afterReflex (element) {
    console.log(
      `${element.dataset.reflex.split('#')[1]} took ${(
        performance.now() - benchmark
      ).toFixed(0)}ms.`
    )
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
