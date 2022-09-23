import React from 'react'
import './PageBann.css'

function PageBanner({ pagetitle, image }) {
  return (
    <div className="page-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <h1 className='title'>{pagetitle}</h1>
      </div>
    </div>
  )
}

export default PageBanner