import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'

// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { Message } from './02-useEffect/Message'
//import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
// import { HooksApp } from './HooksApp'

// import './08-useReducer/intro-reducer'

import './index.css'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // <React.StrictMode>
    // <SimpleForm   />
  
  // </React.StrictMode>
)
