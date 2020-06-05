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
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)
      const type = $resizer.data.resize
      console.log('type  :>> ', type)
      document.onmousemove = (e) => {
        if (type === 'col') {
          const delta = e.pageX - coords.right
          const value = coords.width + delta
          $parent.css({width: value + 'px'})
          // $parent.$el.style.width = value + 'px'
          cells.forEach((el) => (el.style.width = value + 'px'))
        } else {
          const delta = e.pageY - coords.bottom
          const value = coords.height + delta
          $parent.css({height: value + 'px'})
          // $parent.$el.style.height = value + 'px'
          console.log('delta :>> ', delta)
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
