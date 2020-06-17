import './scss/index.scss'
// import {Excel} from './components/excel/Excel'
// import {Header} from './components/header/Header'
// import {Toolbar} from './components/toolbar/Toolbar'
// import {Formula} from './components/formula/Formula'
// import {Table} from './components/table/Table'
// import {rootReducer} from './redux/rootReducer'
// import {createStore} from './core/createStore'
// import {storage, debounce} from './core/utils'
// import {initialState} from './redux/initialState'
import {Router} from './core/routes/Router'
import {DashboardPage} from './pages/DashboardPage'
import {ExcelPage} from './pages/ExcelPage'

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage,
})

// const store = createStore(rootReducer, initialState)
// const stateListeners = debounce((state) => {
//   storage('excel-state', state)
//   console.log('Appstate', state)
// }, 1000)

// store.subscribe(stateListeners)

// const excel = new Excel('#app', {
//   components: [Header, Toolbar, Formula, Table],
//   store,
// })
// excel.render()
