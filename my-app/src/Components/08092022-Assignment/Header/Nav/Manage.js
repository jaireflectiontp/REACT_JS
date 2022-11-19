import React, { useContext } from 'react'
import Context from '../../Context/Context'
import '../../SCSS/HeaderCSS/nav.scss'
import Header from '../Header'

const Manage = () => {
  const title =useContext(Context)
  return (
    <div className='innerPages'>
      <Header/>
      <div>
        <h2>{title.title}</h2>
      </div>
    </div>
  )
}

export default Manage
