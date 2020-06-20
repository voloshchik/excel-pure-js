import {defaultStyles, defaultTitle} from '../constants'
import {clone} from '../core/utils'
const defaultState = {
  title: defaultTitle,
  colState: {},
  rowState: {},
  dataState: {}, // {0:1:'sdsdsd}
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
}
const normalize = (state) => {
  return {...state, currentStyles: defaultStyles, currentText: ''}
}

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
