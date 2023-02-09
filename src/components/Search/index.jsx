import React from 'react'

import styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import {SearchContext} from '../../App'

const Search = () => {
  const [value, setValue] = React.useState('')
  const {setSearchValue} = React.useContext(SearchContext)
  const inputRef = React.useRef(null)

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str)
      console.log(str)
    }, 400),
    [],
  )

  const onChangeInput = (e) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z'
            fill='#0F1729'
          ></path>
        </g>
      </svg>
      <input ref={inputRef} className={styles.input} placeholder='Поиск пиццы ...' value={value} onChange={onChangeInput} />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z'
              fill='#0F1729'
            ></path>
          </g>
        </svg>
      )}
    </div>
  )
}

export default Search
