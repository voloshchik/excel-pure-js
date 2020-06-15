import {
  TABLE_RESIZE,
  CHANGE_TEXT,
  CHANGE_STYLES,
  APPLY_STYLE,
  CHANGE_TITLE,
} from './type'

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data,
  }
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data,
  }
}

export function changeStyles(data) {
  return {type: CHANGE_STYLES, data}
}

export function applyStyle(data) {
  return {type: APPLY_STYLE, data}
}

export function changeTittle(data) {
  return {type: CHANGE_TITLE, data}
}
