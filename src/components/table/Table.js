import {ExcelComponent} from '../../core/ExcelComponent'
import {createTable} from './table.template'
import {$} from '../../core/dom'
import {resizeHandler} from './table.resize'
import {shouldResize, isCell, matrix} from './table.functions'
import {TableSelection} from './TableSelection'

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
  prepare() {
    this.selection = new TableSelection()
  }
  init() {
    super.init()

    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
  }
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      const $target = $(event.target)
      if (event.shiftKey) {
        // const target = $target.id(true)
        // const current = this.selection.current.id(true)
        const $cells = matrix($target, this.selection.current).map((id) =>
          this.$root.find(`[data-id="${id}"]`)
        )
        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
        console.log('event.target :>> ', event)
      }
    }
  }
}
