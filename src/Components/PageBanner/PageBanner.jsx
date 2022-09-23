import React from 'react'
import './PageBann.css'

function PageBanner({ pagetitle, image, titYN }) {

  if (titYN != null)
    return (
      <div className="page-banner" style={{ backgroundImage: `url(${image})` }}>
      </div>
    )
  else {
    return (
      <div className="page-banner-tit-img">
        <div className="page-banner-tit">
          <div className="container">
            <h1>{pagetitle}</h1>
          </div>
        </div>
        <div className="page-banner-img" style={{ backgroundImage: `url(${image})` }}>
        </div>
      </div>
    )
  }
}

export default PageBanner