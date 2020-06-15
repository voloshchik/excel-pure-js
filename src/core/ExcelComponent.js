import {DomListener} from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.store = options.store
    this.subscribe = options.subscribe || []

    this.prepare()
    this.unsubscribers = []
    this.storeSub = null
  }
  prepare() {}
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }
  init() {
    this.initDOMListeners()
  }
  // Сюда приходят только изменения по тем полям, на которые мы подписались
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }
  $dispatch(action) {
    this.store.dispatch(action)
  }
  // $subscribe(fn) {
  //   this.storeSub = this.store.subscribe(fn)
  // }
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach((unsub) => {
      unsub()
    })
    // this.storeSub.ansubscribe()
  }
}
