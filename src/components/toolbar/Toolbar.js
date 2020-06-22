import {createToolbar} from './toolbar.tamplate'
import {ExcelStateComponent} from '../../core/ExcelStateComponent'
import {defaultStyles} from '../../constants'
import {$} from '@core/dom'
export class Toolbar extends ExcelStateComponent {
  static className = 'excel__toolbar'
  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      subscribe: ['currentStyles'],
      ...options,
    })
  }
  toHTML() {
    return this.template
  }
  prepare() {
    this.initState(defaultStyles)
  }

  storeChanged(changes) {
    this.setState(changes.currentStyles)
  }

  get template() {
    return createToolbar(this.state)
  }
  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      this.$emit('toolbar:applyStyle', value)
    }
  }
}
