import {range} from '../../core/utils'
export function shouldResize(event) {
  return event.target.dataset.resize
}

export function isCell(event) {
  return event.target.dataset.type === 'cell'
}

export function matrix($target, $current) {
  const target = $target.id(true)
  const current = $current.id(true)
  const colls = range(current.col, target.col)
  const rows = range(current.row, target.row)
  return colls.reduce((acc, col) => {
    rows.forEach((row) => {
      acc.push(`${row}:${col}`)
    })
    return acc
  }, [])
}

export function nextSelector(key, {col, row}) {
  console.log('col, row :>> ', col, row)
  const MIN_VALUE = 0

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break
    case 'Tab':
    case 'ArrowRight':
      col++
      break
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1

      break
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
      break
  }
  return `[data-id="${row}:${col}"]`
}
