import { Controller } from 'stimulus'
import StimulusReflex from '../lib/stimulus_reflex'

export default class extends Controller {
  connect () {
    StimulusReflex.register(this)
  }
}
