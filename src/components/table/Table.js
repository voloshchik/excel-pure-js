import {ExcelComponent} from '../../core/ExcelComponent'
import {createTable} from './table.template'
import {$} from '../../core/dom'
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
      const $resizer = $(event.target)
      // const $parent = $resizer.$el.parentNode
      const $parent = $resizer.closest('[data-type="resizable"]')

      const coords = $parent.getCoords()
      console.log('$parent.data  :>> ', $parent.data.col)
      document.onmousemove = (e) => {
        const delta = e.pageX - coords.right
        const value = coords.width + delta
        $parent.$el.style.width = value + 'px'
        document
          .querySelectorAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => (el.style.width = value + 'px'))

        // console.log('delta :>> ', delta)
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
