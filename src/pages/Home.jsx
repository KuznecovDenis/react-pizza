import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'

const Home = ({searchValue}) => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [sortType, setSortType] = React.useState({name: 'популярности', sortProperty: 'rating'})

  React.useEffect(() => {
    setIsLoading(true)

    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId ? `&category=${categoryId}` : ``
    const search = searchValue ? `&search=${searchValue}` : ``
    const pagination = `page=${currentPage}&limit=4&`

    fetch(`https://63dae39a204f55bcf1705186.mockapi.io/items?${pagination}sortBy=${sortBy}&order=${order}${category}${search}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  // const pizzas = items.filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => <PizzaBlock key={obj.id} {...obj} />)
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
  const skeletons = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)

  return (
    <>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  )
}

export default Home
