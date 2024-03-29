import React from 'react'

function ParagrafoHome({ nobar, title, text1, text2 }) {
  return (
    <div className="paragrafo-home">
      <div className="row">
        <div className="col l12">
          <h4 style={{ fontWeight: 700 }}>{title}</h4>
        </div>
        <div className="col l6">
          <p className='flow-text'>{text1}</p>
        </div>
        <div className="col l6">
          <p className='flow-text'>{text2}</p>
        </div>
        {!nobar ? <div className="col l12 s12 m12" style={{ borderBottom: '1px solid black' }}></div> : <div></div>}

      </div>

    </div>
  )
}

export default ParagrafoHome