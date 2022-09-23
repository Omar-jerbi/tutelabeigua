import React, { useState } from 'react'
import './PersonCard.css'

function PersonCard({ image, nome, cognome, testo, email, link }) {

  const [toShow, setToShow] = useState(false)


  return (
    <div className="personcard" style={{ backgroundImage: `url(${image})` }}>
      <div className="main-pcard">
        <div className="tit-pcard">
          <div className={`paragrafo-hidden ${toShow ? 'show' : ''}`}>
            <div className="top">
              <i class="fa-solid fa-x right" onClick={() => { setToShow(false); }}></i>
              <h5 className='left' style={{ width: "min-content" }}>{nome} <br />{cognome}</h5>
            </div>
            <p className="flow-text left">
              {testo}
              <br />
              <br />
              {email != null ? <a href={`mailto:${email}`}>Email</a> : ''}
              <br />
              {link != null ? <a href={link} target='_blank' rel="noreferrer">Github</a> : ''}
            </p>
          </div>
          <div className="titolo-show" onClick={() => { setToShow(true) }}>
            <h5>{nome} <br />{cognome} </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonCard