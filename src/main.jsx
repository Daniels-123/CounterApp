import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { Message } from './02-useEffect/Message'
//import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
// import { HooksApp } from './HooksApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <SimpleForm   />
    <Layout />
  // </React.StrictMode>
)
