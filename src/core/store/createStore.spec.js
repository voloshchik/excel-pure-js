import {createStore} from './createStore'

const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return {...state, count: state.count + 1}
  }
  return state
}

describe('createStore:', () => {
  let store
  beforeEach(() => {
    store = createStore(reducer, initialState)
  })
  test('should return obj', () => {
    expect(store).toBeDefined()
    expect(store.dispatch).toBeDefined()
    expect(store.subscribe).toBeDefined()
    expect(store.getState).not.toBeUndefined()
  })
  test('should return object as a state', () => {
    expect(store.getState()).toBeInstanceOf(Object)
  })
  test('should return default state', () => {
    expect(store.getState()).toEqual(initialState)
  })
  test('shuld change state if action exist', () => {
    store.dispatch({type: 'ADD'})
    expect(store.getState().count).toBe(1)
  })
  test('shuld  not change state if dont action exist', () => {
    store.dispatch({type: 'NOT_EXESTING_ACTON'})
    expect(store.getState().count).toBe(0)
  })
})
