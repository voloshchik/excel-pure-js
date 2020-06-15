import {storage} from '../core/utils'
import {defaultStyles, defaultTitle} from '../constants'
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

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState
