import {Page} from '../core/Page'
import {createStore} from '../core/createStore'
import {rootReducer} from '../redux/rootReducer'
import {initialState, normalizeInitialState} from '../redux/initialState'
import {debounce, storage} from '../core/utils'
import {Excel} from '../components/excel/Excel'
import {Header} from '../components/header/Header'
import {Toolbar} from '../components/toolbar/Toolbar'
import {Formula} from '../components/formula/Formula'
import {Table} from '../components/table/Table'

function storageName(param) {
  return 'excel:' + param
}

export class ExcelPage extends Page {
  getRoot() {
    console.log('this.params', this.params)
    const params = this.params ? this.params : Date.now().toString()
    const state = storage(storageName(params))
    const store = createStore(rootReducer, normalizeInitialState(state))
    const stateListeners = debounce((state) => {
      storage(storageName(params), state)
      //   console.log('Appstate', state)
    }, 1000)

    store.subscribe(stateListeners)

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store,
    })
    return this.excel.getRoot()
  }
  afterRender() {
    console.log('aftarRender')
    this.excel.init()
  }
  destroy() {
    this.excel.destroy()
  }
}
