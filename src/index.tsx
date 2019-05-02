import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './home'
import { PageOne } from './pageOne'
import { MenuBar } from './menuBar'

import './styles.css'

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Route path="/" exact component={Home} />
      <Route path="/pageone" component={PageOne} />
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
