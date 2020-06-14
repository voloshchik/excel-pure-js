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
      ...options,
    })
  }
  toHTML() {
    return this.template
  }
  prepare() {
    this.initState(defaultStyles)
  }
  get template() {
    return createToolbar(this.state)
  }
  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      const key = Object.keys(value)[0]
      this.$emit('toolbar:applyStyle', value)
      this.setState({[key]: value[key]})
    }
  }
}
