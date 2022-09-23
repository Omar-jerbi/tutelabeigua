import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageBanner from '../Components/PageBanner/PageBanner';

import { ProjLinks } from './utils/ProjLinks'
import './styles/Proj.css'

function Proj() {


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      })
    


    const current = useLocation();
    //ProjLinks.at(current.pathname.at(current.pathname.length-1))



    return (
        <div className="proj">
            <PageBanner titYN="N" image={ProjLinks.at(current.pathname.at(current.pathname.length - 1)).banner} ></PageBanner>

            <div className="container">

                <div className="proj-tit-link">
                    <h4>{ProjLinks.at(current.pathname.at(current.pathname.length - 1)).title}</h4>
                    <h6>{ProjLinks.at(current.pathname.at(current.pathname.length - 1)).link}</h6>
                </div>

                <div className="proj-pres">
                    <h3>Il progetto</h3>
                    <p className="flow-text">
                        {ProjLinks.at(current.pathname.at(current.pathname.length - 1)).pres}
                    </p>
                </div>


                <div className="proj-gruppo">
                    <h3>{ProjLinks.at(current.pathname.at(current.pathname.length - 1)).gruppo}</h3>
                    <p className="flow-text">{
                        ProjLinks.at(current.pathname.at(current.pathname.length - 1)).membri.map((v,k)=>{
                            return(
                                <>
                                    {v} <br />
                                </>
                            )
                        })
                        }</p>
                </div>

                <div className="sw-why">
                    <div className="row">
                        <div className="col s12 m12 l6 sw">
                            <h6>Software utilizzati</h6>
                            <p className="flow-text">
                                {
                                    ProjLinks.at(current.pathname.at(current.pathname.length - 1)).sw.map((v, k) => {
                                        return (
                                            <>
                                                {v}<br />
                                            </>
                                        )
                                    })
                                }
                            </p>
                        </div>

                        <div className="divider-large show-on-large hide-on-med-and-down"></div>
                        <div className=" col m12 s12 divider-sm-med show-on-medium-and-down hide-on-large-only"></div>

                        <div className="col s12 m12 l6 why">
                            <h6>Perchè lo avete fatto?</h6>
                            <p className="flow-text">
                                {ProjLinks.at(current.pathname.at(current.pathname.length - 1)).why}
                            </p>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Proj