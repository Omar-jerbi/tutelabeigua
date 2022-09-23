import React from 'react'
import { useLocation } from 'react-router-dom'
import PageBanner from '../Components/PageBanner/PageBanner';

import { ProjLinks } from './utils/ProjLinks'


function Proj() {

    const current = useLocation();
//ProjLinks.at(current.pathname.at(current.pathname.length-1))



    return (
        <div className="proj">
           <img src={current.pathname.at(current.pathname.length-1)} alt="" />
        </div>
    )
}

export default Proj