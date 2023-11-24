import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header__div'>
      <img className='img' src="https://www.creativefabrica.com/wp-content/uploads/2021/11/27/IS-logo-design-vector-Graphics-20820280-1-580x386.jpg" alt="" />
      <ul className='header__ul'>
        
        <li>
          <Link style={{color:'white', textDecoration:'none'}}  to='/'>Home</Link>
        </li>
        <li>
          <Link style={{color:'white', textDecoration:'none'}}  to='/Favorites'>Favorites</Link>
        </li>
        <li>
          <Link  style={{color:'white', textDecoration:'none'}} to='/Products'>Products</Link>
        </li>
        <li>
          <Link style={{color:'white', textDecoration:'none'}}  to='/admin'>Admin</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
