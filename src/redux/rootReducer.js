import {TABLE_RESIZE, CHANGE_TEXT} from './type'
export function rootReducer(state, action) {
  let prevState
  let field
  console.log('stateReducer', state)
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      prevState = state[field] || {}
      prevState[action.data.id] = action.data.value
      return {...state, [field]: prevState} // id,value
    case CHANGE_TEXT:
      prevState = state['dataState'] || {}
      prevState[action.data.id] = action.data.value
      console.log('prevState', prevState)
      return {...state, currentText: action.data.value, dataState: prevState}
    default:
      return state
  }
}
