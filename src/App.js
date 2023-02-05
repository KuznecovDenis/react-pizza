import './scss/app.scss'
import React from 'react'
// import pizzas from './assets/pizzas.json' - пиццы в джейсоне для примера работы без без запроса на бэк

import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import {Routes, Route} from 'react-router-dom'

const SearchContext = React.createContext('')

console.log(SearchContext)

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className='wrapper'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home searchValue={searchValue} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
