import React, { useState } from 'react'
import './SingleFaq.css'


function SingleFaq({titolo, testo}) {

const [open, setOpen] = useState(false)


  return (
    <div className="singlefaq">
        <div className="titolo-sf" onClick={()=>setOpen(!open)}>
            <h6>{titolo}</h6>
        </div>
        <div className={`testo-sf ${open ? 'show' : ''}`}>
            <p>{testo}</p>
        </div>
    </div>
  )
}

export default SingleFaq