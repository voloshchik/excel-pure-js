import {$} from '@core/dom'
import {Emitter} from '../../core/Emitter'
import {StoreSubscriber} from '../../core/StoreSubscriber'
import {updateDate} from '../../redux/action'
import {preventDefault} from '../../core/utils'
export class Excel {
  constructor(options) {
    this.components = options.components || []
    this.emitter = new Emitter()
    this.store = options.store
    this.subscriber = new StoreSubscriber(this.store)
  }
  getRoot() {
    const $root = $.create('div', 'excel')
    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
    }
    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className)

      const component = new Component($el, componentOptions)
      $el.html(component.toHTML())

      $root.append($el)
      return component
    })
    return $root
  }
  init() {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      document.addEventListener('contextmenu', preventDefault)
    }
    this.store.dispatch(updateDate())
    this.subscriber.subscribeComponents(this.components)
    this.components.forEach((component) => component.init())
  }

  destroy() {
    this.subscriber.unsubscribeFromStore()
    this.components.forEach((component) => component.destroy())
    document.removeEventListener('contextmenu', preventDefault)
  }
}
