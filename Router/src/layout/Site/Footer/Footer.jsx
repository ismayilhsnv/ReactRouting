import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__icons'>
            <i className='github fa-brands fa-github' ></i>
            <i className='linkedin fa-brands fa-linkedin'></i>
            <i className='insta fa-brands fa-instagram' ></i>
            <i className='face fa-brands fa-facebook'></i>
            <i className='tw fa-brands fa-square-twitter' ></i>
        </div>
        <div className='footer__content'>
            <h3>Designed & Built by</h3>
            <p>İsmayıl Həsənov</p>
        </div>
    </div>
  )
}

export default Footer
