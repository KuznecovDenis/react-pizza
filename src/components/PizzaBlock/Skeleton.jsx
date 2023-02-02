import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='138' cy='125' r='125' />
    <rect x='0' y='260' rx='10' ry='10' width='280' height='27' />
    <rect x='0' y='307' rx='10' ry='10' width='280' height='88' />
    <rect x='128' y='415' rx='25' ry='25' width='152' height='45' />
    <rect x='0' y='426' rx='10' ry='10' width='90' height='27' />
  </ContentLoader>
)

export default MyLoader
