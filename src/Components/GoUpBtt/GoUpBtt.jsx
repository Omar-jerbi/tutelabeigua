import React from 'react'
import './GoUpBtt.css'
import icona from './iconabttup.png'

function GoUpBtt() {
    return (
        <div className="goupbtt" onClick={() => { window.scrollTo(0, 0) }}>
            <a className="btn-floating btn-large waves-effect waves-light">
                <img src={icona} alt="" srcset="" />
            </a>
        </div>

    )
}

export default GoUpBtt