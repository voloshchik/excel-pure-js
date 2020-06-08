export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, {type: '__INIT__'})
  let listeners = []
  return {
    subscribe(fn) {
      listeners.push(fn)
      return {
        ansubscribe: () => {
          listeners = listeners.filter((l) => l !== fn)
        },
      }
    },
    dispath(action) {
      state = rootReducer(state, action)
      listeners.forEach((listener) => {
        listener(state)
      })
    },
    getState() {
      return state
    },
  }
}
