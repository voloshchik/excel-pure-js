import {capitalize} from './utils'
export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.listeners = listeners
    this.$root = $root
  }
  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      console.log('method', method)
      if (!this[method]) {
        throw new Error(
          `Method ${method} is not implements ${this.name || ''} Component`
        )
      }
      // наш eventListener
      this.$root.on(listener, this[method].bind(this))
    })
  }
  removeDOMListeners() {}
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
