import {ExcelComponent} from '../../core/ExcelComponent'
import {$} from '../../core/dom'
import {changeTittle} from '../../redux/action'
import {defaultTitle} from '../../constants'
export class Header extends ExcelComponent {
  static className = 'excel__header'
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    })
  }
  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return ` <input
    class="input"
    type="text"
    name=""
    id=""
    value="${title}"
  />
  <div>
    <div class="button">
      <i class="material-icons">delete</i>
    </div>
    <div class="button">
      <i class="material-icons">exit_to_app</i>
    </div>
  </div>`
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTittle($target.text()))
  }
}
