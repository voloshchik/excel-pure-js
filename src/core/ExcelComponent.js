import {DomListener} from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    console.log('options :>> ', options)
    this.prepare()
    this.unsubscribers = []
  }
  prepare() {}
  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }
  init() {
    this.initDOMListeners()
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
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach((unsub) => {
      unsub()
    })
  }
}
