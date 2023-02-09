import React from 'react'
import axios from 'axios'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import {SearchContext} from '../App'

//REDUX-TOOLKIT
import {useSelector, useDispatch} from 'react-redux'
import {setCategoryId, setCurrentPage} from '../redux/slices/filterSlice'

const Home = () => {
  const {searchValue} = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  //REDUX
  const dispatch = useDispatch()
  const {categoryId, sort, currentPage} = useSelector((state) => state.filter)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }
  //REDUX

  React.useEffect(() => {
    setIsLoading(true)

    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId ? `&category=${categoryId}` : ``
    const search = searchValue ? `&search=${searchValue}` : ``
    const pagination = `page=${currentPage}&limit=4&`

    axios
      .get(`https://63dae39a204f55bcf1705186.mockapi.io/items?${pagination}sortBy=${sortBy}&order=${order}${category}${search}`)
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sort, searchValue, currentPage])

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
  const skeletons = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)

  return (
    <>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  )
}

export default Home
