import {createToolbar} from './toolbar.tamplate'
import {ExcelStateComponent} from '../../core/ExcelStateComponent'
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
    const initialState = {
      textAlign: 'left',
      fontWeight: ' normal',
      textDecoration: 'none',
      fontStyle: 'normal',
    }
    this.initState(initialState)
  }
  get template() {
    return createToolbar(this.state)
  }
  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      const key = Object.keys(value)[0]

      this.setState({[key]: value[key]})
      console.log(this.state)
    }
  }
}
