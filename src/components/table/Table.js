import {ExcelComponent} from '../../core/ExcelComponent'
import {createTable} from './table.template'
export class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }
  static className = 'excel__table'
  toHTML() {
    return createTable()
  }
  onMousedown(event) {
    if (event.target.dataset.resize) {
      console.log('Start resizing', event.target.dataset.resize)
    }
  }
}
